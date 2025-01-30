// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MEDRECS_AI_WEBSITE_ROUTES from './router/Router'

function App() {
  const router = createBrowserRouter([
    ...MEDRECS_AI_WEBSITE_ROUTES,
  ])
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
      
    </>
  )
}

export default App
