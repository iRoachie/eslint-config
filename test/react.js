import React, { useState } from 'react';

export const Test = () => <p>Hello From React</p>;

export const StateTest = () => {
  const [number, setNumber] = useState(0);

  return <button onClick={() => setNumber(number + 1)}>Badang</button>;
};
