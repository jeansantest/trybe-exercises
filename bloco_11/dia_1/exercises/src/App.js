import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setList([...list, value]);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <ol>
        {list.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
