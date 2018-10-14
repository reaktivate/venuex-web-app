import React, { PureComponent } from 'react';
import SidebarLayout from 'components/Sidebar.js';
import Table from 'components/Table/';
import Icons from 'assets/icons';

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
          <Table.Row>
            <Table.Cell width="20%">Icons.Bell</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Bell size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Billing</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Billing size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.CalendarDelete</Table.Cell>
            <Table.Cell width="20%">
              <Icons.CalendarDelete size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.CalendarEdit</Table.Cell>
            <Table.Cell width="20%">
              <Icons.CalendarEdit size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.CalendarEdit</Table.Cell>
            <Table.Cell width="20%">
              <Icons.CalendarEdit size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Delete</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Delete size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.ManageStaff</Table.Cell>
            <Table.Cell width="20%">
              <Icons.ManageStaff size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Rings</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Rings size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Plus</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Plus size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Crown</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Crown size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Celebration</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Celebration size="40" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width="20%">Icons.Glasses</Table.Cell>
            <Table.Cell width="20%">
              <Icons.Glasses size="40" />
            </Table.Cell>
          </Table.Row>
        </Table>
      </SidebarLayout>
    );
  }
}

export default ManageStaff;
