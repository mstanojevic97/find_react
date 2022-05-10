import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import {cancelFreight} from '../../requests/supplier'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      height: '30%'
    },
};

const CancelModal = ({isOpen, handleClose, onSuccess, data}) => {
    const handleSave = () =>{
        cancelFreight(data)
        .then(()=>{
            onSuccess();
            handleClose();
        })
        .catch((err) => {
            alert(err);
            console.log(err);
        })
    }

    return (
        <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleClose}
          style={customStyles}
        >
            <h3 style={{textAlign: "center"}}>Cancel transport?</h3>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>Are you sure?</div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
              <Button 
                  variant="contained" 
                  color="success"
                  size="lg"
                  onClick={handleSave}
                  style={{marginRight: '5px'}}
              >
                  YES
              </Button>
              <Button 
                  variant="contained" 
                  color="warning"
                  size="lg"
                  onClick={handleClose}
                  style={{marginLeft: '5px'}}
              >
                  CANCEL
              </Button>
            </div>
        </Modal>
      </div>
    )
};
export default CancelModal;