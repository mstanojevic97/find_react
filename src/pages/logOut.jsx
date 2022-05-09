import {logout} from '../requests/login'
import { useNavigate  } from 'react-router-dom'

function LogOut(){
    const navigate = useNavigate();
    logout()
    .then(() =>{
        navigate('/');
        alert("LogedOut!");
    })
    .catch((err) =>{
        console.log(err);
        alert(err);
    })
    return(alert("LogedOut!"));
};
export default LogOut;