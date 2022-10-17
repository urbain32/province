
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PreLoader from '../component/PreLoader';
export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get('http://192.168.10.68:8080/api/ass/province')
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log('There is an error');
        setError(err.message);
      });
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <PreLoader />}
      {data && (
        <table className='highlight '>
          <thead className='#bf360c deep-orange darken-4'>
            <tr>
              <th>Province</th>
              <th>Commune</th>
              <th>Zone</th>
            </tr>
          </thead>

          <tbody>
            {data.map((prov) => (
              <tr key={prov.idProvince}>
                <td>{prov.nomProvince}</td>
                <td>
                  {prov.communes.map((commune) => (
                    <div key={commune.idCommune}>{commune.nomCommune}</div>
                  ))}
                </td>
                <td>
                  {prov.communes.map((commune) =>
                    commune.zones.map((zone) => (
                      <div key={zone.idZone}>{zone.nomZone}</div>
                    ))
                  )}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
