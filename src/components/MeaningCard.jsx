import React, { useState } from "react";

const MeaningCard = ({meaningData}) => {
    console.log(meaningData);
    return(
        <div className="text-white p-2 border border-2 border-white rounded-lg w-xs md:w-md h-fit">

            <h2 className="text-2xl mb-4">Part of Speech: {meaningData.partOfSpeech}</h2>

            {meaningData.definitions.map((item, index) => (
                <div key={index} className="mb-3">
                    <span className="">{index+1}. {item.definition}</span> <br />
                    {item.example && <span className="text-sm text-white/80 ml-3">eg. {item.example}</span>}
                </div>
            ))}

            <div className="w-full">
            {meaningData.synonyms && meaningData.synonyms.length > 0 && <span className="">Synonyns: </span>}
            {meaningData.synonyms.map((item, index) => (
                <span key={index} className="text-white/80 text-sm">{item}{index < meaningData.synonyms.length - 1 && ", "}</span>
            ))}
            </div>

            <div className="w-full">
            {meaningData.antonyms && meaningData.antonyms.length > 0 && <span className="">Antonyms: </span>}
            {meaningData.antonyms.map((item, index) => (
                <span key={index} className="text-white/80 text-sm">{item}{index < meaningData.antonyms.length - 1 && ", "}</span>
            ))}
            </div>

        </div>
    )
};

export default MeaningCard;