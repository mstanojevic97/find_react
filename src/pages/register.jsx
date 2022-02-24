import { CForm, CFormLabel, CFormInput, CButton, CCol, CRow, CFormFeedback,} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RoleSelect} from '../components/register/RoleSelect'
import { RegisterColect } from "../requests/register";
import { useNavigate  } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const HandleRegister=(event)=>{
        event.preventDefault()
        const data={
            companyName:event.target.companyName,
            email:event.target.email,
            password:event.target.password,
            VAT:event.target.VAT,
            roleName:event.target.roleName
        }
        RegisterColect(data)
        .then(() => {
            navigate('/login');
        });
    }
    return (
        <div style={{backgroundColor: '#EEE82C', height: "100%"}}>
        <div style={{height: "100px"}}></div>
            
        <CForm 
                //validated={validated} 
                onSubmit={HandleRegister}
                style={{
                    padding: "20px", 
                    maxWidth:"500px", 
                    margin:"auto", 
                    backgroundColor:"white", 
                    borderRadius: "6px", 
                    boxShadow:"9px 9px 17px 6px rgba(0,0,0,0.61)"
                }}>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputName" className="col-sm-2 col-form-label">Company</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="name" name="companyName"/>
                    </CCol>
                </CRow>

                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="email" name="email"/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="password" name="password"/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputZip" className="col-sm-2 col-form-label">VAT</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="Zip" name="VAT"/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                     <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Type</CFormLabel>
                      <CCol sm={10} >
                        <RoleSelect/>
                    </CCol>
                </CRow>
                <CFormFeedback valid>Please provide a valid city.</CFormFeedback>
                <div style={{height: "20px"}}></div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <CButton type="submit" shape="rounded-pill" style={{width: "100px"}}>Register</CButton>
                </div>
                <div style={{height: "20px"}}></div>
            </CForm>
            
        </div>
    );
}

export default Register;