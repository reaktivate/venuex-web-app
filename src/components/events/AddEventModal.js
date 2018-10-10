import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  formValueSelector,
  reduxForm,
  Field,
} from 'redux-form';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button from 'components/Button';
import ConsultantsPicker from 'components/form/ConsultantsPicker';
import DateTimeDurationField from 'components/form/DateTimeDurationField';
import Input from 'components/form/Input';
import Select from 'components/form/Select';
import Textarea from 'components/form/Textarea';
import DatePickerField from 'components/form/DatePickerField';
import { withVenueConfig } from 'containers/VenueConfigProvider';

const Header = styled.div`
  background-color: ${props => props.theme.colors.primary}66;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 0px;
  font-size: 24px;
  text-align: center;
  color: #181818;
`;

const Content = styled.div`
  padding: 50px;
  overflow: scroll;
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

class AddEventModal extends PureComponent {

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

  render() {
    const { venueConfig } = this.props;
    const { selectedRoom } = this.props;
    return (
      <Modal isOpen>
        <Header>
          <div>Add New Event</div>
        </Header>
        <Content >
          <Help>* All fields are required except the Notes.</Help>

          <Field
            name="consultants"
            component={ConsultantsPicker}
          />

          <Field
            name="name"
            label="Event name"
            component={Input}
          />

          <Field
            name="dateTimeDuration"
            label="Event Date & Time"
            component={DateTimeDurationField}
          />

          <Field
            name="minimumGuests"
            label="Guest minimum"
            component={Input}
            type="number"
          />

          <Field
            name="type"
            label="Event Type"
            component={Select}
            options={[
              { value: 'wedding', label: 'Wedding' },
            ]}
          />

          <Field
            name="room"
            label="Room"
            component={Select}
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
              />
              <Field
                label="2nd:"
                name="secondPaymentDue"
                component={DatePickerField}
              />

              <Field
                label="3rd:"
                name="thirdPaymentDue"
                component={DatePickerField}
              />
            </div>
          </PaymentSchedule>

          <Field
            name="ceremonyKind"
            label="Ceremony"
            component={Select}
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

        </Content>

        <Modal.Footer>
          <StyledButton label="Discard" />
          <StyledButton label="Save" kind="primary" />
        </Modal.Footer>
      </Modal>
    );
  }
}

const selector = formValueSelector('Add event');

export default compose(
  connect(state => ({
    selectedRoom: selector(state, 'room'),
    selectedLayout: selector(state, 'tableLayout'),
  })),
  withVenueConfig,
  reduxForm({
    form: 'Add event',
  })
)(AddEventModal);
