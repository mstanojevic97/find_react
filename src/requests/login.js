import {postData} from './basic'


export async function loginUser(data){
  return postData("/auth/login", data)
  .then((result) => {
    localStorage.setItem('jwtToken', result.data)
    localStorage.setItem('Role', result.role)
    if(result.idCompany){
      localStorage.setItem('id',result.idCompany)
    }
  })
  .catch((err)=>{
      throw err;
  })
};
export async function logout(){
  return (alert("logedoyt"))
  .then(()=>{
    localStorage.setItem('jwtToken','');
    localStorage.setItem("Role",'');
  })
};