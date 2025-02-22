import React from "react";
import { TypewriterEffectLoop } from "../components/ui/TypewriterEffectLoop";
import SignUpButtonC from "../components/ui/SignUpButton";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "../components/ui/Animated-Gardient-Text";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../components/ui/Text-generate-Effect";
import Container from "../components/global/Container";
import Wrapper from "../components/global/Wapper";

const heroTitle = `Reimagine Personal Branding with AI-Powered Digital Personas`;

const Hero = () => {
  return (
    <Wrapper>
      {/* <div className=" absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" /> */}
      <div id="home" className="absolute opacity-10 inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-screen" />
      <Container>
        <div className=" flex flex-col items-center justify-center py-[180px] h-full">
          <button className="group relative grid overflow-hidden rounded-full shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 bg-gradient-to-tr from-primary/40">
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40" />
            <AnimatedGradientText className="bg-neutral-950">
              ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#FFAA40] via-[#9C40FF] to-[#FFAA40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Speak Without Speaking
              </span>
              <ChevronRight className="ml-2 w-4 h-4 text-white" />
            </AnimatedGradientText>
          </button>
          <div className="flex flex-col items-center mt-14 max-w-4xl w-11/12 md:w-full">
            <TextGenerateEffect words={heroTitle} title={true} />

            <p className="text-base tracking-tight font-poppins md:text-lg lg:text- text-background/70 mt-6 text-center">
              Let your digital twin handle interactions effortlessly, so you can
              stay focused on
              <br /> what truly matters.
            </p>

            <div className=" md:flex relative items-center justify-center mt-8 md:mt-14 w-full">
              <SignUpButtonC />
            </div>
          </div>
        </div>
      </Container>
      <div className=" opacity-20 absolute bottom-0 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-2/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
    </Wrapper>
  );
};

export default Hero;
