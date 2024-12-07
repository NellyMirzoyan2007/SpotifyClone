// src/api.js

export const token = 'BQBppBBWr8Pdl96Hwj1-ftQbnz5LC9Z-0FSFwtw6ROg6aWvpXe4VMc8o6DS8-RDePYQdkQWe4MPSP2Gy6UIdim8ZzEJfU-Cdyq_WJKkiHtbCXP3Z4zYh9CAalS_jWRYoK8l5pVSSwAjEstJseqNxcYmpBRh_TXsbyRi15P7lLW19VzU40uLuzH_nQCPFAaqbuN1V0BN40Pv4J94seUZE6plZGmInuqbOVoPTDUdKuulji2Ie0IGYyCO86WyAftBeEtlW5IRJr-Ktqu1RNRNuteEQSYXzQGAV'
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        method,
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
}

export async function getTopTracks() {
    return (await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5', 'GET')).items;
}

export async function getRecommendations(topTracksIds) {
    return (await fetchWebApi(
        `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
    )).tracks;
}

