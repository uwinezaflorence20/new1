
import React from 'react'


const Footer = () => {
  return (
    <div className="pt-32">
    <div className="bg-slate-200 py-4 px-20 flex flex-col md:flex-row justify-between items-center ">
      <div className="md:mb-0 mb-4">
        <p>
          <a href="" className="text-3xl text-blue-500 font-bold">
            Logoipsum
            <i className="fa-solid fa-l"></i>
          </a>
        </p>
      </div>
      <div className="md:px-12 md:py-0 py-4">
        <p className="text-center md:text-left">Copyright &copy; 2024. All rights reserved.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer


