import React, { useState } from "react";
import { Image, Carousel, Form, Button, Input, InputNumber } from "antd";

export default function App() {

    const beyonce_albums = [
        {
            "id": "6BzxX6zkDsYKFJ04ziU5xQ",
            "name": "COWBOY CARTER",
            "image_url": "https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599",
            "spotify_url": "https://open.spotify.com/album/6BzxX6zkDsYKFJ04ziU5xQ"
        },
        {
            "id": "2UJwKSBUz6rtW4QLK74kQu",
            "name": "BEYONCÉ [Platinum Edition]",
            "image_url": "https://i.scdn.co/image/ab67616d0000b2730d1d6e9325275f104f8e33f3",
            "spotify_url": "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu"
        },
        {
            "id": "6PeoltoiWQWCyWA0JBHVGN",
            "name": "16 CARRIAGES",
            "image_url": "https://i.scdn.co/image/ab67616d0000b273f5220893852002a2a3078bab",
            "spotify_url": "https://open.spotify.com/album/6PeoltoiWQWCyWA0JBHVGN"
        },
        {
            "id": "6oxVabMIqCMJRYN1GqR3Vf",
            "name": "Dangerously In Love",
            "image_url": "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1",
            "spotify_url": "https://open.spotify.com/album/6oxVabMIqCMJRYN1GqR3Vf"
        },
        {
            "id": "2m1enA3YrMLVvR3q0MqLpL",
            "name": "COWBOY CARTER",
            "image_url": "https://i.scdn.co/image/ab67616d0000b2734903a9678d5664b9cd9a3fd8",
            "spotify_url": "https://open.spotify.com/album/2m1enA3YrMLVvR3q0MqLpL"
        }
    ]

    const [tracks, setTracks] = useState([]);

    const carouselStyles = {
        "width": "640px",
        "margin": "auto"
    }

    function albumToJSX(albumJSON) {
        return (
            <div key={albumJSON.id}>
                <img src={albumJSON.image_url} />
                <h3>{albumJSON.name}</h3>
            </div>
        )
    }

    function trackToJSX(track) {
        return (
            <iframe
                key={track.id}
                src={`https://open.spotify.com/embed/track/${track.id}`}
                width="100%"
                border="0"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={track.name}
            ></iframe>
        )
    }

    async function fetchData(searchTerm, limit) {
        const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
        const request = await fetch(url);
        const data = await request.json();
        console.log(data);
        setTracks(data);
    }


    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <Form layout="inline" onFinish={console.log("test")}>
                    <Form.Item label="Search Term">
                        <Input placeholder="insert artist name" />
                    </Form.Item>

                    <Form.Item label="Limit">
                        <InputNumber min={1} max={20} placeholder="max: 20" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>


            </main>
        </>
    );
}
