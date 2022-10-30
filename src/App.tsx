import React from 'react';

import './App.css';
import { HashAdd, HashLine } from './components';
import { useAppSelector } from './hooks';
import { selectHashesWithSums } from './state/hashSlice';

function App() {

  const hashesWithSums = useAppSelector(selectHashesWithSums)

  return (
    <div className="App">
      <HashAdd />
      {hashesWithSums.map(el => 
        <HashLine key={el.hashId} hashWithSum={el} />
      )}
    </div>
  );
}

export default App;
