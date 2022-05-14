import * as React from 'react';
import {AdminData, CompanyData, FreightData} from '../components/admin/companyInfosTable';
import {useState, useEffect} from 'react'
import {getData} from '../requests/admin'

function Admin() {
  const[data, setData] = useState();
  console.log(data);
  useEffect(() => {
    getData().then((res)=>{
      setData(res);
    })
  }, []);

return (
  <>
  {data ? 
    (
      <div>
        <div>
          <AdminData adminData={data.admin}/>
        </div>
        <div style={{ paddingTop: 10 }}>
          <CompanyData companyData = {data.companies}/>
        </div>
        <div style={{ paddingTop: 10 }}>
          <FreightData freightData = {data.completed}/>
        </div>
      </div>
    ) : ''}
  </>
  );
}
export default Admin;
