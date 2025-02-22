import { Link } from "react-router-dom"; 
import { ArrowUpRight } from "lucide-react"; 
import { HoverBorderGradient } from "./hover-border-gradient"; 

const SignUpButtonC = () => {
    return (
      <div className="flex justify-center items-center md:w-full z-5 relative">
        <HoverBorderGradient
          containerClassName="rounded-3xl"
          className="bg-white text-black dark:bg-black dark:text-white flex items-center relative"
          duration={1}
        >
          <Link
            to="/?sign-in=true"
            className="inline-flex gap-x-2 justify-start items-center py-1 px-5 w-full"
          >
            <span className="relative z-10">Get Started</span>
            <div className="relative flex overflow-hidden items-center ml-1 w-5 h-5 z-10">
              <ArrowUpRight className="absolute transition-transform duration-500 transform group-hover:translate-x-4 group-hover:-translate-y-5" />
              <ArrowUpRight className="absolute transition-transform duration-500 transform -translate-x-4 -translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>
        </HoverBorderGradient>
      </div>
    );
  };

export default SignUpButtonC;
