import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AddButton from 'components/AddButton';
import Button from 'components/Button';
import PersonalMenu from 'components/PersonalMenu';
import leftArrowIcon from 'assets/caret-left-custom.svg';
import rightArrowIcon from 'assets/caret-right-custom.svg';

const Container = styled.div`
  border: solid 1px #ededed;
  padding: 15px;
  padding-bottom: 0px;
`;

const Header = styled.div`
  background-color: #fafafa;
  margin: -15px -15px 0px -15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
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

const CalTitle = styled.div`
  font-family: Lora;
  font-size: 20px;
`;

export default class EventsHeader extends PureComponent {
  render() {
    const {
      date,
      onNextMonth,
      onPreviousMonth,
      onAdd,
      onToday,
    } = this.props;

    return (
      <Container>
        <Header>
          <div>
            <Button
              label="Today"
              onClick={onToday}
            />
          </div>
          <MonthPicker>
            <ArrowIcon src={leftArrowIcon} onClick={onPreviousMonth} />
            <CalTitle>{date.format('MMMM YYYY')}</CalTitle>
            <ArrowIcon src={rightArrowIcon} onClick={onNextMonth} />
          </MonthPicker>
          <div style={{ display: 'flex' }}>
            <PersonalMenu />
            <AddButton onClick={onAdd} />
          </div>
        </Header>
      </Container>
    );
  }
}
