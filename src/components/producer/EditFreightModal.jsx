import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import {getLoads} from '../../requests/common'
import Select from 'react-select'
import './EditFreightModal.css'
import {editFreight} from '../../requests/producer';

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

const EditFreightModal = ({isOpen, handleClose, onSuccess, data}) => {
    const [loads, setLoads] = useState([]); 
    const [idFreight] = useState(data.idFreight);
    
    const [weight, setWeight] = useState(data.weight);
    const [length, setLength] = useState(data.length);
    const [warehouse, setWarehouse] = useState(data.warehouse);
    const [destination, setDestination] = useState(data.destination);
    const [note, setNote] = useState(data.note);
    const [price, setPrice] = useState(data.price);
    const [load, setLoad] = useState({
        value: data.idLoad,
        label: data.loadType
    });

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
                idFreight: idFreight,
                weight: parseFloat(weight),
                length: parseFloat(length),
                warehouse: warehouse,
                destination: destination,
                note: note,
                price: parseFloat(price),
                idLoad: load.value
            }

            editFreight(data)
            .then(() => {
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
          <h2 style={{textAlign: "center"}}>Edit Freight</h2>
          <div style={{
              display:"flex", 
              flexDirection:"column", 
              justifyContent:"center", 
              alignItems:"center",
              width: "60%",
              margin: "auto"
            }}>
                <label>Weight</label>
                <input
                placeholder='Weight' 
                className="form-control addFreight-input"
                value={weight}
                onChange={(e) => {
                    setWeight(e.target.value);
                    setWeightValidator('')
                }}
            />
            {weightValidator && <label className='addFreight-validator-label'>{weightValidator}</label>}
            <label>Length</label>
            <input 
                placeholder='Length' 
                className="form-control addFreight-input"
                value={length}
                onChange={(e) => {
                    setLength(e.target.value);
                    setLengthValidator('')
                }}
            />
            {lengthValidator && <label className='addFreight-validator-label'>{lengthValidator}</label>}
            <label>Warehouse</label>
            <input 
                placeholder='Warehouse' 
                className="form-control addFreight-input"
                value={warehouse}
                onChange={(e) => {
                    setWarehouse(e.target.value);
                    setWarehouseValidator('');
                }}
            />
            {warehouseValidator && <label className='addFreight-validator-label'>{warehouseValidator}</label>}
            <label>Destination</label>
            <input 
                placeholder='Destination' 
                className="form-control addFreight-input"
                value={destination}
                onChange={(e) => {
                    setDestination(e.target.value);
                    setDestinationValidator('');
                }}
            />
            {destinationValidator && <label className='addFreight-validator-label'>{destinationValidator}</label>}
            <label>Note</label>
            <input 
                placeholder='Note' 
                className="form-control addFreight-input" 
                value={note}
                onChange={(e) => {
                    setNote(e.target.value);
                    setNoteValidator('');
                }}
            />
            {noteValidator && <label className='addFreight-validator-label'>{noteValidator}</label>}
            <label>Price</label>
            <input 
                placeholder='Price' 
                className="form-control addFreight-input" 
                value={price}
                onChange={(e) => {
                    setPrice(e.target.value);
                    setPriceValidator('');
                }}
            />
            {priceValidator && <label className='addFreight-validator-label'>{priceValidator}</label>}
            <label>Load Type</label>
            <Select 
                options={loads}
                value ={load}
                onChange={(e) => {
                    setLoad(e);
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

export default EditFreightModal;