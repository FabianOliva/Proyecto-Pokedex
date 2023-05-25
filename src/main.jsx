import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PokemonCard } from './pages/pokemon-card/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/pokemon/:id',
    element: <PokemonCard />
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
