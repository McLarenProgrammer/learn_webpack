import {createRoot} from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <h1>О нас</h1>
            }
        ]
    }
])

container.render(
    <RouterProvider router={router} />
);