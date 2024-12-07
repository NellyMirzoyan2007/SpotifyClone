  import React from 'react';

  const About = () => {
    return (
      <div className="bg-black text-white min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src="your-image-url-here.jpg"
                alt=""
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">MYRNE</h1>
              <div className="text-xl text-gray-400">
                <p>372,870 Monthly Listeners</p>
                <p>14,386 Followers</p>
              </div>
              <div className="flex mt-4 space-x-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Play
                </button>
                <button className="px-4 py-2 bg-transparent border-2 border-green-600 text-green-600 rounded-md hover:bg-green-700 hover:text-white">
                  Following
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white mb-4">About</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              A smooth blend of R&B, future pop, and mainstage energy, MYRNE garners fans in both the realms of easy listening and heavy bass alike.
              His energetic live shows, coupled with his years of classical training, have planted him at the forefront of electronic music's newest wave. MYRNE released his debut 4-track EP Softsins on Mad Decent in November 2015, inaugurating himself as one of the only Asian artists on the roster.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              MYRNE also has......... wait a second there. Shit, I didn't know you could edit this yourself! I thought it was pulled off wikipedia or some shit. Well, looks like that went to ass. I can basically brag about whatever achievements I want – my manager said this was some prime marketing space. I could. But just enjoy your stay here, drink a lot of water, and please don't listen to my related artists.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Discovered On</h2>
            <div className="flex space-x-6">
              <div className="flex-1 bg-gray-800 p-4 rounded-md">
                <p className="text-lg text-green-500 font-semibold">Top Hits Singapore</p>
                <p className="text-gray-400">Spotify</p>
                <p className="text-gray-300">30,152 Listeners</p>
              </div>
              <div className="flex-1 bg-gray-800 p-4 rounded-md">
                <p className="text-lg text-green-500 font-semibold">NCS | Releases</p>
                <p className="text-gray-400">NCS</p>
                <p className="text-gray-300">16,026 Listeners</p>
              </div>
              <div className="flex-1 bg-gray-800 p-4 rounded-md">
                <p className="text-lg text-green-500 font-semibold">Electro Mix</p>
                <p className="text-gray-400">Spotify</p>
                <p className="text-gray-300">7,870 Listeners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;
