import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
  content: {
    width: 580,
    margin: '0 auto',
    borderRadius: 0,
    border: 'none',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }
};

const ModalFooter = styled.div`
  padding: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-top: solid 1px #d8d8d8;
  text-align: center;
`;

const MModal = props =>
  <Modal style={customStyles} {...props} />;

MModal.Footer = ModalFooter;

export default MModal;
