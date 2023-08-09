"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
    const router = useRouter();
    const [location, setLocation] = useState('');
    const notFound = ['banana', 'apple'];

    const searchHandler = () => {
        if(notFound.includes(location)){
        alert('Prodcut not matching location ' + location);
        return;
        }
        else {
        router.push('/search');
        }
    }
    return(
        <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="rounded  mr-3 p-2 w-[450px]"
            type="text"
            placeholder="State, city or town"
        />
        <button onClick={() => searchHandler()} 
            className="rounded bg-red-600 px-9 py-2 text-white">
            Let's go
        </button>
    </div>
    )
}

export default SearchBar;