import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function NavButton({ name }) {
  if (name != "Contact") {
    return (
      <Link to={name == "Home" ? "/" : "/" + name} viewTransition>
        <div className="hidden cursor:pointer md:block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-[#749615] hover:text-white transition ease-in-out duration-300">
          {name}
        </div>
        <div className="block cursor:pointer md:hidden w-[100%] py-4 px-6 flex-1 text-slate-700 hover:bg-[#749615] hover:text-slate-100 transition ease-in-out duration-300">
          {name}
        </div>
      </Link>
    );
  } else {
    const scrollToFooter = () => {
      const contact = document.getElementById("Contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div onClick={scrollToFooter}>
        <div className="hidden cursor:pointer md:block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-[#749615] hover:text-white transition ease-in-out duration-300">
          {name}
        </div>
        <div className="block cursor:pointer md:hidden w-[100%] py-4 px-6 flex-1 text-slate-700 hover:bg-[#749615] hover:text-slate-100 transition ease-in-out duration-300">
          {name}
        </div>
      </div>
    );
  }
}
function BuyButton() {
  return (
    <Link to="/Shop" viewTransition>
      <div className="hidden cursor:pointer absolute md:block inset-y-2 right-0 flex items-center">
        <div className="rounded-md px-4 py-3 text-md text-gray bg-[#749615] hover:bg-[#5e7a10] text-white transition ease-in-out duration-300">
          Shop Now
        </div>
      </div>

      <div className="relative cursor:pointer md:hidden w-[100%] py-4 px-6 bg-[#749615] hover:bg-[#5e7a10] transition ease-in-out duration-300 top-30">
        <div className="text-slate-100">Shop Now</div>
      </div>
    </Link>
  );
}
export default function Navbar() {
  const [click, setClick] = useState(0);
  function handleClick() {
    if (click == 0 || click == 1) {
      setClick(2);
    } else {
      setClick(1);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setClick(0);
    });
  }, []);
  return (
    <nav>
      <div className="font-bold font-[Gill_Sans] shadow-md z-11 relative hidden md:block mx-auto max-w-[100%] px-8 bg-neutral-100">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center space-x-4">
            <div className="flex shrink-0">
              <img
                className="h-8 w-auto"
                src="src/assets/react.svg"
                alt="Your Company"
              />
            </div>
            <div className="flex">
              <NavButton name="Home" />
              <NavButton name="About Us" />
              <NavButton name="Contact" />
              <BuyButton />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile Menu */}
      <div
        className={
          "md:hidden fixed flex-col w-[45%] z-99 cursor-pointer font-bold font-[Gill_Sans] " +
          (click == 0
            ? ""
            : click == 1
              ? "animate-navbar-blur-close"
              : "animate-navbar-blur-open h-[100%]")
        }
      >
        {/*Mobile Burger Icon */}
        <div className="p-4 " onClick={handleClick}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-lime-50 ">
            <svg
              className={
                (click == 0 || click == 1 ? "block" : "hidden") + " size-6"
              }
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className={
                (click == 0 || click == 1 ? "hidden" : "block") + " size-6"
              }
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {/*Mobile Menu main navigation */}
        <div
          className={
            "bg-lime-50 h-[100%] z-99 " +
            (click == 0
              ? "hidden"
              : click == 1
                ? "animate-navbar-transform-close"
                : "animate-navbar-transform-open")
          }
          onClick={handleClick}
        >
          <NavButton name="Home" />
          <NavButton name="About Us" />
          <NavButton name="Contact" />
          <NavButton name="Communities" />
          <BuyButton />
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
