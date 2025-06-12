import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import WordPhonetics from './components/WordPhonetics';
import Meanings from './components/Meanings';
import Footer from './components/Footer';

function App() {
  const [wordData, setWordData] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const defaultWord = "welcome";

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
      // console.log(data[0].word);
      // console.log(wordData.word);
    } catch (error) {
      console.error('Error fetching word data.', error);
      alert('Failed to fetch word data. Please try again.');
    }
  };

  const handleSearch = async (word) => {
    await fetchWordData(word);
    setSearchValue('');
  };

  useEffect(() => {
    fetchWordData(defaultWord);
  }, []);

  return (
    <div className='min-h-screen relative overflow-hidden'>

      <div className='absolute inset-0 bg-white' />

      <div className='relative z-10 min-h-screen flex flex-col items-center justify-start'>

        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onSearch={handleSearch}
        />

        {
          wordData &&
          <WordPhonetics
            word={wordData.word}
            phonetics={wordData.phonetics}
          />
        }

        {
          wordData &&
          <Meanings
            meaningsData={wordData.meanings}
          />
        }

        <Footer />

      </div>

    </div>
  )
}

export default App
