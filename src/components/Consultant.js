import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 500;
`;

const Picture = styled.img`
  width: 40px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: ${props => (props.bottom ? '19px' : '')}
  margin-right: 10px;
  
`;

const Initials = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  letter-spacing: 2px;
  background-color: ${props => `${props.theme.colors.primary}`};
  color: #ffffff;
  font-weight: 600;
  margin-right: 10px;
  margin-bottom: ${props => (props.bottom ? '19px' : '')};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default props => (
  <Container>
    {props.picture ? (
      <Picture src={props.picture} />
    ) : (
      <Initials>{props.initials}</Initials>
    )}
    <Name>{props.name}</Name>
  </Container>
);
