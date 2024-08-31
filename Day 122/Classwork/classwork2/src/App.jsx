import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    document.addEventListener('click', setCount((prevCount) => prevCount + 1));

    document.removeEventListener('click', setCount((prevCount) => prevCount + 1));

  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
