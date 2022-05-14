import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useEffect, useState} from 'react'
import EditAdminModal from './EditAdminModal'
import DeleteFreightModal from '../producer/DeleteFreightModal'
import SuccessInfoModal from '../modals/SuccessInfoModal';
import DeleteCompanyModal from './DeleteCompanyModal'

export function AdminData({adminData}){
  const [admin] = useState(adminData);
  const [successInfoModalOpen, setSuccessInfoModalOpen] = useState(false);
  const [editAdminModalOpen, setEditAdminModalOpen] = useState(false);
  const [editAdminModalData, setEditAdminModalData] = useState();

  const editAdminModalHandleClose = () =>{
    setEditAdminModalOpen(false);
  }
  const editAdminModalHandleClick = (data) =>{
    setEditAdminModalOpen(true);
    setEditAdminModalData(data);
  }
  return(
    <>
    {
      editAdminModalOpen?
      <EditAdminModal
        isOpen={editAdminModalOpen}
        handleClose={editAdminModalHandleClose}
        onSuccess={()=>setSuccessInfoModalOpen(true)}
        data={editAdminModalData}
      />
      : ''
    }
    {
      successInfoModalOpen?
      <successInfoModalOpen
      isOpen = {successInfoModalOpen}
      handleClose = {() => {
        setSuccessInfoModalOpen(false);
        window.location.reload(false);
      }}
      message="Admin data has been changed." /> 
      : ''
    }
    <div style={{marginLeft:10, marginRight:10}}>
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
                <TableCell align='center'>
                <Button
                      variant="contained"
                      size="lg"
                      className="justify-content-center"
                      style={{
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                      onClick={() => editAdminModalHandleClick(admin)}
                    >
                      Edit
                    </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    </>
  );
}
 


export function CompanyData({companyData}) {
  const [companies] = useState(companyData);
  const [deleteCompanyModalOpen, setDeleteCompanyModalOpen] = useState(false);
  const [deleteCompanyModalData, setDeleteCompanyModalData] = useState();
  const [successInfoModalOpen, setSuccessInfoModalOpen] = useState(false);
 
  const deleteModalHandleClose = () =>{
    setDeleteCompanyModalOpen(false);
    setDeleteCompanyModalData();
  }
  const deleteModalHancleClick = (data)=>{
    setDeleteCompanyModalOpen(true);
    setDeleteCompanyModalData(data);
  }
  return (
    <>
    {
      deleteCompanyModalOpen?
      <DeleteCompanyModal
        isOpen={deleteCompanyModalData}
        handleClose={deleteModalHandleClose}
        onSuccess={()=>setSuccessInfoModalOpen(true)}
        data={deleteCompanyModalData}/>
        : ''
    }
    {
        successInfoModalOpen ?
          <SuccessInfoModal
            isOpen={successInfoModalOpen}
            handleClose={() => {
              setSuccessInfoModalOpen(false);
              window.location.reload(false);
            }}
            message="Company has been deleted successfully!" />
          : ''
      }
    <React.Fragment>
      <div style={{marginLeft:10, marginRight:10}}>
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
                      <TableCell align='center'>
                        <Button
                          variant="contained"
                          color = "warning"
                          size="lg"
                          className="justify-content-end"
                          style={{
                            float: "center",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                          onClick={()=>deleteModalHancleClick(companie)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
    </React.Fragment>
  </>
  );
};
export function FreightData({freightData}){
  const[freights] = useState(freightData);

  const[deleteFreightModalOpen, setDeleteFreightModalOpen] = useState(false);
  const[deleteFreightModalData, setDeleteFreightModalData] = useState();
  const[successInfoModalOpen, setSuccessInfoModalOpen] = useState(false);

  const deleteFreightModalHandleClose = () => {
    setDeleteFreightModalOpen(false);
    setDeleteFreightModalData();
  }
  const deleteFreightModalHandleClick = (data) => {
    setDeleteFreightModalOpen(true);
    setDeleteFreightModalData(data);
  }
  
return(
  <>
  {
    deleteFreightModalOpen ?
    <DeleteFreightModal
      isOpen={deleteFreightModalOpen}
      handleClose={deleteFreightModalHandleClose}
      onSuccess={() => setSuccessInfoModalOpen(true)}
      data={deleteFreightModalData}
    /> : ''
  }
  {
    successInfoModalOpen ?
    <SuccessInfoModal
      isOpen={successInfoModalOpen}
      handleClose={()=>{
        setSuccessInfoModalOpen(false);
      }}
      message="Freught has been successfully deleted!"
    /> : ''
  }
  <React.Fragment>
      <div style={{marginLeft:10, marginRight:10}}>
          <h3>Completed Freights</h3>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">IdFreight</TableCell>
                  <TableCell align="center">Weight</TableCell>
                  <TableCell align="center">Length</TableCell>
                  <TableCell align='center'>Warehouse</TableCell>
                  <TableCell align='center'>Destination</TableCell>
                  <TableCell align='center'>Note</TableCell>
                  <TableCell align='center'>Price</TableCell>
                  <TableCell align='center'>Load Type</TableCell>
                  <TableCell align='center'>Supplier Name</TableCell>
                  <TableCell align='center'>VAT</TableCell>
                  <TableCell align='center'>Email</TableCell>
                  <TableCell align='center'>Status</TableCell>
                  <TableCell align='center'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {freights.map((freight)=>(
                  <TableRow>
                      <TableCell key={freight.idFreight} align='left'>{freight.idFreight}</TableCell>
                      <TableCell key={freight.weight} align='center'>{freight.weight} Tons</TableCell>
                      <TableCell key={freight.length} align='center'>{freight.length} M</TableCell>
                      <TableCell key={freight.warehouse} align='center'>{freight.warehouse}</TableCell>
                      <TableCell key={freight.destination} align='center'>{freight.destination}</TableCell>
                      <TableCell key={freight.note} align='center'>{freight.note}</TableCell>
                      <TableCell key={freight.price} align='center'>{freight.price} €</TableCell>
                      <TableCell key={freight.loadType} align='center'>{freight.loadType}</TableCell>
                      <TableCell key={freight.companyName} align='center'>{freight.companyName}</TableCell>
                      <TableCell key={freight.VAT} align='center'>{freight.VAT}</TableCell>
                      <TableCell key={freight.email} align='center'>{freight.email}</TableCell>
                      <TableCell key={freight.statusName} align='center' style={{background:"lightGreen", fontWeight:"bold"}}>{freight.statusName}</TableCell>
                      <TableCell align='center'>
                        <Button
                          variant="contained"
                          color = "warning"
                          size="lg"
                          className="justify-content-end"
                          style={{
                            float: "right",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                          onClick={() => deleteFreightModalHandleClick(freight)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
    </React.Fragment>
    </>
  );
}