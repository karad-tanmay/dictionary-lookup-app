import React, { useState } from 'react';
import MeaningCard from './MeaningCard';

const Meanings = ({ meaningsData }) => {

    return (
        <div className='flex flex-col justify-start font-[Iosevka] px-5'>
            <h1 className='text-black mb-2 text-2xl'>Meanings:</h1>
            <div className='flex gap-3 flex-wrap'>
                {meaningsData.map((item, index) => (
                    <MeaningCard key={index} meaningData={item} />
                ))}
            </div>
        </div>
    )
};

export default Meanings;