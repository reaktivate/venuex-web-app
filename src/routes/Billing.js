import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import moment from 'moment';
import styled from 'styled-components';
import { humanize } from 'utils';
import { getUser } from 'reducers/core';
import { withVenueConfig } from 'containers/VenueConfigProvider';
import SidebarLayout from 'components/Sidebar';
import Button from 'components/Button';
import Table from 'components/Table';
import ConsultantLabel from 'components/Consultant';
import leftArrowIcon from 'assets/caret-left-custom.svg';
import rightArrowIcon from 'assets/caret-right-custom.svg';

const Container = styled.div`
  border: solid 1px #ededed;
  background-color: #fafafa;
  padding: 0px 15px;
`;

const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
`;

const ArrowIcon = styled.img`
  height: 17px;
  object-fit: contain;
  margin: 0px 20px;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const Stats = styled.div`
  background-color: #FFF;
  margin: 15px 0px;
  border: solid 1px #fafafa;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  color: #181818;
  font-size: 15px;
  padding-left: 30px;
  margin-left: 30px;
  border-left: solid 1px #b0b0b0;
  font-family: Lora;
  font-weight: 500;

  &:first-child {
    border-left: none;
    margin-left: 0px;
    padding-left: 0px;
  }

  .label {
    color: #b0b0b0;
    font-weight: 500;
  }

  .value {
    font-size: 40px;
  }
`;

const TableContainer = styled.div`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  color: #222222;
  margin-bottom: 20px;
`;

const DueLabel = styled.span`
  color: ${props => props.color || '#b0b0b0'};
`;

class Billing extends PureComponent {

  constructor(props) {
    super(props);
    const today = moment();
    this.state = {
      date: moment(today.format('YYYY-MM-01')),
    };
  }

  handleNextMonth = () => {
    this.setState({
      date: moment(this.state.date.add(1, 'M')),
    });
  };

  handlePreviousMonth = () => {
    this.setState({
      date: moment(this.state.date.subtract(1, 'M')),
    });
  };

  eventsThisMonth = () => {
    const currentMonth = this.state.date.format('YYYY-MM');
    const eventsThisMonth = this.props.allEvents.filter(event => {
      const eventMonth = moment(event.start).format('YYYY-MM');
      return eventMonth === currentMonth;
    });
    return eventsThisMonth;
  };

  render() {
    const eventsThisMonth = this.eventsThisMonth();

    const total = eventsThisMonth.reduce((accumulator, currentValue) =>
      accumulator + parseInt((currentValue.minimumGuests || 0), 10)
    , 0);

    const dueDate = moment(this.state.date).add(1, 'M');

    const balance = (
      this.props.venueConfig.billingMethod === 'payPerGuest' ?
        total : 250 * eventsThisMonth.length
    );


    const daysUntilDue = dueDate.diff(moment(), 'days');

    return (
      <SidebarLayout>
        <div style={{ flex: 1, padding: 20 }}>
          <Container>
            <Header>
              <div />
              <div>
                <MonthPicker>
                  <ArrowIcon
                    src={leftArrowIcon}
                    onClick={this.handlePreviousMonth}
                  />
                  <div>{this.state.date.format('MMMM YYYY')}</div>
                  <ArrowIcon
                    src={rightArrowIcon}
                    onClick={this.handleNextMonth}
                  />
                </MonthPicker>
              </div>
              <div />
            </Header>

            <Stats>
              <Stat>
                <div className="label">Total Events</div>
                <div className="value">{eventsThisMonth.length}</div>
              </Stat>
              <Stat>
                <div className="label">Total Guests</div>
                <div className="value">{total}</div>
              </Stat>
              <Stat>
                <div className="label">Current Balance</div>
                <div className="value">${balance}</div>
              </Stat>
              <Stat>
                <div className="label">
                  Due date:&nbsp;
                  <DueLabel
                    color={daysUntilDue <= 8 ? '#c02026' : '#b0b0b0'}
                  >
                    {dueDate.fromNow()}
                  </DueLabel>
                </div>
                <div className="value">{dueDate.format('MMM D, YYYY')}</div>
              </Stat>
              <div>
                <Button kind="success" label="Make A Payment" />
              </div>
            </Stats>

            <div>
              <TableContainer>
                <Table>
                  <Table.Row>
                    <Table.Cell width="20%">
                      <Table.HeaderCell
                        title="Client"
                      />
                    </Table.Cell>
                    <Table.Cell width="20%">
                      <Table.HeaderCell
                        title="Event"
                      />
                    </Table.Cell>
                    <Table.Cell width="20%">
                      <Table.HeaderCell
                        title="Event Type"
                      />
                    </Table.Cell>
                    <Table.Cell width="10%">
                      <Table.HeaderCell
                        title="Guests"
                      />
                    </Table.Cell>
                    <Table.Cell width="10%">
                      <Table.HeaderCell
                        title="Event Date"
                      />
                    </Table.Cell>
                    <Table.Cell width="20%">
                      <Table.HeaderCell
                        title="Created By"
                      />
                    </Table.Cell>
                  </Table.Row>

                  {eventsThisMonth.map(event => {
                    const owner = this.props.employees[event.owner] || {};
                    const { fullName, picture } = owner;
                    return (
                      <Table.Row>
                        <Table.Cell width="20%">
                          {event.clientName}
                        </Table.Cell>

                        <Table.Cell width="20%">
                          {event.name}
                        </Table.Cell>

                        <Table.Cell width="20%">
                          {humanize(event.type)}
                        </Table.Cell>

                        <Table.Cell width="10%">
                          {event.minimumGuests || 0}
                        </Table.Cell>

                        <Table.Cell width="10%">
                          {moment(event.start).format('YYYY-MM-DD')}
                        </Table.Cell>

                        <Table.Cell width="20%">
                          <ConsultantLabel
                            name={fullName}
                            picture={picture}
                          />
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table>
              </TableContainer>
            </div>
          </Container>
        </div>
      </SidebarLayout>
    );
  }
}

export default compose(
  withVenueConfig,
  firebaseConnect(({ venueConfig }) => [{
    path: 'events',
    queryParams: [
      'orderByChild=venueId',
      'equalTo=test_venue'
    ],
  }, {
    path: 'employees',
    queryParams: [
      'orderByChild=venueId',
      'equalTo=test_venue'
    ],
  },
  `invoices/${venueConfig.id}`,
  ]),
  connect(state => {
    const isEventsLoaded = isLoaded(state.firebase.data.events);
    const isEmployeesLoaded = isLoaded(state.firebase.data.employees);

    const allEvents = isEventsLoaded ?
      Object.keys(state.firebase.data.events).map(key => ({
          ...state.firebase.data.events[key],
          id: key,
      })) :
      [];

    const isDataLoaded = isEventsLoaded && isEmployeesLoaded;
    return {
      isDataLoaded,
      allEvents: isDataLoaded ? allEvents : [],
      employees: state.firebase.data.employees,
      currentUser: getUser(state),
    };
  }),
)(Billing);
