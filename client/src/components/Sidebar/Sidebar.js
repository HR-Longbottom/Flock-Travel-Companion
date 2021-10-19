import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter,CDBSidebarHeader, CDBSidebarMenu,CDBSidebarMenuItem} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#0097A7">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          {/* Links to home */}
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
          Flock.io
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns"> Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/plans" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{ padding: '5px' }}> Groups
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/messages" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-comments">
               Chat Room
              </CDBSidebarMenuItem>
            </NavLink>


          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Travel As One
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;