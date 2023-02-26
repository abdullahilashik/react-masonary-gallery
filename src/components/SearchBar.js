import React, {useState} from "react";

const SearchBar = ({searchTerm}) => {
    const [query, setQuery] = useState('');
    function onSubmit(e){
        e.preventDefault();
        searchTerm(query);
    }
    return (
        <div className="container mx-auto">
            <div className="flex flex-col justify-center">
                <form onSubmit={onSubmit}>
                    <div className="flex justify-center">
                        <input placeholder="Search here" onChange={e=> setQuery(e.target.value)} className="outline-none border-b-2 borde-gray-900 px-6 py-2 w-2/3"/>
                        <button className="bg-purple-600 text-white px-4">Search</button>
                    </div>
                </form>
                <p className="text-center mt-2">You are searching with: <span className="font-bold underline text-teal-500">{query}</span></p>
            </div>
        </div>
    )
}

export default SearchBar