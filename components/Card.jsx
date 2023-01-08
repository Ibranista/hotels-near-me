import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import framermotion
import { motion } from "framer-motion";
import { autoPlacement } from "@floating-ui/core";
import { useEffect } from "react";

// create readmorereadless component
function ReadMoreReadLess({ children, maxCharCount = 100 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxCharCount) : text;
  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  useEffect(() => {
    setIsTruncated(true);
  }, []);

  return (
    <p>
      {resultString}
      {text.length > maxCharCount && (
        <span
          onClick={toggleIsTruncated}
          className="text-blue-500 hover:cursor-pointer"
        >
          {isTruncated ? " ...read more" : " read less"}
        </span>
      )}
    </p>
  );
}

function Card(props) {
  return (
    <>
      {/* use readmorereadless component here */}

      <div
        className="relative z-[800] pb-3  w-[250px] sm:w-[300px]  items-center top-20 text-black hover:text-white font-Inter leading-8 hover:bg-slate-800
      border-b-2 border-white hover:border-blue-900 border-4 hover:shadow-2xl  h-[460px] rounded-lg
      overflow-auto scroll-smooth scroll-p-1 transition-all duration-300 cursor-pointer ease-linear
      "
      >
        <Image
          src={props.imgUrl}
          alt={props.name}
          height={160}
          width={300}
          className="relative"
        />
        <div className="box-wrapper px-5 pt-3">
          <h1 className="font-bold text-2xl mb-2">{props.name}</h1>

          <h3 className="font-semibold">{props.star} </h3>
          <div className="text-left">
            <ReadMoreReadLess maxCharCount={100}>
              {props.description}
            </ReadMoreReadLess>
          </div>
        </div>
        <div className="button-wrapper">
          <Link href={props.href}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              className="text-[#D9D9D9] bg-black px-2 rounded-sm 
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
              className="text-[#D9D9D9] bg-black px-2 rounded-sm
                hover:shadow-blue-900 hover:border-blue-800 hover:text-white hover:bg-[#2C3A50]
                shadow-lg
                border-b-2
                "
            >
              $150 per day
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
