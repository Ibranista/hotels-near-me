import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { faMinus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoaderExample = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setIsLoading(!isLoading);
  };
  return (
    <Loader className="bg-slate-800">
      <FontAwesomeIcon
        icon={faSpinner}
        className="animate-spin text-9xl text-slate-500"
      />
      <div className="bg-cover"></div>
      <svg
        width="40"
        viewBox="0 0 150 150"
        className=" absolute top-[46%] left-[48%] sm:left-[49%] s-1j8o68f"
      >
        <defs id="SvgjsDefs1648">
          <linearGradient id="SvgjsLinearGradient1653">
            <stop id="SvgjsStop1654" stopColor="#ffffff" offset="0"></stop>
            <stop id="SvgjsStop1655" stopColor="#000080" offset="1"></stop>
          </linearGradient>
        </defs>
        <g
          id="SvgjsG1649"
          featurekey="HKaMnE-0"
          transform="matrix(1.5258386464147962,0,0,1.5258386464147962,-25.562550737149277,-0.6291932320739804)"
          fill="url(#SvgjsLinearGradient1653)"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M 49.8125,5 C 30.557522,5 20.517578,19.999185 20.6875,35 20.923435,56.834371 42.517389,65.00326 49.78125,95 57.061004,64.99837 78.9375,56.355166 78.9375,35 78.9375,19.999185 67.632309,5 49.8125,5 z m 0,3.28125 1.21875,3.78125 3.96875,0 c -1.00819,0.731827 -2.15756,1.54445 -3.21875,2.3125 0.41723,1.285897 0.81896,2.558407 1.21875,3.78125 -1.05246,-0.764026 -2.06567,-1.47536 -3.21875,-2.3125 -1.09137,0.792198 -2.15785,1.560549 -3.1875,2.3125 0.38436,-1.183267 0.8156,-2.536271 1.21875,-3.78125 -1.03167,-0.748597 -2.14214,-1.530364 -3.21875,-2.3125 1.24632,-7e-4 2.6587,-0.0027 3.96875,0 0.41723,-1.282542 0.8549,-2.5664569 1.25,-3.78125 z m -12.625,4.46875 1.09375,3.34375 3.53125,0 c -0.89215,0.647309 -1.90465,1.382323 -2.84375,2.0625 0.36893,1.138324 0.709,2.261773 1.0625,3.34375 -0.93105,-0.676151 -1.82281,-1.321953 -2.84375,-2.0625 -0.96593,0.700971 -1.93215,1.39708 -2.84375,2.0625 0.34009,-1.047096 0.73689,-2.241648 1.09375,-3.34375 -0.91294,-0.662065 -1.89123,-1.370247 -2.84375,-2.0625 1.10278,0 2.34021,-0.002 3.5,0 0.36893,-1.13564 0.74427,-2.268479 1.09375,-3.34375 z m 25.21875,0 1.09375,3.34375 3.5,0 c -0.89215,0.647309 -1.90465,1.382323 -2.84375,2.0625 0.36894,1.138324 0.74024,2.261773 1.09375,3.34375 -0.93106,-0.676151 -1.82281,-1.321953 -2.84375,-2.0625 -0.96593,0.700971 -1.93215,1.39708 -2.84375,2.0625 0.34009,-1.047096 0.70564,-2.241648 1.0625,-3.34375 -0.91294,-0.662065 -1.89124,-1.370247 -2.84375,-2.0625 1.10277,0 2.37146,-0.002 3.53125,0 0.36893,-1.13564 0.74427,-2.268479 1.09375,-3.34375 z m -32.4375,10.03125 1,3.125 3.28125,0 c -0.8311,0.603036 -1.78221,1.304278 -2.65625,1.9375 0.34344,1.059843 0.70189,2.086229 1.03125,3.09375 -0.86733,-0.629868 -1.70575,-1.216682 -2.65625,-1.90625 -0.89953,0.652676 -1.80771,1.287113 -2.65625,1.90625 0.31728,-0.974653 0.66797,-2.067447 1,-3.09375 -0.84988,-0.616452 -1.73822,-1.292874 -2.625,-1.9375 1.02697,0 2.17003,-0.002 3.25,0 0.34344,-1.057158 0.70524,-2.124188 1.03125,-3.125 z m 39.65625,0 1.03125,3.125 3.25,0 c -0.8311,0.603036 -1.78221,1.304278 -2.65625,1.9375 0.34345,1.059843 0.70189,2.086229 1.03125,3.09375 -0.86733,-0.629868 -1.70575,-1.216682 -2.65625,-1.90625 -0.89953,0.652676 -1.80771,1.287113 -2.65625,1.90625 0.31728,-0.974653 0.69922,-2.067447 1.03125,-3.09375 -0.84988,-0.616452 -1.76947,-1.292874 -2.65625,-1.9375 1.02697,0 2.20128,-0.002 3.28125,0 0.34344,-1.057158 0.67399,-2.124188 1,-3.125 z m -19.8125,1.575 3.90625,12.09375 12.71875,0 c -3.22731,2.342643 -6.88431,5.041405 -10.28125,7.5 1.33559,4.116267 2.65774,8.179316 3.9375,12.09375 C 56.72472,53.598037 53.47236,51.254763 49.78125,48.575 46.28768,51.110898 42.79602,53.636689 39.5,56.04375 40.73037,52.256009 42.14701,47.935284 43.4375,43.95 c -3.30246,-2.396325 -6.83492,-4.996315 -10.28125,-7.5 3.98958,-0.0019 8.52518,-0.0086 12.71875,0 1.33559,-4.105529 2.67277,-8.20509 3.9375,-12.09375 z"
          ></path>
        </g>
      </svg>
      <span className="animate-pulse hover:text-gray-500 self-center whitespace-nowrap text-xl font-semibold  text-white">
        Loading ...
      </span>
    </Loader>
  );
};
