// Router

import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Deafault Layout

import DefaultLayout from '../layouts/DefaultLayout'


// Components

import HomePage from '../pages/HomePage'
import MovieDetails from '../pages/MovieDetails'


// Css

import './App.css'


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>

          <Route index path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />

        </Route>

      </Routes>

    </BrowserRouter>

  )

}

export default App