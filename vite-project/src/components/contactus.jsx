import pic5 from "../assets/dilivery pic.svg";
import pic6 from "../assets/11522840_4757697.svg"
import React from "react";

export default function Contactus()
{
    return (
        <>
            <div className="flex vh-[90%]">

                <div className="w-[50%] flex items-center justify-center text-center">

                    <div className="w-[70%]"><p className="text-4xl font-black text-[#98C3ED] font-serif  pb-6">Delivery Address</p>

                        <form className=" mx-auto p-4 border rounded-lg shadow-lg px-12 py-12">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 item-center"
                                    required
                                />
                            </div>
                            <div className="mb-4">

                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    // value={formData.lastName}
                                    // onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">

                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"

                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                {/*<label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>*/}
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Enter your address"
                                    // value=""
                                    // onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 drop-shadow-lg active:bg-[#98c3ed]">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-[50%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={pic6} className="h-[400px] w-[600px]" />
                    </div>
                </div>
            </div>
        </>
    )
}