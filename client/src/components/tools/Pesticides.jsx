import React from 'react'
import pest1 from '../../assets/Bayer Confidor.jpeg'
import pest2 from '../../assets/Syngenta Karate.png'
import pest3 from '../../assets/UPL Saaf.png'

const Pesticides = () => {
    return (
        <div className="flex flex-col m-10 gap-10">
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={pest1}
                    alt="Pesticide"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Bayer Confidor</p>
                    <p>100 ml, Imidacloprid 17.8% SL</p>
                    <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                        for EMI Click Here
                    </a>
                    <p>₹600</p>
                    <p>Effective insecticide for controlling a wide range of pests.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={pest2}
                    alt="Pesticide"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Syngenta Karate</p>
                    <p>250 ml, Lambda-cyhalothrin 5% EC</p>
                    <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                        for EMI Click Here
                    </a>
                    <p>₹750</p>
                    <p>Broad-spectrum insecticide for effective crop protection.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={pest3}
                    alt="Pesticide"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>UPL Saaf</p>
                    <p>500 g, Carbendazim 12% + Mancozeb 63%</p>
                    <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                        for EMI Click Here
                    </a>
                    <p>₹950</p>
                    <p>Systemic fungicide for controlling fungal diseases in crops.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pesticides