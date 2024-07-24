import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className="card">
        <p>count: </p>
        <button onClick={() => setCount((count) => count + 90000000)}>
          {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
