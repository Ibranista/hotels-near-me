import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Banner(props) {
  return (
    <>
      <section className="banner-wrapper text-white h-screen">
        <div className="absolute bg-black opacity-70 inset-0 z-20 text-white"></div>
        <div className="relative z-50 text-white container m-auto pt-10 px-3 sm:pb-5 lg:pt-16">
          <h1 className="font-Irish mb-5 text-center text-2xl tracking-wider sm:text-left lg:text-4xl">
            Find Your Best Accomodation
          </h1>
          <p className="text-gray-300 leading-8 mb-5 sm:w-2/3 sm:pt-5 lg:w-1/2 lg:text-2xl lg:leading-loose">
            Trying to find the best hotels near you? Our website makes it easy
            to compare rates and availability at a variety of hotels in your
            area.
          </p>
          <motion.button
            className="bg-[#2C3A50] rounded-md px-3 py-5 sm:px-5 hover:bg-blue-900 active:bg-[#2C3A50]"
            onClick={props.handleOnClick}
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            {props.buttonText}
          </motion.button>
        </div>
      </section>
    </>
  );
}

export default Banner;
