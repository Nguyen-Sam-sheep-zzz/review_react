import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  useEffect(() => {

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (count === 0) {
      alert('Time up!');
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}


export default App
