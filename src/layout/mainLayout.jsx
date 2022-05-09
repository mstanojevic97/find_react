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

function Menu() {
  const jwt = localStorage.getItem('jwtToken');
  const rola = localStorage.getItem('Role');
  if(!rola | rola==''){
    return (
      <div>
        <CNavLink href="/login">LogIn</CNavLink>
        <CNavLink href="/register">Register</CNavLink>
      </div>
    )
  }else {
    if(rola==2){
    return(
      <div>
      <CNavLink href="/producer">My Page</CNavLink>
      <CNavLink href="/">LogOut</CNavLink>
      </div>
    )
  }else if(rola==3){
    return (
      <div>
        <CNavLink href="/supplier">My Page</CNavLink>
        <CNavLink href="/logout">LogOut</CNavLink>
      </div>
    )
  }else{
    return (
      <div>
        <CNavLink href="/admin">My Page</CNavLink>
        <CNavLink href="/">LogOut</CNavLink>
      </div>
    )
  }
}
}

function MainLayout() {
  const [visible, setVisible] = useState(false);

return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="bg-light" id="top">
      <CContainer fluid flex-start style={{marginTop:10, marginRight:10,marginLeft:10}}>
        <CNavbarBrand href="/"><img alt="lala" src={logo} style={{width:50,height:50, marginTop: -6}}/></CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible} >
          <CNavbarNav className="justify-content-end" style={{ width: "100%" ,marginTop:"-14px"}} >
            <CNavItem>
              <CNavLink href="/" active>Home</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#card">Freight</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#offer">Offer</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#about">About</CNavLink>
            </CNavItem>
            
            <CNavbarNav className="justify-content-end" style={{ width: "100%" }}>
              <Menu/>
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
