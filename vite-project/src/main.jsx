import React, { Suspense }  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from "./components/header";
import Layout from "./components/layout"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home";
import {store} from './redux/store/store'
import {Provider} from 'react-redux'
const Contactus = React.lazy(() => import('./components/contactus'));
const Aboutus = React.lazy(() => import('./components/aboutus'));
const  AdminLogin = React.lazy(() => import('./components/adminLogin'));
const Menu = React.lazy(() => import('./components/menu'));
const Cart = React.lazy(() => import('./components/Cart'));
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true, // This makes it the default child route for "/"
                    element: <Home/>
                },
                {
                    path: "contactus",
                    element: ( <Suspense fallback={<div>Loading...</div>}>
                        <Contactus/>
                    </Suspense> )
                },
                {
                    path: "menu",
                    element: ( <Suspense fallback={<div>Loading...</div>}>
                        <Menu/>
                    </Suspense> )
                },
                {
                    path: "Cart",
                    element: ( <Suspense fallback={<div>Loading...</div>}>
                        <Cart/>
                    </Suspense> )
                },
                {
                    path: "aboutus",
                    element:( <Suspense fallback={<div>Loading...</div>}>
                        <Aboutus/>
                    </Suspense> )

                },
                {
                    path: "adminLogin",
                    element: ( <Suspense fallback={<div>Loading...</div>}>
                        <AdminLogin/>
                    </Suspense> )
                }
            ]
        }
    ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
)

