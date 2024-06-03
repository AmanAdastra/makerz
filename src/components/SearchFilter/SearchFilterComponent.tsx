import React from 'react';
import FilterButton from './FilterButton';

const SearchFilterComponent = () => {
    return (
        <div className='flex items-center justify-between md:justify-start'>
            <FilterButton />
            <div className="flex items-center border-[1px] rounded-full border-gray-300 px-2 py-2 max-w-[300px] ">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-2 px-1 py-1 leading-tight focus:outline-none placeholder:font-bold placeholder:text-black text-sm" type="text" placeholder="Search or Filter" aria-label="Search" />
                <button className="flex-shrink-0 bg-red-500 border-red-500 text-xs border-4 text-white  rounded-full" type="button">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 5v5H5v2h5v5h2v-5h5V10h-5V5z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SearchFilterComponent;
