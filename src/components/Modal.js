import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
  },
  content: {
    width: 760,
    margin: '0 auto',
    borderRadius: 0,
    border: 'none',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
    padding: 0,
  }
};

export default props => <Modal style={customStyles} {...props} />;
