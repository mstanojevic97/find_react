import {useState} from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CCol, CRow, CFormFeedback } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {login} from '../requests/login'

function Login() {
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
      event.preventDefault()
      login({email: 'stevanko@gmail.com', password:'Test.123'}, (res) => console.log(res))
      const form = event.currentTarget
    //   if (form.checkValidity() === false) {
    //     event.preventDefault()
    //     event.stopPropagation()
    //   }
    //   setValidated(true)
    }

    return (
        <div style={{backgroundColor: '#EEE82C', height: "100%"}}>
            <div style={{height: "100px"}}></div>
            <CForm 
                validated={validated} 
                onSubmit={handleSubmit}
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
                <CFormFeedback valid>Please provide a valid city.</CFormFeedback>
                <div style={{height: "20px"}}></div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <CButton type="submit" shape="rounded-pill" style={{width: "100px"}}>Sign in</CButton>
                </div>
                <div style={{height: "20px"}}></div>
            </CForm>
        </div>
    );
}

export default Login;