import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect } from 'react-redux-firebase';
import styled from 'styled-components';
import SidebarLayout from 'components/SidebarNew.js';
import Search from 'components/guest/Search.js';
import UserBox from 'components/guest/UserBox.js';
import Summary from 'components/guest/Summary.js';


const Container = styled.div`
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ededed;
  background-color: #fcfbfc;
  @media screen and (max-width: 1100px){
    padding: 10px;
  }
`;
const Header = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    &:after{
      content: '';
      position: absolute;
      left: -20px;
      width: calc(100% + 40px);
      bottom: -1px;
      height: 1px;
      background-color: #ededed;
    }
    @media screen and (max-width: 1100px){
      &:after{
        left: -10px;
        width: calc(100% + 20px);
      }
    }
`;
class Guestlist extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SidebarLayout>
        <Container>
          <Header>
            <Search />
            <UserBox />
          </Header>
          <Summary />
        </Container>
      </SidebarLayout>
    );
  }
}

export default compose(
  firebaseConnect(() => [{
    path: 'employees',
    queryParams: [
      'orderByChild=venueId',
      'equalTo=test_venue'
    ],
  }]),
  connect(state => {
    if (!isLoaded(state.firebase.data.employees)) {
      return {
        employees: [],
      };
    }

    return {
      employees: Object.keys(state.firebase.data.employees).map(key => ({
        ...state.firebase.data.employees[key],
        id: key,
      })),
    };
  })
)(Guestlist);
