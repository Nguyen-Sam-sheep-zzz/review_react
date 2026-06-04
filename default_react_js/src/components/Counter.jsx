import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter;