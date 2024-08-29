import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

//images
import Tractor1 from '../assets/Mahindra 575 DI XP PLUS Tractor.jpg'
import MiniTractor1 from '../assets/Mahindra JIVO 245 DI.jpeg'
import Drone1 from '../assets/DJI Agras T16.jpg'
import Harvestor1 from '../assets/Mahindra Arjun 605.jpg'
import MiniHarvestor1 from '../assets/Mahindra Mini Harvester 1010.jpg'
import pest1 from '../assets/Bayer Confidor.jpeg'
import chem1 from '../assets/BASF AgCelence.jpg'

const Header = () => {
    return (
        <header>
            <div className="overflow-x-auto hide-scrollbar">
                <nav className="flex items-center py-2 justify-evenly flex-wrap bg-green-200 gap-4 shadow-lg h-30 min-w-max">
                    <div className="flex flex-col items-center">
                        <img
                            src={Tractor1}
                            alt="Tractors"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/tractors" className="text-blue-700 font-semibold hover:underline">
                            Tractors
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={MiniTractor1}
                            alt="Mini Tractors"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/miniTractors" className="text-blue-700 font-semibold hover:underline">Mini Tractors</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={Drone1}
                            alt="Drones"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/drones" className="text-blue-700 font-semibold hover:underline">Drones</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={Harvestor1}
                            alt="Harvester"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/harvestor" className="text-blue-700 font-semibold hover:underline">Harvester</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={MiniHarvestor1}
                            alt="Mini Harvester"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/miniHarvestor" className="text-blue-700 font-semibold hover:underline">Mini Harvester</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={pest1}
                            alt="Pesticides"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/pesticides" className="text-blue-700 font-semibold hover:underline">Pesticides</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={chem1}
                            alt="Chemicals"
                            className="w-12 h-12 rounded-full mb-2"
                        />
                        <Link to="/chemicals" className="text-blue-700 font-semibold hover:underline">Chemicals</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
