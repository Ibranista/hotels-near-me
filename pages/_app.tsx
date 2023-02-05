import "../styles/globals.css";
import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion } from "framer-motion";
import { createContext } from "react";
const storeContext = createContext({});

config.autoAddCss = false;
// importing components
import NavBar from "../components/NavBar";
import { LoaderExample } from "../components/loading";

const ACTION_TYPES = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORES: "SET_COFFEE_STORES",
};

interface SetLatLongAction {
  type: "SET_LAT_LONG";
  payload: {
    latLong: any;
  };
}

interface SetCoffeeStoresAction {
  type: "SET_COFFEE_STORES";
  payload: {
    places: any;
  };
}

type Action = SetLatLongAction | SetCoffeeStoresAction;

const storeReducer = (state: any, action: Action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG: {
      return {
        ...state,
        latLong: action.payload.latLong,
      };
    }
    case ACTION_TYPES.SET_COFFEE_STORES: {
      return {
        ...state,
        places: action.payload.places,
      };
    }
    default:
      throw new Error("Action type not found");
  }
};

const StoreProvider = ({ children }) => {
  interface states {
    latLong: string;
    places: any[];
  }
  const initialState: states = {
    latLong: "",
    places: [],
  };

  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    // storeContext.Provider allows the children to access the store and change it.
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true);
    };

    const handleComplete = (url: string) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);
  if (loading) {
    return <LoaderExample />;
  }
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-w-[270px] whole-container scroll-smooth h-screen overflow-auto"
    >
      <StoreProvider>
        <NavBar />
        <Component {...pageProps} />
      </StoreProvider>
    </motion.div>
  );
}
