import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import '../producer/EditFreightModal.css'
import {updateAdmin} from '../../requests/admin';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '35%',
      height: '70%'
    },
};
const EditAdminModal = ({isOpen, handleClose, onSuccess, data}) =>{
  const[idAdmin] = useState(data.idAdmin);
  const[name, setName] = useState(data.name);
  const[surname , setSurname] = useState(data.surname);
  const[email, setEmail] = useState(data.email);

  const[nameValidator, setNameValidator] = useState('');
  const[surnameValidator, setSurnameValidator] = useState('');
  const[emailValidator, setEmailValidator] = useState('');

  const handleSave = () =>{
    let valid = true;

    if(!name) {
      valid = false;
      setNameValidator('Required field!')
    }
    if(!surname) {
      valid = false;
      setSurnameValidator('Required field!');
    }
    if(!email) {
      valid = false;
      setEmailValidator('Required field!');
    }
    if(valid) {
      const data = {
        idAdmin:idAdmin,
        name:name,
        surname:surname,
        email:email
      }
      updateAdmin(data)
      .then(() => {
        onSuccess();
        handleClose();
      })
      .catch((err) =>{
        alert(err);
        console.log(err);
      })
    }
  }
  return(
    <div>
      <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Example Modal"
      >
        <h2 style={{textAlign:"center"}}> Edit Admin Data</h2>
        <div style={{
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center",
                      width: "60%",
                      margin: "auto"
        }}>
          <label>Admin Name</label>
          <input
          placeholder='Admin Name'
          className='form-control addFreight-input'
          value={name}
          onChange={(e) => {
              setName(e.target.value);
              setNameValidator('');
          }}
          />
          {nameValidator && <label className='addFreight-validator-label'>{nameValidator}</label>}
          <label>Admin Surname</label>
          <input
          placeholder='Admin Surname'
          className='form-control addFreight-input'
          value={surname}
          onChange={(e) =>{
              setSurname(e.target.value);
              setSurnameValidator('');
          }}
          />
          {surnameValidator && <label className='addFreight-validator-label'>{surnameValidator}</label>}
          <label>Email</label>
          <input
          placeholder='e-mail'
          className='form-control addFreight-input'
          value={email}
          onChange = {(e) => {
              setEmail(e.target.value);
              setEmailValidator('');
          }}
          />
          {emailValidator && <label className='addFreight-validator-label'>{emailValidator}</label>}
        </div>
        <div className='addFreight-btns-container'>
          <Button
              variant="contained" 
              color="success"
              size="lg"
              style={{marginRight: '5px'}}
              onClick={handleSave}>
              Save
          </Button>
          <Button
              variant="outlined" 
              color="error"
              size="lg"
              onClick={handleClose}
              style={{marginLeft: '5px'}}>
              Close
          </Button>
        </div>
      </Modal>
    </div>
  )
};
export default EditAdminModal;