import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/About"; 
import MainLayout from "./pages/MainLayout";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about/:id",
        Component: About,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;