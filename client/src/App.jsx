import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Header from './components/Header'

import Tractor from '../src/components/tools/Tractor'
import MiniTractor from './components/tools/MiniTractor'
import Drones from './components/tools/Drones'
import Harvester from './components/tools/Harvester'
import MiniHarvestor from './components/tools/MiniHarvestor'
import Pesticides from './components/tools/Pesticides'
import Chemicals from './components/tools/Chemicals'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path='/tractors' element={<Tractor/>} />
        <Route path='/miniTractors' element={<MiniTractor/>} />
        <Route path='/drones' element={<Drones/>} />
        <Route path='/harvestor' element={<Harvester/>} />
        <Route path='/miniHarvestor' element={<MiniHarvestor/>} />
        <Route path='/pesticides' element={<Pesticides/>} />
        <Route path='/chemicals' element={<Chemicals/>} />

      </Routes>
    </div>
  )
}

export default App