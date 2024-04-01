
import React, { useState } from "react";
import NavBar from "./NavBar";
import { FaBars } from 'react-icons/fa';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
const searchcountry = async term =>{
  if(term.lenght < 3 || term ==='') return 
  const res = await fetch('https://restcountries.eu/rest/v2/name/${term}')
  const data =await res.json()
  await setCountries(data);
}

  return (
    <div className="pb-20 pt-16 min-w-screen bg-cover text-white bg-[url('https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg')]">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div>
          <p>
            <a href="" className="text-3xl text-blue-500 font-bold">
              Logoipsum
            
            </a>
          </p>
        </div>
        <div className="lg:hidden">
          <FaBars className="text-3xl text-blue-500 cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className={`lg:flex ${showMenu ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Countries</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center pb-8 pt-8">Country API App</h1>
        <p className="text-xl text-center">
          This is a simple app that allows you to search for countries and
          continents using the API.
        </p>
        <div className="flex justify-center pt-12 container mx-auto mb-16"> 
          <input 
            type="text"
            className="w-full lg:px-48 sm:w-auto px-12 py-3  text-black focus:outline-none focus:border-blue-500"
            placeholder="Search country by name..."
          onChange={(term) => searchcountry(term.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

