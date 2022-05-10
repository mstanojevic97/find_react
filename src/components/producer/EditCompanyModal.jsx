import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import './EditFreightModal.css'
import {updateCompany} from '../../requests/common';

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

const EditCompanyModal = ({isOpen, handleClose, onSuccess, data}) => {
    const [idCompany] = useState(data.idCompany);
    const [companyName, setCompanyName] = useState(data.companyName);
    const [VAT, setVat] = useState(data.VAT);
    const [email, setEmail] = useState(data.email);

    const [companyNameValidator, setCompanyNameValidator] = useState('');
    const [vatValidator, setVatValidator] = useState('');
    const [emailValidator, setEmailValidator] = useState('');

    const handleSave = () => {
        let valid = true;

        if(!companyName) {
            valid = false;
            setCompanyNameValidator('Required field!');
        }
        if(!VAT) {
            valid = false;
            setVatValidator('VAT must be number!')
        }
        if(!email) {
            valid = false;
            setEmailValidator('Required field!');
        }
        if(valid) {
            const data = {
                idCompany:idCompany,
                companyName: companyName,
                VAT: parseInt(VAT),
                email: email
            }
            updateCompany(data)
            .then(() =>{
                onSuccess();
                handleClose();
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            })
        }
    }
    return (
        <div>
            <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <h2 style={{textAlign:"center"}}>Edit Company Data</h2>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    width: "60%",
                    margin: "auto"
                }}>
                    <label>Company Name</label>
                    <input
                    placeholder='companyName'
                    className='form-control addFreight-input'
                    value={companyName}
                    onChange={(e) => {
                        setCompanyName(e.target.value);
                        setCompanyNameValidator('');
                    }}
                    />
                    {companyNameValidator && <label className='addFreight-validator-label'>{companyNameValidator}</label>}
                    <label>VAT</label>
                    <input
                        placeholder='VAT'
                        className='form-control addFreight-input'
                        value={VAT}
                        onChange={(e) =>{
                            setVat(e.target.value);
                            setVatValidator('');
                        }}
                    />
                    {vatValidator && <label className='addFreight-validator-label'>{vatValidator}</label>}
                    <label>E-mail</label>
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
    );
}
export default EditCompanyModal;