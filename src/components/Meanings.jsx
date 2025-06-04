import React, { useState } from 'react';
import MeaningCard from './MeaningCard';

const Meanings = ({ meaningsData }) => {

    return (
        <div className='flex flex-col justify-start font-[Iosevka]'>
            <h1 className='text-white mb-2 text-2xl'>Meanings:</h1>
            <div className='flex gap-3 flex-wrap'>
                {meaningsData.map((item, index) => (
                    <MeaningCard key={index} meaningData={item} />
                ))}
            </div>
        </div>
    )
};

export default Meanings;