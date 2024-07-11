import React, { useRef } from "react";
import foodItems from "./menudata";
import menuimg from "../assets/menupic/—Pngtree—chicken biryani halal food_14674148.png";
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from '../redux/slice/cartSlice';

export default function Menu() {
    const count = useSelector((state) => state.cart.cartvalue);
    const dispatch = useDispatch();
    const menuSectionRef = useRef(null);

    const handleViewMoreClick = () => {
        if (menuSectionRef.current) {
            menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Menu page */}
            <div>
                <div className="flex flex-col items-center pt-8">
                    <p className="text-3xl py-2">Our Top Menu</p>
                    <p className="text-xl">Click on any item below to add it to your cart</p>
                    <button
                        onClick={handleViewMoreClick}
                        className="py-[10px] px-[30px] border-[2px] border-[#98c3ed] text-[#98c3ed] shadow-lg font-medium my-8 active:bg-[#98c3ed] active:font-medium active:shadow-lg active:text-[#ffffff]"
                    >
                        View More
                    </button>
                </div>
                <div ref={menuSectionRef}>
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {foodItems.map((food) => (
                                <div key={food.id} className="border rounded-lg p-4 shadow-lg bg-[#E0EBFD]">
                                    <img src={menuimg} alt={`${food.name}`} />
                                    <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
                                    <p className="text-gray-700 mb-2">{food.description}</p>
                                    <p className="text-gray-900 font-bold">${food.price}</p>
                                    <button
                                        onClick={() => {
                                            dispatch(addtocart({ id: food.id, name: food.name, desc: food.description, price: food.price }));
                                        }}
                                        className="mt-4 py-2 px-4 bg-[#98c3ed] text-white rounded-lg hover:bg-blue-600 active:bg-[#98c3ed]"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
