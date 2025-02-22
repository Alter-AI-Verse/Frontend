import React from "react";

import { ArrowRight } from "lucide-react";
import Wrapper from "../components/global/Wapper";
import { Button } from "../components/ui/Button";

import { LampContainer } from "../components/ui/LampContainer";
import { Link } from "react-router-dom";
import Container from "../components/global/Container";
import { Input } from "../components/ui/Input";

export const NewsletterSection = () => {
  return (
    <section id="newsletter" className="w-full sm:w-2/3 ">
      <Wrapper className="flex flex-col items-center justify-center relative">
        <Container>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative  w-full text-center">
              <h2 className=" text-white font-[titlefont] text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                Our Vision
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Create lifelike, interactive digital personas with Persona
                AI&apos;s intuitive platform and AI assistant
              </p>
              <Button variant="white" className="mt-6" asChild>
                <Link href="/sign-in">
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </LampContainer>
        </Container>

        <Container className="relative z-[999999]">
          <div className="flex items-center justify-center w-full -mt-40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
              <div className="flex flex-col items-start gap-4 w-full">
                <h4 className="text-xl md:text-2xl font-semibold text-white">
                  Join our newsletter
                </h4>
                <p className="text-base text-muted-foreground">
                  Be up to date with everything <br /> about Persona.AI
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                <form
                  action="#"
                  className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                >
                  <Input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="secondary"
                    className="w-full md:w-max"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing you agree with our{" "}
                  <Link href="#">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};
