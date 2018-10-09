import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import SidebarLayout from 'components/Sidebar.js';
import Calendar from 'components/Calendar';
import AddEventModal from 'components/events/AddEventModal';
import moment from 'moment';

const LegendItem = styled.div`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }

  div {
    display: inline-block;
    background-color: ${props =>
      `${props.theme.colors.primary}${props.opacity}`};
    width: 30px;
    border-radius: 2px;
    margin-right: 5px;
    height: 20px;
  }
`;

// const events = {
//   '2018-10-19': [
//     {
//       label: 'It\'s luis birthday!',
//       opacity: 'A6',
//     },
//     {
//       label: 'It\'s luis birthday!',
//       opacity: 'FF',
//     },
//     {
//       label: 'Something else',
//       opacity: '59'
//     },
//     {
//       label: 'It\'s luis birthday!',
//       opacity: 'A6',
//     },
//   ],
//   '2018-10-13': [
//     {
//       label: 'Graduation time',
//       opacity: 'A6',
//     },
//   ],
// };

class Events extends PureComponent {

  state = {
    date: moment(),
    isAddingEvent: false,
  };

  handleNextMonth = () => {
    this.setState({
      date: moment(this.state.date.add(1, 'M')),
    });
  };

  handlePreviousMonth = () => {
    this.setState({
      date: moment(this.state.date.subtract(1, 'M')),
    });
  }

  handleAdd = () => {
    this.setState({
      isAddingEvent: true,
    });
  }

  render() {
    const { eventsByDate } = this.props;
    return (
      <SidebarLayout>
        <div style={{ flex: 1, padding: 20 }}>
          <AddEventModal isOpen={this.state.isAddingEvent} />
          <Calendar
            events={eventsByDate}
            date={this.state.date}
            onNextMonth={this.handleNextMonth}
            onPreviousMonth={this.handlePreviousMonth}
            onAdd={this.handleAdd}
          />
          <div>
            <LegendItem opacity="FF"><div /> = 1st payment</LegendItem>
            <LegendItem opacity="A6"><div /> = 2nd payment</LegendItem>
            <LegendItem opacity="59"><div /> = 3rd payment</LegendItem>
          </div>
        </div>
      </SidebarLayout>
    );
  }
}

export default compose(
  firebaseConnect(() => [{
    path: 'events',
    queryParams: [
      'orderByChild=venueId',
      'equalTo=test_venue'
    ],
  }]),
  connect(state => {
    if (!isLoaded(state.firebase.data.events)) {
      return {
        eventsByDate: {},
      };
    }

    const eventsByDate = {};
    Object.values(state.firebase.data.events).forEach(event => {
      const eventDate = moment(event.start).format('YYYY-MM-DD');
      const events = eventsByDate[eventDate] || [];
      events.push({
        label: event.name,
        opacity: 'FF',
      });
      eventsByDate[eventDate] = events;
    });

    return {
      eventsByDate,
    };
  }),
)(Events);
