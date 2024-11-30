import React, { useState } from "react";

export default function ButtonCount({ initial_value }) {
    // biggest idea in React is: state variables!
    const [count, setCount] = useState(initial_value);

    function addOne() {
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(initial_value);
    }

    function setCounterToZero() {
        setCount(0);
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>reset</button>
            <button onClick={setCounterToZero}>set to zero</button>
        </div>
    );
}