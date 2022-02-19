import { CForm, CFormSelect } from '@coreui/react';
import react from 'react'
import { useState, useEffect} from 'react'

export const Register = () => {
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
          <CFormSelect>
              {role.map(rol => (
                <option key={role.idRole}>
                  {rol.roleName}
                </option>
              ))}
          </CFormSelect>
        );
};