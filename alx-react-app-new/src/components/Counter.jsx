import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontSize: '1.5rem' }}>Current Count: {count}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
