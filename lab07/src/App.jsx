import React from "react";
import Profile from "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";

export default function App() {

    const people = [
        {
            "name": "Anita",
            "image_url": "https://picsum.photos/id/216/100/100"
        },
        {
            "name": "Ben",
            "image_url": "https://picsum.photos/id/217/100/100"
        },
        {
            "name": "Adwaina",
            "image_url": "https://picsum.photos/id/218/100/100"
        },
        {
            "name": "Laciesha",
            "image_url": "https://picsum.photos/id/219/100/100"
        }
    ];

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                {
                    people.map((person) => {
                        return (
                            <Profile
                                name={person.name}
                                picture={person.image_url}
                            />
                        )
                    })
                }

                <ButtonCount initial_value={0} />
                <ButtonCount initial_value={1} />
                <ButtonCount initial_value={2} />
                <ButtonCount initial_value={3} />
                <ButtonCount initial_value={10} />
                <ButtonCount initial_value={100} />
            </main>
        </>
    );
}