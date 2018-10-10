import React from 'react';
import styled from 'styled-components';
import BaseInput from 'components/form/BaseInput';


const Textarea = styled.textarea`
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 0;
    border: solid 1px ${props => props.theme.colors.primary};
  }
`;

export default props => (
  <BaseInput {...props} alignItems="flex-start">
    <Textarea {...props.input} rows={6} />
  </BaseInput>
);

