import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
export default function Header() {
    const options = [
        { label: "Home", path: "/" },
        { label: "Menu", path: "/menu" },
        { label: "About Us", path: "/aboutus" },
    ];
    const totlquantity = useSelector((state) => state.cart.totalquantity)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };
    return (
        <>
            <div className=" shadow ">
                <div className="list-none px-3 sm:px-0 flex justify-between sm:justify-around text-lg h-[4rem]">


                    <div className="block sm:hidden content-center">
                        <div onClick={toggleMenu} className='content-center bg-[#98c3ed] h-[40px] w-[40px] flex flex-col justify-center items-center cursor-pointer rounded'>
                            <div className='px-3 my-0.5 py-[1px]  bg-[#ffffff]'></div>
                            <div className='px-3 my-0.5 py-[1px]  bg-[#ffffff]'></div>
                            <div className='px-3 my-0.5 py-[1px]  bg-[#ffffff]'></div>
                        </div>
                    </div>


                    <div className="hidden sm:block content-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700  font-bold')}
                        >
                            <p className="text-4xl font-black text-[#98C3ED] font-serif content-center">Food X</p>
                        </NavLink>
                    </div>
                    <div className="hidden sm:block content-center ">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700  font-bold')}
                        >
                            Home
                        </NavLink>
                    </div >

                    <div className="hidden sm:block content-center ">
                        <NavLink
                            to="/menu"
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700 font-bold')}
                        >
                            Menu
                        </NavLink>
                    </div>

                    <div className="hidden sm:block content-center ">
                        <NavLink
                            to="/aboutus"
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700 font-bold')}
                        >
                            About Us
                        </NavLink>
                    </div>
                    <div className=" content-center ">
                        <NavLink
                            to="/Cart"
                            className={({ isActive }) => (isActive ? 'text-[#ffffff] bg-[#98c3ed] font-bold rounded-[30px] px-6 py-[10px] border-[2px] border border-[#98c3ed]' : 'rounded-[30px] text-black font-bold px-6 py-[10px] border-[2px] border-[#98c3ed]')}
                        >
                            {/*<button className="rounded-[30px] active:bg-[#98c3ed]px-4 py-1   ">Cart 0</button>*/}
                            cart {totlquantity}
                        </NavLink>
                    </div>

                </div>
            </div>


            {isOpen && (
                <div className="absolute left-5 top-16 bg-[#ffffff] border border-[#98c3ed] rounded-md shadow-lg mt-2 w-48 z-10">
                    {options.map((option, index) => (
                        <NavLink
                            key={index}
                            to={option.path}
                            className={({ isActive }) => (isActive ? 'text-[#98C3ED] font-bold' : 'text-gray-700 font-bold')}
                        >
                            <div

                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                {option.label}
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    )
}