import Home from "../pages/home/Home.jsx"
import Features from "../pages/features/Features.jsx"

const MEDRECS_AI_WEBSITE_ROUTES = [
  {
    path: '',
    element: <Home/>,
    children:[
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: "/features",
    element: <Features/>
  },
  {
    path: "/about",
    element: <Features/>
  },
  {
    path: "/pricing",
    element: <Features/>
  },
  {
    path: "/contact",
    element: <Features/>
  },
  
]
export default MEDRECS_AI_WEBSITE_ROUTES