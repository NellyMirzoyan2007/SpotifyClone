import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-black w-[241px] min-h-screen p-4">
            <div className="flex justify-between items-center lg:hidden">
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <div className="w-6 h-0.5 bg-white mb-2"></div>
                    <div className="w-6 h-0.5 bg-white mb-2"></div>
                    <div className="w-6 h-0.5 bg-white mb-2"></div>
                </button>
            </div>

            <div className={`flex flex-col space-y-4 text-gray-300 text-lg font-medium ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <Link to="/" className="flex items-center space-x-2 text-green-500 text-2xl font-bold">
                    <FaSpotify className="w-6 h-6 text-white" />
                    <span>Spotify</span>
                </Link>
                <Link to="/" className="flex items-center space-x-2 hover:text-white">
                    <FaHome className="w-5 h-5 text-white" />
                    <span>Home</span>
                </Link>
                <Link to="/search" className="flex items-center space-x-2 hover:text-white">
                    <FaSearch className="w-5 h-5 text-white" />
                    <span>Search</span>
                </Link>
                <Link to="/contact" className="flex items-center space-x-2 hover:text-white">
                    <FaEnvelope className="w-5 h-5 text-white" />
                    <span>Contact</span>
                </Link>
                <Link to="/about" className="flex items-center space-x-2 hover:text-white">
                    <span>About Our Page</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
