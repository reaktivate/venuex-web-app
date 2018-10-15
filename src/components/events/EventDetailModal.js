import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button from 'components/Button';
import SideTabs from 'components/SideTabs';
import ConsultantLabel from 'components/Consultant';
import Switch from 'components/Switch';
import { withVenueConfig } from 'containers/VenueConfigProvider';
import { humanize } from 'utils';
import ringsImage from 'assets/rings.svg';
import calendarIcon from 'assets/calendar-gray.svg';
import notesIcon from 'assets/notes-icon.svg';
import clientDetailsIcon from 'assets/client-details-icon.svg';
import grayRoomIcon from 'assets/room-gray.svg';


const Header = styled.div`
  height: 160px;
  box-shadow: box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary}66;
  padding: 0px 20px;
`;

const EventKindBadge = styled.div`
  height: 120px;
  width: 120px;
  background-color: #FFF;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0px 2px 4px rgba(125, 125, 125, 0.2);
`;

const KindImage = styled.img`
  width: 120px;
  height: 120px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: #181818;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #7d7d7d;
  font-weight: 500;
`;

const DescriptionList = styled.dl`
  padding-left: 35px;
  font-weight: 500;
  font-size: 15px;

  .row {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }

  dt {
    display: inline-block;
    color: #7d7d7d;
    white-space: nowrap;
  }
  dd {
    display: inline-block;
    color: #222222;
    margin-left: 15px;
  }
`;

const Flex = styled.div`
  display: flex;

  .row {
    margin-right: 15px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin: 0 5px;
`;

const EventDetailModal = ({ venueConfig, event, ...restProps }) => {
  if (!event) {
    return <div />;
  }

  const room = venueConfig.rooms[event.room];

  const { numberOfTables } = room.layouts[event.tableLayout];

  const { guestsPerTable } = event;

  return (
    <Modal {...restProps} isOpen={Boolean(event)}>
      <Header>
        <EventKindBadge>
          <KindImage src={ringsImage} />
        </EventKindBadge>
        <div>
          <Title>Sarah & Kyle’s Wedding</Title>
          <SubTitle>Friday, September 12th</SubTitle>
        </div>
      </Header>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <SideTabs
          tabs={[
            {
              title: 'Event overview',
              icon: calendarIcon,
              content: (
                <DescriptionList>
                  <div className="row">
                    <dt>Consultant:</dt>
                    <dd>
                      <ConsultantLabel
                        picture="https://placehold.it/100x100"
                        name="Matthew chow"
                      />
                    </dd>
                  </div>

                  <div className="row">
                    <dt>Event Type:</dt>
                    <dd>{humanize(event.type)}</dd>
                  </div>

                  <div className="row">
                    <dt>Start Time:</dt>
                    <dd>{moment(event.start).format('HH:mm a')}</dd>
                  </div>

                  <div className="row">
                    <dt>End Time:</dt>
                    <dd>{moment(event.end).format('HH:mm a')}</dd>
                  </div>
                </DescriptionList>
              )
            },
            {
              title: 'Client details',
              icon: clientDetailsIcon,
              content: (
                <DescriptionList>
                  <div className="row">
                    <dt>Client Name:</dt>
                    <dd>{event.clientName}</dd>
                  </div>

                  <div className="row">
                    <dt>Client email:</dt>
                    <dd>{event.clientEmail}</dd>
                  </div>

                  <div className="row">
                    <dt>Client phone:</dt>
                    <dd>{event.clientPhone}</dd>
                  </div>

                  <div className="row" style={{ paddingRight: 15 }}>
                    <dt>Payment:</dt>
                    <dd>
                      <div className="row">
                        <Flex>
                          <div style={{ marginRight: 10 }}>
                            <dt>1st:</dt>
                            <dd>10/01/17</dd>
                          </div>
                          <div>
                            <dt>Paid:</dt>
                            <dd>Y / N</dd>
                          </div>
                        </Flex>
                      </div>
                      <div className="row">
                        <Flex>
                          <div style={{ marginRight: 10 }}>
                            <dt>2st:</dt>
                            <dd>10/01/17</dd>
                          </div>
                          <div>
                            <dt>Paid:</dt>
                            <dd>Y / N</dd>
                          </div>
                        </Flex>
                      </div>
                      <div className="row">
                        <Flex>
                          <div style={{ marginRight: 10 }}>
                            <dt>2st:</dt>
                            <dd>10/01/17</dd>
                          </div>
                          <div>
                            <dt>Paid:</dt>
                            <dd>Y / N</dd>
                          </div>
                        </Flex>
                      </div>
                      <div className="row">
                        <div>
                          <dt>Payment Notification:</dt>
                          <dd><Switch input={{ value: true }} /></dd>
                        </div>
                      </div>
                      <div className="row">
                        <dt>Reminder Email:</dt>
                        <dd><Button size="small" label="Send now" /></dd>
                      </div>
                    </dd>
                  </div>
                </DescriptionList>
              ),
            },
            {
              title: 'Room & Layout',
              icon: grayRoomIcon,
              content: (
                <DescriptionList>
                  <div className="row">
                    <dt>Room:</dt>
                    <dd>{room.name}</dd>
                  </div>
                  <div className="row">
                    <dt>Layout:</dt>
                    <dd>{numberOfTables}</dd>
                  </div>
                  <div className="row">
                    <dt>Guests per table</dt>
                    <dd>{guestsPerTable}</dd>
                  </div>
                </DescriptionList>
              )
            },
            {
              title: 'Notes',
              icon: notesIcon,
              content: (
                <DescriptionList>
                  <div className="row">
                    <dt>Notes</dt>
                    <dd>{event.notes}</dd>
                  </div>
                </DescriptionList>
              )
            },
          ]}
        />
      </div>
      <Modal.Footer>
        <FooterButtons>
          <div>
            <StyledButton
              label="Download seating chart"
            />
          </div>
          <div>
            <StyledButton
              label="Delete"
              kind="danger"
            />
            <StyledButton
              label="Edit"
            />
          </div>
        </FooterButtons>
      </Modal.Footer>
    </Modal>
  );
};

export default withVenueConfig(EventDetailModal);
