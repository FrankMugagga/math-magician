import React, { useState, useEffect } from 'react';

function DisplayQuote() {
  const apiUrl = 'https://api.api-ninjas.com/v1/quotes/';
  const token = '7R4Z2M0ATFoFWAqNgcKVig==auatjCNk3a95D2M7';

  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const head = {
          headers: { 'X-API-Key': `${token}` },
        };
        const res = await fetch(apiUrl, head);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <ul className="quote">
        {data.map((item) => (
          <li key={item.id}>
            <q>{item.quote}</q>
          &nbsp;&nbsp;
            <br />
            <br />
            {item.author}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default DisplayQuote;
