import React from "react"
import bannerimg from "../assets/8270043_3852165.svg"
import pic2 from "../assets/pic2 (1).jpg"
import pic3 from "../assets/pic3.svg"
import pic4 from "../assets/pic4.jpg"
export default function Home()
{
    return (
        <>

<div>
            {/*Section 1*/}
            <div className="flex">
                <div className="w-[50%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={bannerimg} className="h-[400px] w-[400px]" />
                    </div>
                </div>
                <div className="w-[50%] flex items-center justify-center text-center">

                    <div><p className="text-4xl font-black text-[#98C3ED] font-serif ">Food X</p>
                        <div className="p-4 px-16">
                    <p className="text-xl font-[400]">Hungry for Something Special? Get Fresh, Hot Meals Delivered with a Few Clicks!</p>
                        </div>
                    </div>
                </div>
            </div>
    <div className="bg-[#98c3ed] h-[5px]"></div>
    {/*Section 1*/}
    {/*Section 2*/}
    <div className="flex">

        <div className="w-[50%] flex items-center justify-center text-center">

            <div><p className="text-4xl font-black text-[#98C3ED] font-serif ">Coffee</p>
                <div className="p-4 px-16">
                    <p className="text-xl font-[400]">Awaken Your Senses with Our Masterfully Brewed Coffee.  Every Cup Tells a Story of Flavor, Aroma, and Passion!</p>
                </div>
            </div>
        </div>
        <div className="w-[50%] h-[90vh] flex items-center justify-center">
            <div>
                <img src={pic4} className="h-[400px] w-[600px]" />
            </div>
        </div>
    </div>
    <div className="bg-[#98c3ed] h-[5px]"></div>
    {/*Section 2*/}
    {/*Section 3*/}
    <div className="h-[90vh]">
        <div className="  flex items-center justify-center">
            <div>
                <img src={pic3} className="h-[400px] w-[800px]" />
            </div>
        </div>
        <div className=" flex items-center justify-center text-center">

            <div><p className="text-4xl font-black text-[#98C3ED] font-serif ">Dine IN</p>
                <div className="p-4 px-16">
                    <p className="text-xl font-normal">Experience the Perfect Blend of Ambiance and Flavor – Join Us for an Unforgettable Dine-In Adventure!</p>
                </div>
            </div>
        </div>
    </div>
    {/*Section 3*/}
</div>
        </>
    )
}

