import { useState, useEffect } from 'react';
import { getRandomFact } from './services/facts';

export function App() {
  const [url, setUrl] = useState(null);
  const [fact, setFact] = useState(null);

  useEffect(() => {
    getRandomFact().then((fact) => setFact(fact));
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

  const handleClick = () => {
    getRandomFact().then((fact) => setFact(fact));
  };

  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Refrescar</button>
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
