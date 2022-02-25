export async function getRoles() {
 return fetch("/auth/role").then((res) => res.json());  
}

export async function RegisterColect(data){
  const data2 = {
    name:data.companyName.value,
    vat:data.VAT.value,
    email:data.email.value,
    password:data.password.value,
    roleName:data.roleName.value
  };
  return fetch("/auth/register",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data2)
  }).then((res) => {
    res.json()
  })
};