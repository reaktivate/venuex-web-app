import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/';
import Icons from 'assets/icons';

const iconColor = '';
const size = 48;
const iconRows = Object.keys(Icons).map(icon => (
  <Table.Row>
    <Table.Cell width="20%">
      Icons.
      {icon}
    </Table.Cell>
    <Table.Cell width="20%">
      {React.createElement(Icons[icon], {
        color: iconColor,
        size
      })}
    </Table.Cell>
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

          <Table.Body>
            <Table.Row>
              <Table.Cell width="20%">Icons.Bell (alert = true)</Table.Cell>
              <Table.Cell width="20%">
                <Icons.Bell alert size={size} color={iconColor} />
              </Table.Cell>
            </Table.Row>
            {iconRows}
          </Table.Body>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
