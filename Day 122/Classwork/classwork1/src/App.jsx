import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() =>{
    console.log("piece of state changed")
  })
  return (
    <>
      
      <div className="card">
        <h1>useEffect test</h1>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          count is {count1}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
      </div>

    </>
  )
}

export default App
