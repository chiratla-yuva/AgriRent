import React from 'react'
import Tractor1 from '../../assets/Mahindra 575 DI XP PLUS Tractor.jpg'
import Tractor2 from '../../assets/Tractor2.jpg'
import Tractor3 from '../../assets/Tractor3.jpg'
const Tractor = () => {
    return (
        <div className="flex flex-col m-10 gap-10" id='tractors'>
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Tractor1}
                    alt="Tractors machine"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Mahindra 575 DI XP PLUS</p>
                    <p>47 HP, 2978 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹4.5 lakhs</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Tractor2}
                    alt="Tractors machine"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Holland 3630 TX</p>
                    <p>55 HP, 2979 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹6 lakhs</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={Tractor3}
                    alt="Tractors machine"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Sonalika DI 60</p>
                    <p>	60 HP, 2780 CC</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹7.5 lakhs</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tractor