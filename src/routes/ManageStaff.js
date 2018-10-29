import React, { PureComponent } from 'react';
import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { isLoaded, firebaseConnect } from 'react-redux-firebase';
import PersonalMenu from 'components/PersonalMenu';
import Button from 'components/Button';
import AddEmployeeModal from 'components/staff/AddEmployeeModal';
import EditStaffPermissionsDropdown from 'components/staff/EditStaffPermissionsDropdown';
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
    isAddingEmployee: false
  };

  getInitials = string => {
    const names = string.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  getSelectedEmployees = () => {
    const { isAddingEmployee, ...selectedEmployees } = this.state; // eslint-disable-line
    return Object.keys(selectedEmployees).filter(key => selectedEmployees[key]);
  };

  handleStartAddingEmployee = () => {
    this.setState({
      isAddingEmployee: true
    });
  };

  handleCancelAddingEmployee = () => {
    this.setState({
      isAddingEmployee: false
    });
  };

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
              <div style={{ display: 'flex' }}>
                <PersonalMenu />
                <AddButton onClick={this.handleStartAddingEmployee} />
              </div>
            </Header>
            <Table>
              <Table.Row style={{ fontWeight: '600', letterSpacing: '0.3px' }}>
                <Table.Cell width="5.7%">
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
                {this.getSelectedEmployees().length === 0 ? (
                  <React.Fragment>
                    <Table.Cell width="22.3%">
                      <Table.HeaderCell
                        title="Name"
                        color="#c0b59d"
                        style={{ marginLeft: '50px' }}
                      />
                    </Table.Cell>

                    <Table.Cell width="23.7%" center>
                      <Table.HeaderCell title="Email" color="#c0b59d" />
                    </Table.Cell>

                    <Table.Cell width="17.6%" center>
                      <Table.HeaderCell title="Permission" />
                    </Table.Cell>

                    <Table.Cell width="12.5%" center>
                      <Table.HeaderCell title="Date Added" />
                    </Table.Cell>
                    <Table.Cell width="18.2%" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Table.Cell width="80%">
                      <EditStaffPermissionsDropdown
                        selectedEmployees={this.getSelectedEmployees()}
                      />
                      &nbsp;
                      <Button label="Delete 2 staff members" kind="danger" />
                    </Table.Cell>
                  </React.Fragment>
                )}
              </Table.Row>

              <Table.Body>
                {employees.map(employee => (
                  <StyledTableRow>
                    <Table.Cell width="5.7%">
                      <Checkbox
                        onCheck={() => this.setState({ [employee.id]: true })}
                        onUncheck={() =>
                          this.setState({ [employee.id]: false })
                        }
                        checked={this.state[employee.id]}
                      />
                    </Table.Cell>
                    <Table.Cell width="22.3%">
                      <ConsultantLabel
                        name={employee.fullName}
                        initials={this.getInitials(employee.fullName)}
                        //      picture={employee.picture}
                      />
                    </Table.Cell>

                    <Table.Cell width="23.7%" fontWeight="500" fontSize="15px">
                      {employee.email}
                    </Table.Cell>

                    <Table.Cell width="17.6%" center>
                      <IconsContainer>
                        <Icons.CalendarEdit
                          size={24}
                          color={
                            !employee.permissions.createAndEditEvents
                              ? '#d8d8d8'
                              : undefined
                          }
                        />
                        <Icons.CalendarDelete
                          size={24}
                          color={
                            !employee.permissions.deleteEvents
                              ? '#d8d8d8'
                              : undefined
                          }
                        />
                        <Icons.Billing
                          size={24}
                          color={
                            !employee.permissions.viewBilling
                              ? '#d8d8d8'
                              : undefined
                          }
                        />
                        <Icons.ManageStaff
                          size={24}
                          color={
                            !employee.permissions.manageStaffPermissions
                              ? '#d8d8d8'
                              : undefined
                          }
                        />
                      </IconsContainer>
                    </Table.Cell>

                    <Table.Cell
                      width="12.5%"
                      color="#7d7d7d"
                      fontWeight="500"
                      fontSize="15px"
                      center
                    >
                      {moment(employee.createdAt).format('MM/DD/YYYY')}
                    </Table.Cell>

                    <Table.Cell width="18.2%">
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
  firebaseConnect(() => [
    {
      path: 'employees',
      queryParams: ['orderByChild=venueId', 'equalTo=test_venue']
    }
  ]),
  connect(state => {
    if (!isLoaded(state.firebase.data.employees)) {
      return {
        employees: []
      };
    }

    return {
      employees: Object.keys(state.firebase.data.employees).map(key => ({
        ...state.firebase.data.employees[key],
        id: key
      }))
    };
  })
)(ManageStaff);
