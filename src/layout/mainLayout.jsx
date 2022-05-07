import { Outlet} from "react-router-dom";
import * as React from 'react';
import { useState } from 'react';
import logo from '../logo.png';
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";



function MainLayout() {
  const [visible, setVisible] = useState(false)
  

return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light" >
      <CContainer fluid flex-start>
        <CNavbarBrand href="/"><img alt="lala" src={logo} style={{width:50,height:50, marginTop: -6}}/></CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible} >
          <CNavbarNav className="justify-content-end" style={{ width: "100%" ,marginTop:"-14px"}} >
            <CNavItem>
              <CNavLink href="/" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Freight</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Offer</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">About</CNavLink>
            </CNavItem>
            
            <CNavbarNav className="justify-content-end" style={{ width: "100%" }}>  
              <CNavLink href="/login">LogIn</CNavLink>
              <CNavLink href="/producer">My Page</CNavLink>
              <CNavLink href="/register">Register</CNavLink>
            </CNavbarNav>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    <Outlet />
 
  </>
)

}
export default MainLayout;
