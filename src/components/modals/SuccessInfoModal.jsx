import React from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
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

const SuccessInfoModal = ({isOpen, handleClose, message}) => {
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleClose}
          style={customStyles}
        >
            <h3 style={{textAlign: "center"}}>{message}</h3>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
              <Button 
                  variant="contained" 
                  color="success"
                  size="lg"
                  onClick={handleClose}
              >
                  Ok
              </Button>
            </div>
        </Modal>
      </div>
    );
}

export default SuccessInfoModal;
