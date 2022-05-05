import React, { useState, useEffect } from 'react'
import { ProducerData, ProducerRow, ProducerRow2 } from '../components/producer/producerInfo';
import { getCompanyData } from '../requests/admin';


function Producer() {
  const [data, setData] = useState();

  useEffect(() => {
    getCompanyData().then((res) => {
      setData(res);
    })
  }, []);


  return (
    <>
      {data ? 
      (
        <div>
          <div>
            <ProducerData companyData={data.producer}/>
          </div>
          <div style={{ paddingTop: 10 }}>
            <ProducerRow freightFreeParam={data.freightFree}/>
          </div>
          <div style={{ paddingTop: 10 }}>
            <ProducerRow2 freightTakenParam = {data.freightTaken}/>
          </div>
        </div>
      )
      : ''}
    </>
  );
}
export default Producer;