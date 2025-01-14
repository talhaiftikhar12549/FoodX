import React from "react"
import { NavLink } from "react-router-dom";
import menupic from "../assets/menupic/—Pngtree—chicken biryani halal food_14674148.png"
import { useSelector, useDispatch } from 'react-redux'
import { decItem, incItem } from '../redux/slice/cartSlice'
export default function Cart() {
    const cartItem = useSelector((state) => state.cart.cartvalue)
    const totalprice = useSelector((state) => state.cart.totalprice)
    const dispatch = useDispatch()



    return (
        <div >
            <div className="flex w-[95%] sm:w-[80%] md:w-[75%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  items-center justify-center text-center mx-auto p-4 border rounded-lg shadow-lg px-0 sm:px-12 py-12 my-4 ">

                <div className="w-[95%] ">
                    <p className="text-4xl font-black text-[#98C3ED] font-serif  pb-6  ">Your Cart</p>


                    {cartItem && cartItem.map((abc) => (
                        <div className="border rounded-lg shadow-lg my-4" key={abc.id}>
                            <div className="flex ">
                                <div className="w-[33%] sm:w-[30%] flex items-center justify-center">
                                    <img src={menupic} className="h-[125px] w-[125px]  sm:h-[150px] sm:w-[150px]" />
                                </div>
                                <div id="centerwalli"
                                    className="w-[47%] sm:w-[50%] flex flex-col justify-start text-left pl-0.5 sm:pl-2 py-2 h-[90%]">
                                    <p className="font-semibold text-base sm:text-lg font-sans">{abc.name}</p>
                                    <div className="mt-8">
                                        <div className="font-semibold text-md sm:text-md">Quantity</div>
                                        <div
                                            className="py-[6px] px-10 px-[20px] border-[2px] border-[#98c3ed] text-[#98c3ed] shadow-lg font-medium my-2 flex justify-center sm:justify-between max-w-[40%]">
                                            <button onClick={() => (dispatch(decItem({ id: abc.id, name: abc.name, desc: abc.description, price: abc.price })))} className="h-[100%] px-2 sm:px-0">-</button>
                                            {abc.quantity}
                                            <button onClick={() => (dispatch(incItem({ id: abc.id, name: abc.name, desc: abc.description, price: abc.price })))} className="h-[100%] px-2 sm:px-0">+</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[20%] shadow pt-10">
                                    <p className="font-semibold text-md py-2">Price</p>
                                    <p className="font-semibold text-md">${abc.price.toFixed(2)}</p>
                                </div>

                            </div>
                        </div>
                    )
                    )


                    }


                    {

                        cartItem.length !== 0 ? <> <div className="py-4 flex justify-around text-lg font-bold border-t-4 border-slate-400 my-4"><p>Total Price</p><p>${totalprice.toFixed(2)}</p> </div> {<NavLink
                            to="/contactus"
                            className="py-[10px]  px-[30px] border-[2px] border-blue-500 bg-blue-500 shadow-lg font-medium my-8 active:bg-[#98c3ed] active:font-medium rounded-lg active:shadow-lg active:bg-[#98c3ed]"
                        >
                            Confirm Your Order
                        </NavLink>} </> : <p className="font-medium ">Your Cart is Empty</p>
                    }


                </div>
            </div>
        </div>
    )
}

