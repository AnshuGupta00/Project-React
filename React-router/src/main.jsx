  import App from './App.jsx'

  import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'',
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    }
  ]
  }
])

 
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
