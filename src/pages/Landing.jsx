import React from "react";
import { Navbar } from "../components/Navbar";
import Hero from "./Hero";
import { Footer } from "../components/Footer";
import { NewsletterSection } from "./NewsletterSection";
import PricingPage from "./Pricing";

const Landing = () => {
  return (
    <div className="dark">
      <div className="flex flex-col items-center overflow-hidden w-full">
        <Navbar />
        <section className="w-full max-w-screen relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
          <Hero />
          <PricingPage/>
          <NewsletterSection/>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
