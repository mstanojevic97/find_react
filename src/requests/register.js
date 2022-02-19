export async function getRoles() {
 return fetch("/auth/role").then((res) => res.json());  
}
