import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Homepage } from './Components/Home/Homepage'
import { Create } from './Components/Create/Create'
import { History } from './Components/History/History'
import { About } from './Components/About/About'
import { Footer } from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
      <Routes>
        <Route element={<Navbar></Navbar>}>
         <Route path='/' element={<Homepage></Homepage>}></Route>
         <Route path='/create' element={<Create></Create>}></Route>
         <Route path='/history' element={<History></History>}></Route>
         <Route path='/about' element={<About></About>}></Route>
        </Route>
      </Routes>
      <Footer />
      </HashRouter>
      
    </>
    
  )
}

export default App
