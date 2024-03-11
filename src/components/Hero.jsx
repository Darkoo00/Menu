import React from "react";

export const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 h-[100vh]  w-full">
      <div className="max-h-[500px] relative ">
        <div className="absolute w-full h-[100vh] text-gray-100    bg-[url('https://images.pexels.com/photos/18714960/pexels-photo-18714960/free-photo-of-two-cups-of-coffee-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-no-repeat bg-cover  flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
