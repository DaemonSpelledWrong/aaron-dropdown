import React, { useState } from 'react';

import CharDropdown from './components/CharDropdown';
import Character from './components/Character';

const App = props => {

  const [selectedChar, selectChar] = useState(1);

  const selectCharHandler = event => {
    const charId = event.target.value;
    selectChar(charId);
  };

  let content = (
    <>
      <CharDropdown 
        char = {selectedChar}
        selectCharHandler = {selectCharHandler}
      />
    </>
  );

  return content;
 };

export default App;
