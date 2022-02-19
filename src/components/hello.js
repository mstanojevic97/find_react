import react from 'react'
import { useState, useEffect} from 'react'

const Hello = ()=>{
    const [role, setRole] = useState([]);

    useEffect(() => {
        fetch("/auth/role")
          .then(res => res.json())
          .then(
            (result) => {
              setRole(result);
            },
          )
      }, [])
        return (
          <ul>
            {role.map(rol => (
              <li key={role.idRole}>
                {rol.idRole} {rol.roleName}
              </li>
            ))}
          </ul>
        );
    }


export default Hello;