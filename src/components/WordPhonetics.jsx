import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';

const WordPhonetics = ({word, phonetics}) => {
            // console.log(word);
            // console.log(phonetics);

    const handleAudioReq = async (audioLink) => {
        // console.log(audioLink);
        // const audio = await fetch (`${audioLink}`);
        const audio = new Audio(audioLink);

        audio
            .play()
            // .then(() => console.log("Audio is playing."))
            .catch((error) => console.error("Error playing audio.", error))
    };

    return (
        <div className='text-violet-800 font-[Iosevka] flex-col justify-start w-full mb-4 px-5'>

            <h1 className='text-5xl font-bold mb-2'>{word}</h1>

            <h1 className='text-xl mb-2'>Phonetics:</h1>
            <div className='flex flex-wrap gap-x-3'>
                {phonetics.map((item, index) => (
                    <div key={index} className='flex justify-start px-3 py-2 gap-3 content-center border-2 rounded-md border-violet-800'>
                        <span className='text-lg italic min-w-0 flex-shrink-0 content-center'>
                            {item.text}
                        </span>
                        {item.audio && 
                        <button
                            type='submit'
                            value={item.audio}
                            className='p-1.5 rounded-full border border-2 bg-violet-700 border-violet-800'
                            onClick={() => handleAudioReq(item.audio)}
                            >
                            <Volume2 className='text-white/80 hover:text-white/90'/>
                        </button>}
                    </div>
                ))}
            </div>

        </div>
    )

};

export default WordPhonetics;