import styled from "@emotion/styled";
import items from "../../data/data.json"
import { Box, useTheme } from '@mui/material'
import SearchSignIn from "../header_search_log/HeaderSearch";
import { NavLink } from "react-router-dom";
import SideBarItems from "./SideBarItems";

 const SidebarStyle = styled(Box)({
   
  minHeight:"100vh", 
  border:"0.0001rem solid #cfd3d9"
 }) 

function Sidebar({children}) {
  const {palette} = useTheme();
  return (
    <div className="sidebar_wrapper">
        <div className="sidebar">
          <SidebarStyle bgcolor={palette.grey[100]} >
            <div className='sideBar_main_container'>
              <NavLink to="/" className="titleNav">
              <span className='sideTitle'>
                Home
              </span>
            </NavLink>
              { 
                items.map((item, index) => <SideBarItems key={index} item={item} />)
              }  
          </div>
          </SidebarStyle>
        </div>

        <div className="main_container">
          <SearchSignIn />
          <main>{children}</main>
        </div>
    </div>
    
  )
}

export default Sidebar