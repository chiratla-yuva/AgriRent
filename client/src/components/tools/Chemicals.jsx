import React from 'react'
import chem1 from '../../assets/BASF AgCelence.jpg'
import chem2 from '../../assets/Bayer Raxil Easy.jpeg'
import chem3 from '../../assets/Syngenta Actara.jpg'

const Chemicals = () => {
    return (
        <div className="flex flex-col m-10 gap-10">
            {/* First Row */}
            <div className="flex items-center gap-6">
                <img
                    src={chem1}
                    alt="Agricultural Chemical"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>BASF AgCelence</p>
                    <p>1 L, Pyraclostrobin</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹1,200</p>
                    <p>Enhances plant health and yields with advanced crop protection.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex items-center gap-6">
                <img
                    src={chem2}
                    alt="Agricultural Chemical"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Bayer Raxil Easy</p>
                    <p>500 ml, Tebuconazole 2% DS</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹900</p>
                    <p>Protects seeds from fungal infections during germination.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="flex items-center gap-6">
                <img
                    src={chem3}
                    alt="Agricultural Chemical"
                    className="w-48 h-48"
                />
                <div className="space-y-2">
                    <p>Syngenta Actara</p>
                    <p>250 g, Thiamethoxam 25% WG</p>
                    <p>
                        <a href="https://example.com/emi" className="text-blue-500 cursor-pointer">
                            for EMI Click Here
                        </a>
                    </p>
                    <p>₹850</p>
                    <p>Insecticide for effective control of various sucking pests.</p>
                    <div className="flex gap-4 mt-4">
                        <button className="bg-blue-600 w-20 h-8 text-white">Buy</button>
                        <button className="bg-blue-600 w-20 h-8 text-white">Rent</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Chemicals