import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import SiparisKontrolFormu from "./components/SiparisKontrolFormu"

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <SiparisKontrolFormu/>
  </div>
  )
}

export default App
