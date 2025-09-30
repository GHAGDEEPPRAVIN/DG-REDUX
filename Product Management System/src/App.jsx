import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import AllRoutes from './Routes/allRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <AllRoutes />
    </div>
  )
}

export default App
