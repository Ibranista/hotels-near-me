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
          {isTruncated ? " ...read more" : "...read less"}
        </span>
      )}
    </p>
  );
}

function Card(props) {
  // console.log(props);
  const { name, imgUrl, star } = props;
  return (
    <>
      {/* use readmorereadless component here */}

      <div
        className="card-wrapper relative z-[800] pb-3  w-[250px] sm:w-[300px]  items-center top-20 text-black hover:text-white font-Inter leading-8 hover:bg-slate-800
      border-b-2 border-white hover:border-blue-900 border-4 hover:shadow-2xl  h-[460px] rounded-lg
      overflow-auto scroll-smooth scroll-p-1 transition-all duration-200 cursor-pointer ease-linear
      hover:scale-105
      "
        title={name}
      >
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <Image
            src={imgUrl}
            alt={name}
            height={160}
            width={300}
            className="relative"
          />
          <div
            className="image-cover absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-100 transition duration-300 ease-in-out"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </div>
        <div className="box-wrapper px-5 pt-3">
          <h1 className="font-bold text-2xl mb-2">{name}</h1>

          <h3 className="font-semibold">
            A {star} ⭐ {name}
          </h3>
          <div className="text-left">
            <ReadMoreReadLess maxCharCount={100}>
              {`
              ${name} is a ${props.categories[0].name} and is located at
              ${props.location.address} in ${props.location.country} around
              ${props.location.dma}. neightborhood: ${
                props.location.neighborhood
              }
              ${
                Object.keys(props.related_places).length > 0
                  ? `includes:${props.related_places.parent.name}}`
                  : ""
              }`}
            </ReadMoreReadLess>
          </div>
        </div>
        <Link href={props.href}>
          <div className="button-wrapper flex gap-5 justify-start ml-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              className="text-[#D9D9D9] bg-black px-2 rounded-sm 
              hover:shadow-blue-900 hover:border-blue-800 hover:text-black 
              hover:bg-white
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
                hover:shadow-blue-900 hover:border-blue-800 hover:text-black 
                hover:bg-white
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
