import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import Modal from 'components/Modal';
import ConsultantsPicker from 'components/form/ConsultantsPicker';

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
`;

const Help = styled.div`
  text-align: right;
  color: #b0b0b0;
`;

const AddEventModal = () => (
  <Modal isOpen>
    <Header>
      <div>Add New Event</div>
    </Header>
    <Content>
      <Help>* All fields are required except the Notes.</Help>

      <Field
        name="consultants"
        component={ConsultantsPicker}
      />
    </Content>
  </Modal>
);

export default reduxForm({
  form: 'Add event',
})(AddEventModal);
