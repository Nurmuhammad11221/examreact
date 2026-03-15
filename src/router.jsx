import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        loader: loadRootData,
    },
]);

export default router