import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import {deleteCompany} from '../../requests/admin';

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
const DeleteCompanyModal = ({isOpen, handleClose, onSuccess, data}) =>{
    const[id] = useState(data.idCompany);
    debugger
    const handleSave = ()=>{
        let dataa={
            id:id
        }
        deleteCompany(dataa)
        .then(()=>{
            onSuccess();
            handleClose();
        })
        .catch((err)=>{
            alert(err);
            console.log(err);
        })
    }
    return(
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 style={{textAlign: "center"}}> Delete Company?</h2>
                <div style={{
                    display:"flex",
                    flexDirection:"column", 
                    justifyContent:"center", 
                    alignItems:"center",
                    width: "60%",
                    margin: "auto"
                }}>
                    <label>Are you sure?</label>
                </div>
                <div className='addFreight-btns-container'>
                    <Button
                        variant="contained"
                        color="success"
                        size="lg"
                        style={{marginRight:'5px'}}
                        onClick={handleSave}>
                    Yes
                    </Button>
                    <Button
                        variant='outlined'
                        color='error'
                        size='lg'
                        onClick={handleClose}
                        style={{marginLeft:'5px'}}>
                        No
                    </Button>
                </div>
            </Modal>
        </div>
    )
};
export default DeleteCompanyModal;