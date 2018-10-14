import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/';
import Icons from 'assets/icons';

console.log(Icons);

const iconRows = Object.keys(Icons).map(icon => (
  <Table.Row>
    <Table.Cell width="20%">
      Icons.
      {icon}
    </Table.Cell>
    <Table.Cell width="20%">{React.createElement(Icons[icon])}</Table.Cell>
  </Table.Row>
));
class ManageStaff extends PureComponent {
  state = {};

  render() {
    return (
      <SidebarLayout>
        <Table>
          <Table.Row>
            <Table.Cell width="20%">
              <Table.HeaderCell
                title="Icon Name"
                selected
                sortable
                color="#c0b59d"
              />
            </Table.Cell>

            <Table.Cell width="20%">
              <Table.HeaderCell
                title="Icon Preview"
                selected
                sortable
                color="#c0b59d"
              />
            </Table.Cell>
          </Table.Row>
          <Table.Body>{iconRows}</Table.Body>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
