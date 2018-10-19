import React, { PureComponent } from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect } from 'react-redux-firebase';
import AddEmployeeModal from 'components/staff/AddEmployeeModal';
import styled from 'styled-components';
import SidebarLayout from 'components/Sidebar.js';
import Checkbox from 'components/Checkbox.js';
import AddButton from 'components/AddButton.js';
import Table from 'components/Table/';
import ConsultantLabel from 'components/Consultant';
import Icons from 'assets/icons';

const Panel = styled.div`
  border: solid 1px #ededed;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  svg {
    margin: 0px 5px;
  }
`;

const Header = styled.div`
  background-color: #fcfbfc;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
`;

const StyledTableRow = styled(Table.Row)`

  .actions {
    display: none;

    svg {
      margin: 0px 3px;
    }
  }

  &:hover {
    .actions {
      display: block;
    }
  }
`;

class ManageStaff extends PureComponent {

  state = {
    isAddingEmployee: false,
  };

  handleStartAddingEmployee = () => {
    this.setState({
      isAddingEmployee: true,
    });
  }

  handleCancelAddingEmployee = () => {
    this.setState({
      isAddingEmployee: false,
    });
  }

  handleAllEmployeesChecked = () => {
    const updates = {};
    this.props.employees.forEach(employee => {
      updates[employee.id] = true;
    });
    this.setState(updates);
  };

  handleAllEmployeesUnchecked = () => {
    const updates = {};
    this.props.employees.forEach(employee => {
      updates[employee.id] = false;
    });
    this.setState(updates);
  };

  render() {
    const { employees } = this.props;

    let allEmployeesChecked = true;
    employees.forEach(({ id }) => {
      if (!this.state[id]) {
        allEmployeesChecked = false;
      }
    });
    return (
      <SidebarLayout>
        <div style={{ flex: 1, padding: 20 }}>
          <AddEmployeeModal
            isOpen={this.state.isAddingEmployee}
            onRequestClose={this.handleCancelAddingEmployee}
          />
          <Panel>
            <Header>
              <div />
              <div>
                <AddButton onClick={this.handleStartAddingEmployee} />
              </div>
            </Header>
            <Table>
              <Table.Row>
                <Table.Cell width="5%">
                  <Table.HeaderCell
                    title={
                      <Checkbox
                        onCheck={this.handleAllEmployeesChecked}
                        onUncheck={this.handleAllEmployeesUnchecked}
                        checked={allEmployeesChecked}
                      />
                    }
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    title="Name"
                    color="#c0b59d"
                  />
                </Table.Cell>

                <Table.Cell width="20%">
                  <Table.HeaderCell
                    title="Email"
                    color="#c0b59d"
                  />
                </Table.Cell>

                <Table.Cell width="20%">
                  <Table.HeaderCell
                    title="Permission"
                  />
                </Table.Cell>

                <Table.Cell width="20%">
                  <Table.HeaderCell
                    title="Date Added"
                  />
                </Table.Cell>
              </Table.Row>

              <Table.Body>
                {employees.map(employee => (
                  <StyledTableRow>
                    <Table.Cell width="5%">
                      <Checkbox
                        onCheck={() => this.setState({ [employee.id]: true })}
                        onUnCheck={() => this.setState({ [employee.id]: false })}
                        checked={this.state[employee.id]}
                      />
                    </Table.Cell>
                    <Table.Cell width="20%">
                      <ConsultantLabel
                        name={employee.fullName}
                        picture={employee.picture}
                      />
                    </Table.Cell>

                    <Table.Cell width="20%">
                      {employee.email}
                    </Table.Cell>

                    <Table.Cell width="20%">
                      <IconsContainer>
                        <Icons.CalendarEdit size={24} />
                        <Icons.CalendarDelete size={24} />
                        <Icons.Billing size={24} />
                        <Icons.ManageStaff size={24} />
                      </IconsContainer>
                    </Table.Cell>

                    <Table.Cell width="20%">
                      {moment(employee.createdAt).format('YYYY-MM-DD')}
                    </Table.Cell>

                    <Table.Cell width="15%">
                      <div className="actions">
                        <Icons.Delete size={24} color="#7d7d7d" />
                        <Icons.Delete size={24} color="#7d7d7d" />
                      </div>
                    </Table.Cell>
                  </StyledTableRow>
                ))}
              </Table.Body>
            </Table>
          </Panel>
        </div>
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
)(ManageStaff);
