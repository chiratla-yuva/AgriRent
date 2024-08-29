import React from 'react'
import MiniHarvestor1 from '../../assets/Mahindra Mini Harvester 1010.jpg'
import MiniHarvestor2 from '../../assets/John Deere Mini Harvester 20T.jpg'
import MiniHarvestor3 from '../../assets/Swaraj Mini Harvester 850.png'

const MiniHarvestor = () => {
    return (
        <div className="flex flex-col m-10 gap-10">
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={MiniHarvestor1}
                    alt="Mini Harvester"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Mahindra Mini Harvester 1010</p>
                    <p>20 HP, 1200 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹5 lakhs</p>
                    <p>Compact and efficient for small farms and tight spaces.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={MiniHarvestor2}
                    alt="Mini Harvester"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>John Deere Mini Harvester 20T</p>
                    <p>22 HP, 1300 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹6 lakhs</p>
                    <p>High-performance mini harvester for precision harvesting.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={MiniHarvestor3}
                    alt="Mini Harvester"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Swaraj Mini Harvester 850</p>
                    <p>25 HP, 1500 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹7 lakhs</p>
                    <p>Perfect for small-scale operations with easy maintenance.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniHarvestor