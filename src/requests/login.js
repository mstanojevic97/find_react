import {postData} from './basic'


export async function loginUser(data){
  return postData("/auth/login", data)
  .then((result) => {
    localStorage.setItem('jwtToken', result)
  })
  .catch((err)=>{
      throw err
  })
};