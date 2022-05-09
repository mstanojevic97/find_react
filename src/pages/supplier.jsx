import React, { useState, useEffect } from 'react'
import { SupplierData, SupplierRow, SupplierRow2, SupplierRow3 } from '../components/supplier/supplierInfo';
import { getSupplierData } from '../requests/admin';


function Supplier() {
  const [data, setData] = useState();
  useEffect(() => {
    getSupplierData().then((res) => {
      setData(res);
    })
  }, []);


  return (
    <>
      {data ? 
      (
        <div>
          <div>
            <SupplierData companyData={data.supplier}/>
          </div>
          <div style={{ paddingTop: 10 }}>
            <SupplierRow3 freightCompletedParam = {data.freightCompleted}/>
          </div>
          <div style={{ paddingTop: 10 }}>
            <SupplierRow2 freightTakenParam = {data.freightTaken}/>
          </div>
          <div style={{ paddingTop: 10 }}>
            <SupplierRow freightFreeParam={data.freightFree}/>
          </div>
        </div>
      )
      : ''}
    </>
  );
}
export default Supplier;