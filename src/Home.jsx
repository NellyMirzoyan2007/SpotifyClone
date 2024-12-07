// src/component/Home.jsx
import React, { useEffect, useState } from 'react';
import { getTopTracks, getRecommendations } from './api';
import Playlist from './components/Playlist';

function Home() {
    const [topTracks, setTopTracks] = useState([]);
    const [recommendedTracks, setRecommendedTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const tracks = await getTopTracks();
                setTopTracks(tracks);
                const topTrackIds = tracks.map(track => track.id);
                const recommendations = await getRecommendations(topTrackIds);
                setRecommendedTracks(recommendations);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchTracks();
    }, []);

    if (loading) return <div className="text-white">Loading...</div>;
    if (error) return <div className="text-red-500">Error fetching tracks: {error}</div>;

    return (
        <div className="text-white p-2">
            <h2 className="text-2xl font-bold text-black">Most Popular Songs</h2>
            <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topTracks.map(track => (
                    <li key={track.id} className="relative bg-gray-800 rounded-lg w-full h-full aspect-square overflow-hidden hover:bg-gray-700 transition">
                       
                        <img src={track.album.images[0].url} alt={track.name} className="w-full h-full object-cover" />

                        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-lg font-semibold text-white">{track.name}</span>
                            <span className="text-gray-400 text-sm">{track.artists.map(artist => artist.name).join(', ')}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className="mt-6 text-2xl font-bold text-black">Recommended Songs</h2>
            <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-[25px]">
                {recommendedTracks.map(track => (
                    <li key={track.id} className="relative bg-gray-800 rounded-lg w-full h-full aspect-square overflow-hidden hover:bg-gray-700 transition">
                        
                        <img src={track.album.images[0].url} alt={track.name} className="w-full h-full object-cover" />

                        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-lg font-semibold text-white">{track.name}</span>
                            <span className="text-gray-400 text-sm">{track.artists.map(artist => artist.name).join(', ')}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <Playlist />
        </div>
    );
}

export default Home;
