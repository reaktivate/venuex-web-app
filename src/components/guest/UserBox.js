import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icons from 'assets/icons';

const UserContainer = styled.div`
  display: flex;
  margin-left: auto;
  button {
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 0;
    &:focus, &:active{
      outline: none;
      border: 0;
    }
  }
  .item{
    margin-right: 18px;
    background-color: #c0b69b;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    transition-timing-function: ease-in;
    transition: .2s box-shadow;
    &:hover{
      box-shadow: 0 0 10px 0 rgba(151,134,89,.5);
    }
    img, svg{
      max-width: 100%;
      min-width: 70%;
      height: auto;
    }
  }
  .user{
    background-color: #ccc;
    img, svg{
      width: 100%;
      height: auto;
    }
  }
`;
export default class UserBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <UserContainer className="user-box">
          <button className="item">
            <Icons.ImportFile color="#ffffff" />
          </button>
          <button className="item">
            <Icons.AddGroup color="#ffffff" width="90%" />
          </button>
          <button className="item">
            <Icons.AddUserIcon color="#ffffff" />
          </button>
          <button className="user" />
      </UserContainer>
    );
  }
}
