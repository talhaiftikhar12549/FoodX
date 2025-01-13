import pic5 from "../assets/dilivery pic.svg"
import pic7 from "../assets/42106263_8979553.svg";
import popUpImage from "/Foodx-Logo.png"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library

// Import your custom icon image
//
//
// // Fixing the default icon issue
// import L from 'leaflet';
// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

export default function Aboutus() {

    const [loading, setLoading] = useState(false);

    return (
        <>
            <section className="flex flex-row h-[80vh] sm:h-[90vh]">

                <div className="w-[100%] sm:w-[50%] flex flex-col items-center justify-center text-center">
                    <h2 className="w-[80%] py-4 text-3xl font-semibold text-left text-[#98C3ED] font-serif">locaiton</h2>
                    <div className="mx-auto p-4  rounded-lg shadow-lg w-[80%] sm:h-[80%] h-[50%]">
                        {(<MapContainer center={[33.667617, 73.058385]} zoom={14} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[33.667617, 73.058385]}>
                                <Popup className="text-md color-[#98c3ed]"> <img src={popUpImage} alt="" /></Popup>
                                {/* <Popup className="text-md color-[#98c3ed]"> <span className="text-md font-bold color-[#98c3ed]">Food X</span></Popup> */}
                            </Marker>
                        </MapContainer>
                        )}
                        {loading && <p>Loading map...</p>}
                    </div>
                </div>
                <div className="w-[0%] sm:w-[50%] h-[90vh] flex items-center justify-center">
                    <div>
                        <img src={pic5} alt="Delivery" className="h-[400px] w-[600px]" />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <div className="bg-[#98c3ed] h-[5px] w-[100%]">&nbsp;</div>
                <div className="flex justify-center vh-[90%]">
                    <div className="w-[100%] flex justify-center">
                        <div>
                            <img src={pic7} alt="Banner" className="h-[400px] w-[800px]" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center text-center py-10 px-16">
                    <p className="text-xl font-normal">
                        <span className="font-medium"> Welcome to <span className="text-[#98C3ED] text-lg font-serif">Food X</span>, your ultimate destination for delicious and convenient food ordering from local restaurants.</span>
                        Enjoy a curated selection of dishes delivered right to your doorstep—your next great meal is just a click away!
                    </p>
                </div>
            </section>
        </>
    );
}
