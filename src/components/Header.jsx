import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Header = ({ searchValue, setSearchValue, onSearch }) => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
    };

    return (
        <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-4 mb-8 w-full max-w-screen bg-violet-700 px-3 py-2'>
            <form onSubmit={handleSearchSubmit} className='flex-1 max-w-md w-full'>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search Word...'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='w-full bg-white/20 backdrop-blur-sm text-white placeholder-white/90 px-12 py-3 rounded-full border border-white/30 focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-transparent'
                    />
                    <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5' />
                </div>
            </form>
            <button className='bg-white text-black px-6 py-3 rounded-full font-medium whitespace-nowrap'>
                Dictionary Look-up App
            </button>
        </div>
    )
}

export default Header;