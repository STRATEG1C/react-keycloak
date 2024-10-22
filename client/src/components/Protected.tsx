import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function Protected() {
  const isRun = useRef(false);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (!isRun.current) {
      isRun.current = true;

      const token = localStorage.getItem('token');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get('/documents', config)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      {data ? (
        <>
          {data.map((rec) => <h3 key={rec}>{rec}</h3>)}
        </>
      ) : (
        <h1>Protected</h1>
      )}
    </div>
  );
}

export default Protected;
