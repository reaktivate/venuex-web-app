import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import closeIcon from 'assets/icons/Close';
import Button from '@material-ui/core/Button';

const StyledDialog = styled(Dialog)``;


const Header = styled.div`
  padding: 48px 34px 0px 34px;
  font-size: 24px;
  text-align: center;
  color: #181818;
`;

const IClose = styled(closeIcon)`
  cursor: pointer;
`;

const StyledDialogTitle = styled(DialogTitle)`
  &&{
    padding: 20px 20px 20px 20px;
  }
`;

const StyledDialogActions = styled(DialogActions)`
  &&{
    margin: auto;
    border: none;
    padding: 14px 15px 80px 15px;
    display: block;
  }
`;

const SButton = styled(Button)`
  &&{
    height: 50px;
    padding: 0px 30px;
    box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
    border: solid 1px #ededed;
    font-size: 12px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #7d7d7d;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
  
    ${props => props.kind === 'primary' && css`
      background-color: ${props.theme.colors.primary};
      color: #FFF;
      border: solid 1px ${props.theme.colors.primary};
    `}
  
    ${props => props.kind === 'success' && css`
      background-color: #2cb070;
      color: #FFF;
    `}
  
    ${props => props.size === 'small' && css`
      padding: 0px 15px;
      height: 40px;
    `}
  
    ${props => props.kind === 'danger' && css`
      color: #c02026;
    `}
  
    ${props => props.kind === 'white' && css`
      background-color: #ffffff;
      color: #fff;
      border: solid 1px #ededed;
    `}
  }
`;

class ConfirmationDialog extends PureComponent {

  render() {
    const {
      open,
      onClose,
      onConfirm,
      title,
      confirmButtonTitle
    } = this.props;

    return (
      <StyledDialog
        open={open}
        onClose={onClose}
      >
        <StyledDialogTitle>
          <div style={{ float: 'right' }}><IClose onClick={onClose} size={14} /></div>
          <Header>
            {title}
          </Header>
        </StyledDialogTitle>
        <StyledDialogActions>
          <SButton kind="danger" onClick={onClose}>
            Cancel
          </SButton>
          <SButton onClick={onConfirm}>
            {confirmButtonTitle || 'Confirm'}
          </SButton>
        </StyledDialogActions>
      </StyledDialog>
    );
  }
}

export default ConfirmationDialog;
