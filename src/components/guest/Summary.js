import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ImportBtn from './ImportBtn.js';

const SummaryContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  padding: 25px 30px 14px 7px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  align-items: center;
  &>div{
    padding: 0 23px 10px 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >span:first-child{
      text-align: center;
      margin-bottom: 11px;
      font-size: 15px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.3px;
      color: #b0b0b0;
    }
    &>span:last-child{
      font-family: Lora;
      font-size: 46px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: -0.9px;
      color: #181818;
    }
    &.total{
      position: relative;
      &:after, &:before{

        content: '';
        right: 4px;
        position: absolute;
        width: 4px;
        border-radius: 50%;
        height: 4px;
        background-color: #b0b0b0;
      }
      &:after{
        top: 52px;
      }
      &:before{
        top: 45px;
      }
    }
    &.yes{
      span:first-child{
        color: #2cb070;
      }
    }
    &.no{
      span:first-child{
        color: #c02026;
      }
    }
    &.maybe{
      span:first-child{
        color: #f9cc4f;
      }
    }
    &.awaiting{
      span:first-child{
        color: #888888;
      }
    }
    &.t_assigned{
      border-left: 1px solid #b0b0b0;
      span:first-child{
        color: #b0b0b0;
      }
    }
  }
  &>button{
    margin: auto 0 auto auto;
  }
  @media screen and (max-width: 1250px){
      &>div{
        padding: 0 10px 10px 10px;
        margin-bottom: 10px;
      }
  }
  @media screen and (max-width: 1000px){
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 15px 10px;
    &>div{
      flex-grow: 1;
      box-sizing: border-box;
      &.total{
        &:after, &:before{
          right: 0%;
        }
      }
    }
    &>button{
      margin: auto;
    }
  }
`;
export default class SummaryBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SummaryContainer>
        <div className="total">
          <span>Total Guests</span>
          <span>200</span>
        </div>
        <div className="yes">
          <span>Yes</span>
          <span>96</span>
        </div>
        <div className="no">
          <span>No</span>
          <span>28</span>
        </div>
        <div className="maybe">
          <span>Maybe</span>
          <span>32</span>
        </div>
        <div className="awaiting">
          <span>Awaiting</span>
          <span>44</span>
        </div>
        <div className="t_assigned">
          <span>Table Assigned</span>
          <span>82</span>
        </div>
        <ImportBtn />
      </SummaryContainer>
    );
  }
}
