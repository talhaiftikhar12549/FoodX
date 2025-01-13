import React from "react"
import bannerimg from "../assets/8270043_3852165.svg"
import pic3 from "../assets/pic3.svg"
import pic4 from "../assets/pic4.jpg"
export default function Home() {
    return (
        <>


            <div>

                {/*Section 1*/}

                <div className="flex flex-col sm:flex-row p-2 h-[90vh]">
                
                    <div className="w-[100%] sm:w-[50%] flex items-center justify-center">
                        <img
                            src={bannerimg}
                            className=" lg:max-h-[400px]  h-auto object-contain"
                            alt="Banner"
                        />
                    </div>

                    <div className="w-[100%] py-10 sm:w-[50%] flex items-center justify-center text-center">
                        <div>
                            <p className="text-4xl font-black text-[#98C3ED] font-serif">Food X</p>
                            <div className="p-4 px-4">
                                <p className="text-xl font-[400]">
                                    Hungry for Something Special? Get Fresh, Hot Meals Delivered with a Few Clicks!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#98c3ed] h-[5px]"></div>

                {/*Section 1*/}


                {/*Section 2*/}

                <div className="flex flex-col-reverse sm:flex-row p-2 h-[90vh] justify-evenly items-center">

                    <div className="w-[100%] py-10 sm:w-[50%] flex items-center justify-center text-center">

                        <div><p className="text-4xl font-black text-[#98C3ED] font-serif ">Coffee</p>
                            <div className="p-4 px-4">
                                <p className="text-xl font-[400]">Awaken Your Senses with Our Masterfully Brewed Coffee.  Every Cup Tells a Story of Flavor, Aroma, and Passion!</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[100%] sm:w-[50%] flex items-center justify-center">
                        <div>
                            <img src={pic4} className=" lg:max-h-[400px]  h-auto object-contain"
                                alt="Banner" />
                        </div>
                    </div>

                </div>
                <div className="bg-[#98c3ed] h-[5px]"></div>

                {/*Section 2*/}


                {/*Section 3*/}

                <div className="h-[65vh] flex flex-col items-center justify-center">
                    <div className="w-full flex items-center justify-center">
                        <img
                            src={pic3}
                            className="lg:max-h-[400px] h-auto object-contain"
                            alt="Banner"
                        />
                    </div>

                    <div className="flex items-center justify-center text-center">
                        <div>
                            <p className="text-4xl font-black text-[#98C3ED] font-serif">Dine IN</p>
                            <div className="p-4 px-4">
                                <p className="text-xl font-normal">
                                    Experience the Perfect Blend of Ambiance and Flavor – Join Us for an Unforgettable Dine-In Adventure!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Section 3*/}

            </div>
        </>
    )
}

