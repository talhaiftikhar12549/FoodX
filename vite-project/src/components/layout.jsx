import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function Layout() {
    return (
        <div className="flex flex-col justify-between h-[100vh]">
            <Header />
            <Outlet />
<Footer></Footer>
        </div>
    );
}
