import React, { useState, useEffect } from 'react';

const CharDropdown = props => {
  const [loadedChars, setLoadedChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(characters => {
        const tenChars = characters.results.slice(0, 10);

        setIsLoading(false);

        setLoadedChars(tenChars.map((char, index) => ({
          name: char.name,
          id: index + 1
        })));
      });
  }, [])

  let content = <p>Loading characters...</p>;

  if (
    !isLoading &&
    loadedChars &&
    loadedChars.length > 0
  ) {
    content = (
      <select
        value={props.selectedChar}
        onChange={props.selectCharHandler}
      >
        {loadedChars.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoading &&
    (!loadedChars || loadedChars.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
};

export default CharDropdown;