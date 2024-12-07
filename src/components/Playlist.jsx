import React from 'react';
const playlistId = '0aZb40Tj3CiSo0NZsPonoL';

const Playlist = () => {
    return (
        <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-white mb-4">Recommended Playlist</h2>
            <div className="w-full h-72 bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                <iframe
                    title="Spotify Embed: Recommendation Playlist"
                    src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="100%"
                    style={{ height: '360px' }}
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </div>
    );
};
export default Playlist;
