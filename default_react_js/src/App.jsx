import { useEffect, useState } from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState(10);

    useEffect(() => {

      if (count === 0) {
        alert('Time up!');
        return;
      }

      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);

    }, [count]);

    return (
      <div>
        <h1>{count}</h1>
      </div>
    );
  }

export default App
