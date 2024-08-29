import React from 'react'
import Drone1 from '../../assets/DJI Agras T16.jpg'
import Drone2 from '../../assets/Yamaha RMAX.png'
import Drone3 from '../../assets/Krishi Drone X1.jpg'

const Drones = () => {
    return (
        <div className="flex flex-col m-10 gap-10">
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Drone1}
                    alt="Agriculture Drone"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>DJI Agras T16</p>
                    <p>16L Payload, 4 Nozzles</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹10 lakhs</p>
                    <p>High-efficiency drone for large-scale crop spraying.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Drone2}
                    alt="Agriculture Drone"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Yamaha RMAX</p>
                    <p>20L Payload, 8 Nozzles</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹12 lakhs</p>
                    <p>Advanced drone for precise and efficient aerial spraying.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Drone3}
                    alt="Agriculture Drone"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Krishi Drone X1</p>
                    <p>18L Payload, 6 Nozzles</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹9 lakhs</p>
                    <p>Cost-effective drone for small to medium-scale farming.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Drones