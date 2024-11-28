    import React from 'react'
    import App from './App.jsx'
    import './index.css'
    import { Route } from 'react-router-dom'
    import Layout from './Layout.jsx'
    import Home from './Components/Home/Home.jsx'
    import About from './About.jsx'
    import Contact from './Components/Contact/Contact.jsx'
    import user from './Components/User/User.jsx'
    import { createRoot } from 'react-dom/client'
    import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//  const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[{
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     }
//   ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}y>
    <Route path="" element={<Home />}/>
    <Route path="About" element={<About />}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user/userID:" element={<User/>}/>

    </Route>

  )
)
  createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)


