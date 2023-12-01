import { useState } from 'react'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import { Mining } from './components/(mining)/Mining'
import { Claim } from './components/Claim'


function App() {
  const [count, setCount] = useState(0)
  const [eth, setEth] = useState('')
  console.log(eth)
  return ( 
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home setEth={setEth} />} />
        <Route path='/mine/:id' element={<Mining />} />
        <Route path='/claim/:id' element={<Claim />} />
      </Routes>
    </div>
  )
}

export default App
