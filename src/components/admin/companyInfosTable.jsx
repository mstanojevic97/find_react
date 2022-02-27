import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useEffect, useState} from 'react'
import {getData} from '../../requests/admin'

function AdminData(){
  const [admin, setAdmin] = useState([]);
    useEffect(() =>{
      getData().then((res) =>{
        setAdmin(res.admin);
      })
  },[]);
  return(
    <div>
      <h3>About Admin</h3>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='center'>Surname</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{admin.name}</TableCell>
                <TableCell align='center'>{admin.surname}</TableCell>
                <TableCell align='center'>{admin.email}</TableCell>
                <TableCell align='center'><a href='#'>Edit</a></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    
  );
}



function Row() {
  const [open, setOpen] = React.useState(false);
  const [companies, setCompanies] = useState([]);
    useEffect(() =>{
      getData().then((res) =>{
        setCompanies(res.companies);
      })
  },[]);
  return (
    <React.Fragment>
      <div>
          <h3>Companies</h3>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">IdCompany</TableCell>
                  <TableCell align="center">CompanyName</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align='center'>VAT</TableCell>
                  <TableCell align='center'>Type</TableCell>
                  <TableCell align='center'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {companies.map((companie)=>(
                  <TableRow>
                      <TableCell key={companie.idCompany} align='left'>{companie.idCompany}</TableCell>
                      <TableCell key={companie.idCompany} align='center'>{companie.companyName}</TableCell>
                      <TableCell key={companie.idCompany} align='center'>{companie.email}</TableCell>
                      <TableCell key={companie.idCompany} align='center'>{companie.VAT}</TableCell>
                      <TableCell key={companie.idCompany} align='center'>{companie.roleName}</TableCell>
                      <TableCell align='center'><a href='/freight'>pogledaj</a>/<a href='#'>Izmeni</a></TableCell>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
    </React.Fragment>
  );
}

export function CollapsibleTable() {
  return (
    <div>
      <div>
        <AdminData/>
      </div>
      <div style={{paddingTop: 10}}>
        <Row/>
      </div>
    </div>
  );
}