import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import store from "./Store/Store"
import Purchase from "./Components/Purchase/Purchase"
import Stock from "./Components/Stock/Stock"
import Ship from "./Components/Ship/Ship"
import Client from "./Components/Client/Client"
import User from "./Components/User/User"
import Home from "./Components/Home/Home"
import ErrorRoute from "./Components/Error/ErrorRoute"
import Me from "./Components/Me/me"
import { ArrivalList_Loader } from "./Components/Purchase/ArrivalList/ArrivalList"

const router = createBrowserRouter([
  { path: "/", element: <Me></Me> },
  {
    path: "/wms",
    element: <Home></Home>,
    errorElement: <ErrorRoute></ErrorRoute>,
    children: [
      {
        path: "purchase",
        element: <Purchase></Purchase>,
        loader: ArrivalList_Loader,
      },
      {
        path: "stock",
        element: <Stock></Stock>,
      },
      {
        path: "ship",
        element: <Ship></Ship>,
      },
      {
        path: "client",
        element: <Client></Client>,
      },
      {
        path: "user",
        element: <User></User>,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App></App>)
