import {NavLink} from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
export default function Header()

{
    const totlquantity = useSelector((state) => state.cart.totalquantity)
    return (
        <>
            <div className=" shadow  ">
                <ul className="list-none flex justify-around text-lg h-[4rem]">
                    <li className="content-center">
                        {/*<img src={Icon} alt="Logo" className="h-14 w-14" />*/}
                        <p className="text-4xl font-black text-[#98C3ED] font-serif content-center">Food X</p>
                    </li>
                    <li className="content-center ">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700  font-bold')}
                        >
                            Home
                        </NavLink>
                    </li >

                      <li className="content-center ">
                      <NavLink
                      to="/menu"
                      className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700 font-bold')}
                      >
                      Menu
                      </NavLink>
                      </li>

                    <li className="content-center ">
                        <NavLink
                            to="/aboutus"
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700 font-bold')}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="content-center ">
                        <NavLink
                            to="/Cart"
                            className={({ isActive }) => (isActive ? 'text-[#ffffff] bg-[#98c3ed] font-bold rounded-[30px] px-6 py-[10px] border-[2px] border border-[#98c3ed]' : 'rounded-[30px] text-black font-bold px-6 py-[10px] border-[2px] border-[#98c3ed]')}
                        >
                            {/*<button className="rounded-[30px] active:bg-[#98c3ed]px-4 py-1   ">Cart 0</button>*/}
                            cart {totlquantity}
                        </NavLink>
                    </li>

                </ul>
            </div>
        </>
    )
}