import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Ensure you are using react-router-dom for Link
import { HashLink } from "react-router-hash-link"; // Import HashLink
import { ArrowUpRight } from "lucide-react"; // Make sure lucide-react is installed

export const SlideNavTabs = () => {
  return (
    <div className="fixed right-0 left-0 top-0 z-40 mx-auto text-white bg-transparent hidden md:block">
      {" "}
      {/* Hide on mobile */}
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
      }}
      className="flex relative items-center py-3 px-5 mx-auto mt-14 text-sm text-gray-200 bg-gradient-to-tr to-transparent rounded-full border-2 w-fit border-white/5 from-zinc-300/5 via-gray-400/5 shadow-lg backdrop-blur-lg"
    >
      <Tab setPosition={setPosition}>
        <HashLink className="w-full h-full" to="#home">
          Home
        </HashLink>
      </Tab>
      <Tab setPosition={setPosition}>
        <Link className="w-full h-full" to="#">
          Features
        </Link>
      </Tab>
      <Tab setPosition={setPosition}>
        <HashLink className="w-full h-full" to="#pricing">
          Pricing
        </HashLink>{" "}
        {/* Use HashLink */}
      </Tab>
      <Tab setPosition={setPosition}>
        <Link className="w-full h-full" to="#">
          Contact Us
        </Link>
      </Tab>

      <Link
        to="/signup"
        className="inline-flex gap-x-2 justify-start items-start py-3 px-5 ml-3 w-full rounded-3xl border duration-200 sm:w-auto group bg-page-gradient border-white/30 text-md font-geistSans hover:border-zinc-600 hover:bg-transparent/10 hover:text-zinc-100"
      >
        Try Now
        <div className="flex overflow-hidden relative justify-center items-center ml-1 w-5 h-5">
          <ArrowUpRight className="absolute transition-all duration-500 group-hover:translate-x-4 group-hover:-translate-y-5" />
          <ArrowUpRight className="absolute transition-all duration-500 -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
        <span className="absolute  inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </Link>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="block relative z-40 py-2.5 px-3 text-xs text-white cursor-pointer md:py-2 md:px-5 md:text-base lg:text-lg"
    >
      {children}
    </li>
  );
};

// Cursor component
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 bg-glass-gradient bg-transparent rounded-full md:h-10 shadow-lg backdrop-blur-lg"
    />
  );
};
