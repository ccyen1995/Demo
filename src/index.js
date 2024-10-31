import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ArrivalList_Loader } from './Components/Purchase/ArrivalList/ArrivalList'
import store from './Store/Store'
import Purchase from './Components/Purchase/Purchase'
import Stock from './Components/Stock/Stock'
import Ship from './Components/Ship/Ship'
import Client from './Components/Client/Client'
import User from './Components/User/User'
import Home from './Components/Home/Home'
import ErrorRoute from './Components/Error/ErrorRoute'
import Ollie from './Components/Ollie/Ollie'
import ComponentsGallery from './Components/Ollie/CompomentsGallery/ComponentsGallery'
import APIpractice from './Components/Ollie/APIpratice/APIpratice'
import Learninglog from './Components/Ollie/Learninglog/Learninglog'
import Aboutme from './Components/Ollie/Aboutme/Aboutme'

const router = createBrowserRouter([
  { path: '/', element: <Ollie></Ollie> },
  {
    path: '/componentsGallery',
    element: <ComponentsGallery></ComponentsGallery>
  },
  { path: '/apipractice', element: <APIpractice></APIpractice> },
  { path: '/learninglog', element: <Learninglog></Learninglog> },
  { path: '/aboutme', element: <Aboutme></Aboutme> },
  {
    path: '/wms',
    element: <Home></Home>,
    errorElement: <ErrorRoute></ErrorRoute>,
    children: [
      {
        path: 'purchase',
        element: <Purchase></Purchase>,
        loader: ArrivalList_Loader
      },
      {
        path: 'stock',
        element: <Stock></Stock>
      },
      {
        path: 'ship',
        element: <Ship></Ship>
      },
      {
        path: 'client',
        element: <Client></Client>
      },
      {
        path: 'user',
        element: <User></User>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App></App>)
