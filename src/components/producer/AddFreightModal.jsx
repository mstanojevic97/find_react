import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import {getLoads} from '../../requests/common'
import Select from 'react-select'
import './AddFreightModal.css'
import {addFreight} from '../../requests/producer';

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

const AddFreightModal = ({isOpen, handleClose, onSuccess}) => {
    const [loads, setLoads] = useState([]); 

    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [warehouse, setWarehouse] = useState('');
    const [destination, setDestination] = useState('');
    const [note, setNote] = useState('');
    const [price, setPrice] = useState('');
    const [load, setLoad] = useState()

    const [weightValidator, setWeightValidator] = useState('');
    const [lengthValidator, setLengthValidator] = useState('');
    const [warehouseValidator, setWarehouseValidator] = useState('');
    const [destinationValidator, setDestinationValidator] = useState('');
    const [noteValidator, setNoteValidator] = useState('');
    const [priceValidator, setPriceValidator] = useState('');
    const [loadValidator, setLoadValidator] = useState('');
    
    useEffect(() => {
        getLoads()
        .then((res) => {
            setLoads(res.map((el) => {
                return {
                    value: el.idLoad,
                    label: el.loadType
                }
            }))
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSave = () => {
        let valid = true;

        if(!weight) {
            valid = false;
            setWeightValidator('Weight is mandatory');
        }
        if(isNaN(parseFloat(weight))){
            valid = false;
            setWeightValidator('Insert valid weight!');
        }

        if(!length) {
            valid = false;
            setLengthValidator('Length is mandatory');
        }
        if(isNaN(parseFloat(length))){
            valid = false;
            setLengthValidator('Insert valid length!');
        }

        if(!warehouse) {
            valid = false;
            setWarehouseValidator('Warehouse is mandatory');
        }
        if(!destination) {
            valid = false;
            setDestinationValidator('Destination is mandatory');
        }
        if(!note) {
            valid = false;
            setNoteValidator('Note is mandatory');
        }
        if(!price) {
            valid = false;
            setPriceValidator('Price is mandatory');
        }
        if(isNaN(parseFloat(price))){
            valid = false;
            setPriceValidator('Insert valid price!');
        }

        if(!load) {
            valid = false;
            setLoadValidator('Load is mandatory');
        }

        if(valid) {
            const data = {
                weight: parseFloat(weight),
                length: parseFloat(length),
                warehouse: warehouse,
                destination: destination,
                note: note,
                price: parseFloat(price),
                load: load
            }

            addFreight(data)
            .then(() => {
                onSuccess();
                handleClose();
            })
            .catch((err) => {
                debugger
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
          <h2 style={{textAlign: "center"}}>Add Freight</h2>
          <div style={{
              display:"flex", 
              flexDirection:"column", 
              justifyContent:"center", 
              alignItems:"center",
              width: "60%",
              margin: "auto"
            }}>
            <input
                placeholder='Weight (Tons)'
                className="form-control addFreight-input" 
                onChange={(e) => {
                    setWeight(e.target.value);
                    setWeightValidator('')
                }}
            />
            {weightValidator && <label className='addFreight-validator-label'>{weightValidator}</label>}
            <input 
                placeholder='Length (M)'
                className="form-control addFreight-input" 
                onChange={(e) => {
                    setLength(e.target.value);
                    setLengthValidator('')
                }}
            />
            {lengthValidator && <label className='addFreight-validator-label'>{lengthValidator}</label>}
            <input 
                placeholder='Warehouse' 
                className="form-control addFreight-input" 
                onChange={(e) => {
                    setWarehouse(e.target.value);
                    setWarehouseValidator('');
                }}
            />
            {warehouseValidator && <label className='addFreight-validator-label'>{warehouseValidator}</label>}
            <input 
                placeholder='Destination' 
                className="form-control addFreight-input" 
                onChange={(e) => {
                    setDestination(e.target.value);
                    setDestinationValidator('');
                }}
            />
            {destinationValidator && <label className='addFreight-validator-label'>{destinationValidator}</label>}
            <input 
                placeholder='Note' 
                className="form-control addFreight-input" 
                onChange={(e) => {
                    setNote(e.target.value);
                    setNoteValidator('');
                }}
            />
            {noteValidator && <label className='addFreight-validator-label'>{noteValidator}</label>}
            <input 
                placeholder='Price (€)'
                className="form-control addFreight-input" 
                onChange={(e) => {
                    setPrice(e.target.value);
                    setPriceValidator('');
                }}
            />
            {priceValidator && <label className='addFreight-validator-label'>{priceValidator}</label>}
            <Select 
                options={loads}
                onChange={(e) => {
                    setLoad(e.value);
                    setLoadValidator('')
                }}
            />
            {loadValidator && <label className='addFreight-validator-label'>{loadValidator}</label>}
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

export default AddFreightModal;
