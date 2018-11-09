import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import Switch from 'components/form/Switch';
import Button from 'components/Button';
import ConsultantsPicker from 'components/form/ConsultantsPicker';
import {
  DateTimeDurationFilled,
  OwnerSelectedValidator,
  NotEmptyValidator,
} from 'utils/formValidators';
import Select from 'components/form/Select';
import Textarea from 'components/form/Textarea';
import DateTimeDurationField from 'components/form/DateTimeDurationField';
import { withVenueConfig } from 'containers/VenueConfigProvider';
import DatePickerField from 'components/form/DatePickerField';
import Input from 'components/form/Input';
import ModalDialog from 'components/Dialog/ModalDialog';

const Header = styled.div`
  padding: 30px 0px;
  font-size: 24px;
  text-align: center;
  color: #181818;
`;

const Footer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center
`;

const Help = styled.div`
  text-align: right;
  color: #b0b0b0;
`;

const PaymentSchedule = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-size: 15px;
  color: #7d7d7d;
  font-weight: 500;
  padding-top: 20px;
  padding-right: 15px;
`;

const StyledButton = styled(Button)`
  margin: 0px 5px;
`;

class EventModalForm extends PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.selectedLayout !== this.props.selectedLayout) {
      if (!this.props.selectedLayout) {
        this.props.change('guestsPerTable', '');
      } else {
        this.props.change(
          'guestsPerTable',
          this.props.venueConfig.rooms[
            this.props.selectedRoom
          ].layouts[
            this.props.selectedLayout
          ].perTable
        );
      }
    }
  }

  renderCustomField = (field) => {
    let FieldComponent;
    let validators;
    switch (field.kind) {
      case 'string':
        FieldComponent = Input;
        validators = NotEmptyValidator;
        break;
      case 'select':
        FieldComponent = Select;
        validators = NotEmptyValidator;
        break;
      case 'boolean':
        FieldComponent = Switch;
        break;
      default:
        FieldComponent = Input;
        validators = NotEmptyValidator;
    }

    return (
      <Field
        name={field.id}
        label={field.label}
        options={field.options}
        component={FieldComponent}
        validate={validators}
      />
    );
  }

  render() {
    const { venueConfig, selectedRoom, title } = this.props;
    const customFields = (
      Object.keys(venueConfig.eventsExtraFields).map(fieldId => ({
        id: fieldId,
        label: venueConfig.eventsExtraFields[fieldId].label,
        kind: venueConfig.eventsExtraFields[fieldId].kind,
        options: venueConfig.eventsExtraFields[fieldId].options,
      }))
    );

    const HeaderBlock = () => (
        <Header>
          <div>{title}</div>
        </Header>
    );

    const FooterBlock = () => (
      <Footer>
        <StyledButton
          label="Discard"
          onClick={this.props.onClose}
        />
        <StyledButton
          label="Save"
          kind="primary"
          onClick={this.props.handleSubmit}
        />
      </Footer>
    );

    return (
      <ModalDialog
        open={this.props.isOpen}
        onClose={this.props.onClose}
        Header={HeaderBlock}
        Footer={FooterBlock}
      >
        <Help>* All fields are required except the Notes.</Help>

        <Field
          name="consultants"
          component={ConsultantsPicker}
          validate={OwnerSelectedValidator}
        />

        <Field
          name="name"
          label="Event name"
          component={Input}
          validate={NotEmptyValidator}
        />

        <Field
          name="dateTimeDuration"
          label="Event Date & Time"
          component={DateTimeDurationField}
          validate={DateTimeDurationFilled}
        />

        <Field
          name="minimumGuests"
          label="Guest minimum"
          component={Input}
          type="number"
          validate={NotEmptyValidator}
        />

        <Field
          name="type"
          label="Event Type"
          component={Select}
          validate={NotEmptyValidator}
          options={[
            { value: 'wedding', label: 'Wedding' },
          ]}
        />

        <Field
          name="room"
          label="Room"
          component={Select}
          validate={NotEmptyValidator}
          options={Object.keys(venueConfig.rooms).map(roomId => ({
            label: venueConfig.rooms[roomId].name,
            value: roomId,
          }))}
        />

        {selectedRoom &&
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 4 }}>
              <Field
                name="tableLayout"
                label="Table Layout"
                component={Select}
                options={
                  Object.keys(venueConfig.rooms[selectedRoom].layouts).map(layoutId => ({
                    label: `${venueConfig.rooms[selectedRoom].layouts[layoutId].numberOfTables} tables`,
                    value: layoutId,
                  }))
                }
              />
            </div>

            <div style={{ flex: 3 }}>
              <Field
                name="guestsPerTable"
                label="Guests per table"
                component={Input}
              />
            </div>
          </div>}

        <Field
          name="clientName"
          label="Client name"
          component={Input}
          validate={NotEmptyValidator}
        />

        <Field
          name="notes"
          label="Notes"
          component={Textarea}
        />

        <PaymentSchedule>
          <Label>Payment schedule:</Label>
          <div style={{ flex: 1 }}>
            <Field
              label="1st:"
              name="firstPaymentDue"
              component={DatePickerField}
              validate={NotEmptyValidator}
            />
            <Field
              label="2nd:"
              name="secondPaymentDue"
              component={DatePickerField}
              validate={NotEmptyValidator}
            />

            <Field
              label="3rd:"
              name="thirdPaymentDue"
              component={DatePickerField}
              validate={NotEmptyValidator}
            />
          </div>
        </PaymentSchedule>

        <Field
          name="ceremonyKind"
          label="Ceremony"
          component={Select}
          validate={NotEmptyValidator}
          options={[
            {
              label: 'Onsite',
              value: 'onsite',
            },
            {
              label: 'Offsite',
              value: 'offsite',
            }
          ]}
        />

        {customFields.map(this.renderCustomField)}
      </ModalDialog>
    );
  }
}

const selector = formValueSelector('Event form');

export default compose(
  withVenueConfig,
  connect(state => ({
    selectedRoom: selector(state, 'room'),
    selectedLayout: selector(state, 'tableLayout'),
  })),
  reduxForm({
    form: 'Event form',
  })
)(EventModalForm);
