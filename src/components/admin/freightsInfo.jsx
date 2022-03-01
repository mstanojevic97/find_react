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
import {getCompany, getData,getCompanyData} from '../../requests/admin'

function CompanyData(){
    const [company, setCompany] = useState([]);
      useEffect(() =>{
        getCompanyData().then((res) =>{
          setCompany(res.producer);
        })
    },[]);
    return(
      <div>
        <h3>About Company</h3>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='center'>VAT</TableCell>
                  <TableCell align='center'>Email</TableCell>
                  <TableCell align='center'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{company.companyName}</TableCell>
                  <TableCell align='center'>{company.VAT}</TableCell>
                  <TableCell align='center'>{company.email}</TableCell>
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
    const [freightFree, setFreightFree] = useState([]);
      useEffect(() =>{
        getCompanyData().then((res) =>{
            debugger
            setFreightFree(res.freightFree);
        })
    },[]);
    return (
      <React.Fragment>
        <div>
            <h3>Free Freights</h3>
          <div>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">IdFreight</TableCell>
                    <TableCell align="center">Warehouse</TableCell>
                    <TableCell align="center">Destination</TableCell>
                    <TableCell align='center'>Weight</TableCell>
                    <TableCell align='center'>Length</TableCell>
                    <TableCell align='center'>Note</TableCell>
                    <TableCell align='center'>Price</TableCell>
                    <TableCell align='center'>Action</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                    {freightFree.map((freightFreee)=>(
                    <TableRow>
                        <TableCell key={freightFreee.idFreight} align='left'>{freightFreee.idFreight}</TableCell>
                        <TableCell key={freightFreee.warehouse} align='center'>{freightFreee.warehouse}</TableCell>
                        <TableCell key={freightFreee.destination} align='center'>{freightFreee.destination}</TableCell>
                        <TableCell key={freightFreee.weight} align='center'>{freightFreee.weight}</TableCell>
                        <TableCell key={freightFreee.length} align='center'>{freightFreee.length}</TableCell>
                        <TableCell key={freightFreee.note} align='center'>{freightFreee.note}</TableCell>
                        <TableCell key={freightFreee.price} align='center'>{freightFreee.price}</TableCell>
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


function Row2() {
    const [open, setOpen] = React.useState(false);
    const [freightTaken, setFreightTaken] = useState([]);
      useEffect(() =>{
        getCompanyData().then((res) =>{
            setFreightTaken(res.freightTaken);
        })
    },[]);
    return (
      <React.Fragment>
        <div>
            <h3>Taken Freights</h3>
          <div>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                  <TableCell align="left">IdFreight</TableCell>
                    <TableCell align="center">Warehouse</TableCell>
                    <TableCell align="center">Destination</TableCell>
                    <TableCell align='center'>Weight</TableCell>
                    <TableCell align='center'>Length</TableCell>
                    <TableCell align='center'>Note</TableCell>
                    <TableCell align='center'>Price</TableCell>
                    <TableCell align='center'>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {freightTaken.map((freightTakenn)=>(
                    <TableRow>
                        <TableCell key={freightTakenn.idFreight} align='left'>{freightTakenn.idFreight}</TableCell>
                        <TableCell key={freightTakenn.warehouse} align='center'>{freightTakenn.warehouse}</TableCell>
                        <TableCell key={freightTakenn.destination} align='center'>{freightTakenn.destination}</TableCell>
                        <TableCell key={freightTakenn.weight} align='center'>{freightTakenn.weight}</TableCell>
                        <TableCell key={freightTakenn.length} align='center'>{freightTakenn.length}</TableCell>
                        <TableCell key={freightTakenn.note} align='center'>{freightTakenn.note}</TableCell>
                        <TableCell key={freightTakenn.price} align='center'>{freightTakenn.price}</TableCell>
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
  
  export function CollapsibleTableFreight() {
    return (
      <div>
        <div>
          <CompanyData/>
        </div>
        <div style={{paddingTop: 10}}>
          <Row/>
        </div>
        <div  style={{paddingTop: 10}}>
        <Row2/>
        </div>
      </div>
    );
  }
  export default CompanyData;