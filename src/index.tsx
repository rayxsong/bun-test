// import fetchUser from "./githubAPI";

// (async () => {
//     const userData = await fetchUser('rayxsong');
//     document.querySelector('h1').innerHTML = JSON.stringify(userData);
// })();

import React from 'react';
import { createRoot } from 'react-dom';
const root = createRoot(document.getElementById('root'));

const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
};

root.render(<App />);