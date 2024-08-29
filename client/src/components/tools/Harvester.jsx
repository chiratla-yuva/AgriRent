import React from 'react'
import Harvestor1 from '../../assets/Mahindra Arjun 605.jpg'
import Harvestor2 from '../../assets/John Deere W70.png'
import Harvestor3 from '../../assets/Swaraj 735 FE.png'

const Harvester = () => {
    return (
        <div className="flex flex-col m-10 gap-10">
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Harvestor1}
                    alt="Harvester"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Mahindra Arjun 605</p>
                    <p>57 HP, 3531 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹7.5 lakhs</p>
                    <p>A powerful harvester designed for efficient crop cutting and threshing.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Harvestor2}
                    alt="Harvester"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>John Deere W70</p>
                    <p>75 HP, 4100 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹12 lakhs</p>
                    <p>High-efficiency multi-crop harvester suitable for large-scale farming.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Harvestor3}
                    alt="Harvester"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Swaraj 735 FE</p>
                    <p>40 HP, 2734 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹6 lakhs</p>
                    <p>Ideal for small farms, offering reliable performance and easy handling.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Harvester