const { createRoot } = require("react-dom/client");
const { default: App } = require("./App");
import Contact from "./component/Contact";
import CountryDetail from "./component/CountryDetail";
import Error from './component/Error'
import Home from './component/Home'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/:country",
            element: <CountryDetail />,
          },
      ],
    },
  ]);


const root=createRoot(document.getElementById('root'))
root.render( <RouterProvider router={router} />)