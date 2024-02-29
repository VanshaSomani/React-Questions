import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PassGenerator } from './components/PassGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-4xl text-center text-black font-bold shadow-outline'>Password Generator</h1> */}
      <PassGenerator/>
    </>
  )
}

export default App
 