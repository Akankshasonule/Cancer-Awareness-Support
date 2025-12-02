import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/> ,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>
}

export default App