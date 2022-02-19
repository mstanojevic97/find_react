import { CFormSelect } from "@coreui/react";
import { useState, useEffect } from "react";
import { getRoles } from "../../requests/register";

export const RoleSelect = () => {
  const [role, setRole] = useState([]);

  useEffect(() => {
    getRoles().then((res) => {
      setRole(res)});
  }, []);
  return (
    <CFormSelect>
      {role.map((rol) => (
        <option key={role.idRole}>{rol.roleName}</option>
      ))}
    </CFormSelect>
  );
};
