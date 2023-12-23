import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Store/Store'
import Purchase from './Components/Purchase/Purchase'
import Stock from './Components/Stock/Stock'
import Ship from './Components/Ship/Ship'
import Client from './Components/Client/Client'
import User from './Components/User/User'
import Home from './Components/Home/Home'
import ErrorRoute from './Components/Error/ErrorRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorRoute></ErrorRoute>,
    children: [
      { path: '/', element: <h1>歡迎使用倉儲系統</h1> },
      {
        path: 'purchase',
        element: (
          <Provider store={store}>
            <Purchase></Purchase>
          </Provider>
        ),
        loader: () => {
          return null
        }
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
  return <RouterProvider router={router}></RouterProvider>
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App></App>)
