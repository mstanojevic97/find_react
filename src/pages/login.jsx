import {useState} from 'react'
import { CForm, CFormLabel, CFormInput, CButton, CCol, CRow, CFormFeedback } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {loginUser} from '../requests/login'
import { useNavigate  } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const [emailLog,setEmailLog] = useState('')
    const [passwordLog,setPasswordLog] = useState('')
      
    const login = (e) => {
        e.preventDefault()
        
        const data = {
            email: emailLog,
            password: passwordLog
        }
        loginUser(data)
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
    };
    return (
        <div style={{backgroundColor: '#EEE82C', height: "100%"}}>
            <div style={{height: "100px"}}></div>
            <CForm 
                
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
                    <CFormLabel  className="col-sm-2 col-form-label">Email</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="email" onChange={(e) =>{
                        setEmailLog(e.target.value)
                    }}/>
                    </CCol>
                </CRow>
                <div style={{height: "20px"}}></div>
                <CRow className="mb-3">
                    <CFormLabel  className="col-sm-2 col-form-label">Password</CFormLabel>
                    <CCol sm={10} >
                    <CFormInput type="password" onChange={(e) =>{
                        setPasswordLog(e.target.value)
                        }}/>
                    </CCol>
                </CRow>
                <CFormFeedback valid>Please provide a valid city.</CFormFeedback>
                <div style={{height: "20px"}}></div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <CButton onClick={login} type="submit" shape="rounded-pill" style={{width: "100px"}}>Sign in</CButton>
                </div>
                <div style={{height: "20px"}}></div>
            </CForm>
        </div>
    );
}
export default Login;