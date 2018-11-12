import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logoImgSrc from 'assets/logo.png';

import Icons from 'assets/icons';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  max-width: 227px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 40px 0 30px 0;
  overflow-y: scroll;
  @media screen and (max-width: 1100px){
    max-width: 160px
  }
`;
const Item = styled(Link)`
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70px;
  transition-timing-function: ease-in;
  transition: 0.2s;
  text-decoration: none;
  &>div{
    max-width: 23px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    img, svg{
      max-width: 100%;
      height: auto;
    }
  }
  span{
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.1px;
    color: #ffffff;
  }
  &:hover{
    background-color: rgba(192, 182, 155, 0.2);
  }
  ${props => props.isActive && css`
      position: relative;
      background-color: rgba(192, 182, 155, 0.6)!important;
      &:after{
        display: block;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 6px;
        box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.1);
        background-color: #c0b69b;
      }
  `}
  @media screen and (max-width: 1100px){
    min-height: 50px;
    padding: 10px;
    &>div{
      img, svg{
        max-width: 20px;
      }
    }
  }
`;
const LogoItem = styled(Link)`
  display: block;
  max-width: 192px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0 auto 55px auto;
  @media screen and (max-width: 1100px){
    margin-bottom: 20px
  }
`;
const LogoImg = styled.img`
  width: 100%;
  height: auto;
`;
const Powered = styled.div`
    margin-top: auto;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: rgba(255,255,255, .6);
    font-size: 12px;
    padding: 20px 10px 0 10px;
    a{
      color: rgba(255,255,255, .6);
      text-decoration: none;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        bottom: -1px;
        height: 1px;
        left: 0;
        background-color: #ffffff;
        width: 0;
        transition-timing-function: ease-in;
        transition: 0.2s;
      }
      &:hover{
        &:after{
          width: 100%;
        }
      }
    }
`;
const Layout = styled.div`
  display: block;
  padding: 19px 11px 20px 258px;
  min-width: 800px;
  @media (max-width: 1100px) {
    padding: 10px 10px 15px 170px
  }
`;

export default withRouter(({ children, match }) => (
  <Layout>
    <Container>
      <LogoItem to="/">
        <LogoImg src={logoImgSrc} />
      </LogoItem>
      <Item isActive={match.path.indexOf('/dashboard') !== -1} to="/dashboard">
        <div>
          <Icons.Home color="#ffffff" />
        </div>
        <span>dashboard</span>
      </Item>
      <Item isActive={match.path.indexOf('/checklist') !== -1} to="/checklist">
        <div>
          <Icons.Checklist color="#ffffff" />
        </div>
        <span>checklist</span>
      </Item>
      <Item isActive={match.path.indexOf('/guestlist') !== -1} to="/guestlist">
        <div>
          <Icons.People color="#ffffff" />
        </div>
        <span>guest list</span>
      </Item>
      <Item isActive={match.path.indexOf('/seating-chart') !== -1} to="/seating-chart">
        <div>
          <Icons.ChairIcon color="#ffffff" />
        </div>
        <span>seating chart</span>
      </Item>
      <Item isActive={match.path.indexOf('/budget-planner') !== -1} to="/budget-planner">
        <div>
          <Icons.MoneyIcon color="#ffffff" />
        </div>
        <span>budget planner</span>
      </Item>
      <Item isActive={match.path.indexOf('/memories') !== -1} to="/memories">
        <div>
          <Icons.Photos color="#ffffff" />
        </div>
        <span>memories</span>
      </Item>
      <Powered>Powered by <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">VenueX</a></Powered>
    </Container>
    {children}
  </Layout>
));
