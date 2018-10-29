import styled, { css } from 'styled-components';

const TableCell = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  display: flex;
  min-width: 50px;
  font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
  ${props =>
    props.center === true &&
    css`
      justify-content: center;
    `};
  ${props =>
    props.selected === true &&
    css`
      font-weight: bold;
      color: #181818;
    `};
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight}
    ${props =>
      props.emphasize === true &&
      css`
        font-weight: bold;
        color: #222222;
      `};
`;

export default TableCell;
