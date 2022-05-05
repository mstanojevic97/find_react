import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react'
import AddFreightModal from "./AddFreightModal"
import SuccessInfoModal from "../modals/SuccessInfoModal"
import EditFreightModal from './EditFreightModal'

export function ProducerData({companyData}) {
  const [addFreightModalOpen, setAddFreightModalOpen] = useState(false);
  const [successInfoModalOpen, setSuccessInfoModalOpen] = useState(false);
  const [editFreightModalOpen, setEditFreightModalOpen] = useState(false);

  const [company] = useState(companyData);

  const addFreightModalHandleClose = () => {
    setAddFreightModalOpen(false);
  }
  const editFreightModalHandleClose = () => {
    setEditFreightModalOpen(false);
  }


  return (
    <>
      {
        addFreightModalOpen ?
          <AddFreightModal
            isOpen={addFreightModalOpen}
            handleClose={addFreightModalHandleClose}
            onSuccess={() => setSuccessInfoModalOpen(true)} />
          : ''
      }
      {
        editFreightModalOpen ?
          <EditFreightModal
            isOpen={editFreightModalOpen}
            handleClose={editFreightModalHandleClose}
            onSuccess={() => setEditFreightModalOpen(true)} />
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
            message="Freight has been added." />
          : ''
      }

      <div>
        <h3>About Company</h3>
        <Button
          variant="contained"
          size="lg"
          className="justify-content-end"
          style={{ float: "right", marginBottom: "10px", marginRight: "10px" }}
          onClick={() => setAddFreightModalOpen(true)}>
          Add new freight
        </Button>
        <div>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">VAT</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{company.companyName}</TableCell>
                  <TableCell align="center">{company.VAT}</TableCell>
                  <TableCell align="center">{company.email}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="lg"
                      className="justify-content-center"
                      style={{
                        float: "right",
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                      onClick={() => setEditFreightModalOpen(true)}
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


export function ProducerRow({freightFreeParam}) {

  const [freightFree] = useState(freightFreeParam);

  const [editFreightModalOpen, setEditFreightModalOpen] = useState(false);
  const [editFreightModalData, setEditFreightModalData] = useState();
  const [successInfoModalOpen, setSuccessInfoModalOpen] = useState(false);

  const editFreightModalHandleClose = () => {
    setEditFreightModalOpen(false);
    setEditFreightModalData();
  }

  const handleEditClick = (data) => {
    setEditFreightModalData(data)
    setEditFreightModalOpen(true);
  }


  return (
    <>
      {
        editFreightModalOpen ?
          <EditFreightModal
            isOpen={editFreightModalOpen}
            handleClose={editFreightModalHandleClose}
            onSuccess={() => setSuccessInfoModalOpen(true)} 
            data = {editFreightModalData}
          />
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
            message="Freight has been successfully editted." />
          : ''
      }
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
                    <TableCell align="center">Weight</TableCell>
                    <TableCell align="center">Length</TableCell>
                    <TableCell align="center">Note</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Load</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {freightFree ? freightFree.map((freightFreee, i) => (
                    <TableRow key={i}>
                      <TableCell key={freightFreee.idFreight} align="left">
                        {freightFreee.idFreight}
                      </TableCell>
                      <TableCell key={freightFreee.warehouse} align="center">
                        {freightFreee.warehouse}
                      </TableCell>
                      <TableCell key={freightFreee.destination} align="center">
                        {freightFreee.destination}
                      </TableCell>
                      <TableCell key={freightFreee.weight} align="center">
                        {freightFreee.weight}
                      </TableCell>
                      <TableCell key={freightFreee.length} align="center">
                        {freightFreee.length}
                      </TableCell>
                      <TableCell key={freightFreee.note} align="center">
                        {freightFreee.note}
                      </TableCell>
                      <TableCell key={freightFreee.price} align="center">
                        {freightFreee.price}
                      </TableCell>
                      <TableCell key={freightFreee.loadType} align="center">
                        {freightFreee.loadType}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          size="error"
                          className="justify-content-end"
                          style={{
                            float: "right",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                          onClick={() => (true)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          size="lg"
                          className="justify-content-center"
                          style={{
                            float: "right",
                            marginBottom: "10px",
                            marginRight: "10px",
                          }}
                          onClick={() => handleEditClick(freightFreee)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  )) : ''}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}


export function ProducerRow2({freightTakenParam}) {
  const [freightTaken] = useState(freightTakenParam);

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
                {freightTaken ? freightTaken.map((freightTakenn) => (
                  <TableRow>
                    <TableCell key={freightTakenn.idFreight} align='left'>{freightTakenn.idFreight}</TableCell>
                    <TableCell key={freightTakenn.warehouse} align='center'>{freightTakenn.warehouse}</TableCell>
                    <TableCell key={freightTakenn.destination} align='center'>{freightTakenn.destination}</TableCell>
                    <TableCell key={freightTakenn.weight} align='center'>{freightTakenn.weight}</TableCell>
                    <TableCell key={freightTakenn.length} align='center'>{freightTakenn.length}</TableCell>
                    <TableCell key={freightTakenn.note} align='center'>{freightTakenn.note}</TableCell>
                    <TableCell key={freightTakenn.price} align='center'>{freightTakenn.price}</TableCell>
                    <TableCell align='center'><a href='/freight'>Edit</a>/<a href='/#'>Delete</a></TableCell>
                  </TableRow>
                )) : ''}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </React.Fragment>
  );
}
