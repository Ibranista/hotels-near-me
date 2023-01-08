import React from "react";
import Image from "next/image";
import Link from "next/link";
// import framermotion
import { motion } from "framer-motion";
import { autoPlacement } from "@floating-ui/core";
function Card(props) {
  return (
    <>
      <div
        className="relative z-[800] pb-3 bg-[#2C3A50]  w-[250px] sm:w-[300px]  items-center rounded-sm top-20 text-white font-Inter leading-8 hover:bg-blue-900
      border-b-2 border-white border-4 hover:shadow-lg
      "
      >
        <Link href={props.href}>
          <Image
            src={props.imgUrl}
            alt={props.name}
            cover
            height={160}
            width={300}
            className="relative"
          />
          <div className="box-wrapper px-5 pt-3">
            <h1 className="font-bold text-2xl mb-2">Luxuria Hotel</h1>

            <h3 className="font-semibold"> An elegant 5 ⭐ hotel </h3>
            <p className="text-left">
              located in the heart of the city, With over 500 elegantly
              decorated guest rooms, a full-service spa, and several gourmet
              dining options
            </p>
          </div>
          <div className="button-wrapper flex justify-around overflow-hidden mt-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              className="bg-[#D9D9D9] px-2 ml-2 rounded-sm text-[#3E649E]
                hover:shadow-blue-900 hover:border-blue-800 hover:text-white hover:bg-[#2C3A50]
                shadow-lg
                border-b-2
                "
            >
              Details
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              className="bg-[#D9D9D9] px-2 rounded-sm text-[#3E649E]
                hover:shadow-blue-900 hover:border-blue-800 hover:text-white hover:bg-[#2C3A50]
                shadow-lg
                border-b-2
                "
            >
              $150 per day
            </motion.button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
