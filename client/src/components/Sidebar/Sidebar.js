import React, {useState, useEffect} from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter,CDBSidebarHeader, CDBSidebarMenu,CDBSidebarMenuItem} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Styles= styled.div`
.groupPlans {
  max-height: 600px;
  overflow-y: scroll;
  overflow-style: move;
}
.groupPlans::-webkit-scrollbar{
  display: none;
}
`

const Sidebar = (props) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    findGroups().then(groups => setGroups(groups));
  }, []);

  const findGroups = () => {
    return axios
      .get('/findGroups', {params: {uid: props.currentUser.uid}})
      .then(response => {
        return response.data
      })
      .catch(err => { console.log(err) })
  }
console.log('GROUPS', groups)
  return (
    <Styles>
    <div
      style={{ display: 'flex', height: '900px'}}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#99B898">
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

            <NavLink exact to="/messages" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-comments">
               Chat Room
              </CDBSidebarMenuItem>
              </NavLink>
              <CDBSidebarMenuItem icon="user" style={{padding: '5px', textDecoration: 'underline' }}>
                Groups
                </CDBSidebarMenuItem>
                <div className="groupPlans">
              {groups.map((group, idx) => (
              <NavLink exact to={`/plans?uid=${props.currentUser.uid}&groupName=${group.name}`} activeClassName="activeClicked"  key={idx}>
                <CDBSidebarMenuItem icon='ellipsis-h' style={{fontSize: '15px', padding: '5px' }}> {group.name}
              </CDBSidebarMenuItem>
            </NavLink>
              ))}
              </div>
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
    </Styles>
  );
};

export default Sidebar;