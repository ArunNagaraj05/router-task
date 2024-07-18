import React from 'react'
import NavBar from './Components/NavBar'
import FullStackDev from './Components/FullStackDev'
import DataScience from './Components/DataScience'
import CyberSec from './Components/CyberSec'
import Career from './Components/Career'
import All from './Components/All'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/all' element={<All/>}/>
    <Route path='/full-stack-dev' element={<FullStackDev/>}/>
    <Route path='/data-science' element={<DataScience/>}/>
    <Route path='/cyber-sec' element={<CyberSec/>}/>
    <Route path='/career' element={<Career/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App
