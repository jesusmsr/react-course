import { useState, useEffect } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {
  const [fact, setFact] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(' ')[0];
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setUrl(url);
      });
  }, [fact]);

  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>App de gatitos</h1>
      <p>{fact}</p>
      {url && (
        <img
          style={{ maxWidth: '400px' }}
          src={url}
          alt={`Image extracted using the first word of ${fact}`}
        />
      )}
    </main>
  );
}
