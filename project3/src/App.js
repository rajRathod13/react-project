import React from 'react'
import Main from './UseEffect/Main'
import Navbar from './UseEffect/Navbar'
import {Routes,Route} from 'react-router-dom'
import DrinkList from './UseEffect/DrinkList'
import Home from './UseEffect/Home'
import SelectedDrinks from './UseEffect/SelectedDrinks'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='main' element={<Main/>}/>
      <Route path='main/:id' element={<DrinkList/>}/>
      <Route path='selecteddrinks' element={<SelectedDrinks/>}/>
      </Routes>
    </>
  )
}

export default App
