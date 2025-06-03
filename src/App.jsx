import React, { useState } from 'react'
import Header from './components/Header';

function App() {
  const [wordData, setWordData] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const fetchWordData = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) throw new Error('Failed to fetch word data.');
      const data = await response.json();
      setWordData({
        word: data[0].word,
        phonetics: data[0].phonetics,
        meanings: data[0].meanings
      });
    } catch (error) {
      console.error('Error fetching word data.', error);
      alert('Failed to fetch word data. Please try again.');
    }
  };

  const handleSearch = (word) => {
    fetchWordData(word);
    setSearchValue('');
  };

  return (
    <div className='min-h-screen relative overflow-hidden'>

      <div
        className='absolute inset-0 bg-cover bg-no-repeat filter hue-rotate-120'
        style={{
          backgroundImage: "url('/assets/bg-1.png')"
        }}
      />

      <div className='absolute inset-0 bg-black/20' />

      <div className='relative z-10 min-h-screen flex flex-col items-center justify-start px-6 py-8'>
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={handleSearch}
        />
      </div>

    </div>
  )
}

export default App
