import React from 'react'
import MiniTractor1 from '../../assets/Mahindra JIVO 245 DI.jpeg'
import MiniTractor2 from '../../assets/John Deere 3028 EN.jpg'
import MiniTractor3 from '../../assets/Swaraj 724 XM.png'

const MiniTractor = () => {
    return (
        <div className="flex flex-col m-10 gap-10">
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={MiniTractor1}
                    alt="Mini Tractor"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Mahindra JIVO 245 DI</p>
                    <p>24 HP, 1366 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹3.5 lakhs</p>
                    <p>A compact and versatile mini tractor suitable for small farms.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={MiniTractor2}
                    alt="Mini Tractor"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>John Deere 3028 EN</p>
                    <p>28 HP, 1865 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹4 lakhs</p>
                    <p>High performance and fuel efficiency for all your farming needs.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={MiniTractor3}
                    alt="Mini Tractor"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Swaraj 724 XM</p>
                    <p>25 HP, 1824 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹3.8 lakhs</p>
                    <p>Perfect for orchard and vineyard operations with a narrow design.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniTractor