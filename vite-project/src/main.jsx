import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from "./components/header";
import Layout from "./components/layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contactus from "./components/contactus";
import Menu from "./components/menu";
import Home from "./components/home";
import Cart from "./components/Cart"
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import Aboutus from "./components/aboutus";
// import '@shopify/polaris/build/esm/styles.css';
import AdminLogin from "./components/adminLogin";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true, // This makes it the default child route for "/"
                    element: <Home />
                },
                {
                    path: "contactus",
                    element: <Contactus />
                },
                {
                    path: "menu",
                    element: <Menu />
                },
                {
                    path: "Cart",
                    element: <Cart />
                },
                {
                    path: "aboutus",
                    element: <Aboutus />
                },
                // {
                //     path: "adminLogin",
                //     element: <AdminLogin />
                // }
            ]
        }
    ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)

