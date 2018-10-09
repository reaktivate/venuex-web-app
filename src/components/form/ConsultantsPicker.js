import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import dropdownCaretDown from 'assets/caret-down-custom.svg';
import dropdownCaretUp from 'assets/caret-up-custom.svg';
import btnOwnerImage from 'assets/btn-owner.svg';
import ownerImage from 'assets/owner.svg';
import Checkbox from 'components/Checkbox';

const Container = styled.div`
  border-bottom: solid 1px #d8d8d8;
  position: relative;
`;

const PickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
`;

const Placeholder = styled.div`
  color: #7d7d7d;
  font-size: 15px;
`;

const ArrowIcon = styled.img`
  width: 13px;
  height: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: calc(100% + 5px);
  background-color: #FFF;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;

const Consultant = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0px;

  &:hover {
    background-color: #fafafa;

    .assign-badge {
      display: inline-block;
    }
  }

  ${props => props.picked && css`
    background-color: ${props.theme.colors.primary}33;

    &:hover {
      background-color: ${props.theme.colors.primary}33;
    }
  `}

  .assign-badge {
    height: 20px;
    cursor: pointer;
    object-fit: contain;
    display: none;
  }

  ${props => props.isOwner && css`
    .assign-badge {
      display: inline-block;
    }
  `}
`;

const Name = styled.div`
  font-size: 15px;
  color: #222222;
  font-weight: 500;
`;

const Picture = styled.img`
  width: 50px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

const employees = [
  {
    id: 'luisid',
    name: 'Luis del Giudice',
  },
  {
    id: 'denisseid',
    name: 'Denisse Garcia',
  }
];

export default class ConsultantsPicker extends PureComponent {

  state = {
    isOpen: false,
  };

  getEmployeeById = (id) => employees.filter(emp => emp.id === id)[0];

  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  handleEmployeeChecked = (employeeId, owner = false) => {
    const value = this.props.input.value || {
      picked: [],
      owner: null,
    };

    this.props.input.onChange({
      ...value,
      picked: [
        ...value.picked.filter(id => id !== employeeId),
        employeeId,
      ],
      owner: owner ? employeeId : value.owner,
    });
  };

  handleEmployeeUnchecked = employeeId => {
    const { value } = this.props.input;

    this.props.input.onChange({
      picked: value.picked.filter(id => id !== employeeId),
      owner: value.owner === employeeId ? null : value.owner,
    });
  };

  handleAssignClicked = employeeId => {
    const value = this.props.input.value || {
      picked: [],
      owner: null,
    };
    const isOwner = employeeId === value.owner;
    if (isOwner) {
      // Remove from owner
      this.props.input.onChange({
        picked: [...value.picked],
        owner: null,
      });
    } else {
      // Make owner
      this.handleEmployeeChecked(employeeId, true);
    }
  };

  render() {
    const value = this.props.input.value || {
      picked: [],
      owner: null,
    };
    return (
      <Container>
        <PickContainer onClick={this.handleToggle}>
          <Placeholder>
            {value.picked.length === 0 ? 'Pick a staff' : value.picked.map(id => (
              <Group key={id}>
                <Picture src="https://placehold.it/100x100" />
                <Name>{this.getEmployeeById(id).name}</Name>
              </Group>
            ))}
          </Placeholder>
          <ArrowIcon
            src={this.state.isOpen ?
              dropdownCaretUp : dropdownCaretDown}
          />
        </PickContainer>
        {this.state.isOpen &&
          <Dropdown>
            {employees.map(employee => {
              const { value } = this.props.input;
              const isPicked = value && value.picked.indexOf(employee.id) !== -1;
              const isOwner = value.owner === employee.id;
              return (
                <Consultant picked={isPicked} isOwner={isOwner} key={employee.id}>
                  <Group>
                    <Checkbox
                      checked={isPicked}
                      onUncheck={() =>
                        this.handleEmployeeUnchecked(employee.id)}
                      onCheck={() =>
                        this.handleEmployeeChecked(employee.id)}
                    />
                    <Picture src="https://placehold.it/100x100" />
                    <Name>{employee.name}</Name>
                  </Group>
                  <Group>
                    <Img
                      alt=""
                      className="assign-badge"
                      src={isOwner ? ownerImage : btnOwnerImage}
                      onClick={() => this.handleAssignClicked(employee.id)}
                    />
                  </Group>
                </Consultant>
              );
            })}
          </Dropdown>}
      </Container>
    );
  }
}
