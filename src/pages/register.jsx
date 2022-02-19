import {useState} from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CCol, CRow, CFormFeedback,CFormSelect,CFormCheck } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Register} from '../requests/register'

function Register2() {
   
    return (
        <div style={{backgroundColor: '#EEE82C', height: "100%"}}>
        <div style={{height: "100px"}}></div>
            
        <CForm 
                //validated={validated} 
                //onSubmit={handleSubmit}
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
                    <CFormInput type="name" id="inputName"/>
                    </CCol>
                </CRow>

                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="email" id="inputEmail3"/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="password" id="inputPassword3"/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="inputZip" className="col-sm-2 col-form-label">VAT</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="Zip" id="inputZip"/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                     <CFormLabel htmlFor="inputState" className="col-sm-2 col-form-label">Type</CFormLabel>
                      <CCol sm={10} >
                        <Register/>
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

export default Register2;