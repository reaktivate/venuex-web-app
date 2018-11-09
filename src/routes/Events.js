/* eslint-disable */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import SidebarLayout from 'components/Sidebar.js';
import AddEventModal from 'components/events/AddEventModal';
import EventDetailModal from 'components/events/EventDetailModal';
import moment from 'moment';
import EventsCalendar from 'components/events/EventsCalendar';
import EventsHeader from 'components/events/EventsHeader';

const LegendItem = styled.div`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }

  div {s
    display: inline-block;
    background-color: ${props =>
      `${props.theme.colors.primary}${props.opacity}`};
    width: 30px;
    border-radius: 2px;
    margin-right: 5px;
    height: 20px;
  }
`;

class Events extends PureComponent {

  state = {
    date: moment(),
    addDate: new Date(),
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

  handleToday = () => {
    this.setState({
      date: moment(),
    });
  };

  handleAdd = (date = null) => {
    console.log(date);
    this.setState({
      isAddingEvent: true,
      addDate: date?date:this.state.date
    });
  }

  handleEventClick = event => this.props.history.push(`/events/${event.id}`)

  render() {
    const { eventsByDate, match, allEvents } = this.props;

    let event;
    if (this.props.allEvents && match.params.id) {
      event = {
        ...this.props.allEvents[match.params.id],
        id: match.params.id,
      };
    }
    let events = [];

    for (let id in allEvents) {
      let event = {
        ...allEvents[id],
        start: new Date(allEvents[id].start),
        end: new Date(allEvents[id].start),
        title: allEvents[id].name,
        id: id
      }
      events.push(event)
    }

    return (
      <SidebarLayout>
        <div style={{ flex: 1, padding: 20 }}>
          {this.state.isAddingEvent && <AddEventModal
            isOpen={this.state.isAddingEvent}
            onClose={() => this.setState({ isAddingEvent: false })}
            initialValues={{
              dateTimeDuration: {
                date: moment(this.state.addDate)
              },
            }}
          />}
          {event &&<EventDetailModal
            event={event}
            top={100}
            bottom="initial"
          />}
          <EventsHeader
            date={this.state.date}
            onNextMonth={this.handleNextMonth}
            onPreviousMonth={this.handlePreviousMonth}
            onAdd={this.handleAdd}
            onToday={this.handleToday}
          />
          <EventsCalendar
            events={events}
            date={this.state.date.toDate()}
            onEventClick = {this.handleEventClick}
            onCellClick = {this.handleAdd}
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
      'equalTo=test_venue',
    ],
  }]),
  connect(state => ({
      allEvents: isLoaded(state.firebase.data.events) ? state.firebase.data.events : {},
    })),
)(Events);
