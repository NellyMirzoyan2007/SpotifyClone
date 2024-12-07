import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
import Search from "./components/Search";
import Contact from "./components/Contact";
import About from "./components/About";

const clientId = 'b2c0d8f7aa6c4f0fb42d9a7069dee081';
const clientSecret = 'b2d7c3a243ce4592aa5ff817e9d5db85';
function App() {
    const [accessToken, setAccessToken] = useState("");
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const authParameters = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
            },
            body: "grant_type=client_credentials",
        };

        fetch("https://accounts.spotify.com/api/token", authParameters)
            .then((resp) => resp.json())
            .then((resp) => setAccessToken(resp.access_token))
    }, []);

    async function search(query) {

        if (!accessToken) {
            return;
        }

        const artistParameters = {
            method: "GET",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        };

        try {
            const artistID = await fetch(
                `https://api.spotify.com/v1/search?q=${query}&type=artist`,
                artistParameters
            )
                .then((resp) => resp.json())
                .then((resp) => {
                    console.log(resp.artists.items);
                    setData(resp.artists.items);
                });
        } catch (error) {
        }
    }
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search data={data} getSearchResults={search} />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;

