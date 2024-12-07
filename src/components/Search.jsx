import React, { useState } from "react";

const Search = ({ getSearchResults, data }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    getSearchResults(query);
    console.log(query);
    
  };
  return (
    <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search for songs, artists, or albums..."
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-l-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
       
    <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[25px]">
                {data.map(track => {

                    console.log(track.images);
                    
                    let image = track.images
                    console.log(image);
                    if(!image.length) {
                        image = null
                    } 

                    return (
                    <li key={track.id} className="relative bg-gray-800 rounded-lg w-full h-full aspect-square overflow-hidden hover:bg-gray-700 transition">
                        {image && <img src={image[0].url} alt={track.name} className="w-full h-full object-cover" />}
                        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-lg font-semibold text-white">{track.name}</span>
                        </div>
                    </li>
                )})}
            </ul>
    </div>
  );
};
export default Search;
