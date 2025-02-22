import { Link } from "react-router-dom";
import Wrapper from "./global/Wapper";
import Container from "./global/Container";

export function Footer() {
  return (
    <Wrapper>
        <Container>
    <footer className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-t border-border/10 px-6 pb-8 pt-16 lg:px-8 lg:pt-32">
      <div className="absolute -right-1/4 -top-1/3 -z-10 hidden h-52 w-52 opacity-70 rounded-full bg-primary blur-[14rem] lg:block"></div>
      <div className="absolute -left-1/4 bottom-0 -z-10 hidden h-52 w-52 rounded-full opacity-70 bg-primary blur-[14rem] lg:block"></div>

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
           
          </div>
          <p className="mt-4 text-start text-sm text-muted-foreground">
            
          </p>
          <span className="mt-4 flex items-center text-sm text-neutral-200">
            Made in India
            
          </span>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Product</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Features
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <h3 className="text-base font-medium text-white">Integrations</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <h3 className="text-base font-medium text-white">Company</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href=""
                    className="transition-all duration-300 hover:text-background"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full border-t border-border/10 pt-4 md:flex md:items-center md:justify-between md:pt-8">
        <p className="mt-8 text-sm text-muted-foreground md:mt-0">
          &copy; {new Date().getFullYear()} Persona.AI All rights reserved.
        </p>
      </div>
    </footer>
    </Container>
    </Wrapper>
  );
}
