import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { steps, products } from "./data/home.js";

function Hero() {
  return (
    <div className="relative px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 bg-neutral-200"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/695 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#9ccf11] to-[#7a7810] opacity-30 sm:left-[calc(60%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="flex w-[100%] text-center items-center pt-10 md:pt-0 md:text-left">
        <div className="flex-1 md:pr-2 md:py-56 md:text-left mx-auto">
          <h1 className="text-5xl tracking-tight text-balance text-gray-900 sm:text-7xl font-bold font-[Didot]">
            Plant Your Business,{" "}
            <div className="text-[#a3d615]">Grow Your Future</div>
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 pb-10 font-[Alegreya_Sans]">
            We at Srijan believe in transforming discarded paper into
            opportunities for a new life. By choosing Srijan, your business
            takes a meaningful step forward in advancing towards sustainability
            and environmental responsibility.
          </p>
          <Link
            to="https://forms.gle/pmTiXdVbyymPg55RA"
            target="_blank"
            className="rounded-md bg-black px-4 py-2 md:px-6 md:py-4 text-md font-semibold text-white hover:bg-gray-700 transition ease-in-out duration-300 font-[Alegreya_Sans]"
            viewTransition
          >
            Shop Sustainable
          </Link>
        </div>
        <div className="hidden md:block flex-1 relative justify-center align-center py-7">
          <img
            src="/assets/Images/Main image calendar.png"
            className="rounded-full"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] bg-neutral-200"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(30%+3rem)] aspect-1155/1000 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#9ccf11] to-[#7a7810] opacity-30 sm:left-[calc(30%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}

function Cards({ img, product, content }) {
  return (
    <>
      <div className="bg-stone-100 flex-col space-y-4 p-5 shadow-md hover:shadow-2xl hover:bg-lime-50 transition ease-in-out duration-300">
        <img src={img} alt="Your Image" />
        <h1 className="text-base sm:text-lg font-semibold font-[Didot]">
          {product}
        </h1>
        <p className="text-xs sm:text-sm font-[Alegreya_Sans]">{content}</p>
        <p className="text-[10px] sm:text-xs font-[Alegreya_Sans] font-thin">
          <sup>*</sup>Image does not represent actual product
        </p>
      </div>
    </>
  );
}

function Icon({ img, title, content }) {
  return (
    <>
      <div className="flex-col space-y-2 flex-1 text-slate-600">
        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-lime-300 mx-auto">
          <img src={img} className="h-8 sm:h-12 contain" />
        </div>
        <h1 className="font-bold text-sm sm:text-lg text-center font-[Alegreya_Sans]">
          {title}
        </h1>
        <p className="text-center text-xs sm:text-base font-[Alegreya_Sans]">
          {content}
        </p>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex-col w-[100%] pt-6">
        <div className="pb-8">
          {/*Product Lineup */}
          <div className="w-[100%] flex align-center justify-center py-6">
            <h1 className="font-bold text-lg md:text-2xl text-white bg-lime-700 rounded-full px-4 py-2 md:px-6 md:py-2 font-[Alegreya_Sans] shadow-lg">
              Discover our range of products
            </h1>
          </div>
          <div className="hidden md:flex space-x-5 mx-5">
            {products.map((card) => (
              <Cards {...card} key={card.product} />
            ))}
          </div>
          {/* For Smaller Screens */}
          <div className="md:hidden grid grid-cols-2 gap-4 px-4">
            {products.map((card) => (
              <Cards {...card} key={card.product} />
            ))}
          </div>
        </div>

        {/*Our Impact */}
        <div className="w-[100%] relative py-8 px-8 flex space-x-4 bg-linear-to-br from-green-200 from-[0%] via-emerald-100 via-[50%] to-teal-200 to-[100%] text-slate-600 shadow-lg z-1 font-[Alegreya_Sans] font-bold">
          <div className="hidden sm:flex flex-col flex-1">
            <h1 className="text-3xl md:text-5xl font-[Georgia] text-slate-700 font-semibold">
              We at <div className="text-lime-600">Project Srijan</div> believe
              in creating environmental impact one paper at a time
            </h1>
            <p className="pt-4 text-xs md:text-base font-normal">
              Each of our products is thoughtfully crafted from recycled paper,
              and embedded with seeds—reflecting our commitment to a greener
              future. By crafting over 10,000 sheets of seed paper from recycled
              materials, we've helped save trees, conserve water and energy, and
              keep waste out of landfills
            </p>
          </div>
          <div className="flex-col flex-1">
            <h1 className="text-xl text-center sm:text-left sm:text-sm md:text-lg font-bold">
              Our Impact
            </h1>
            <div className="pt-4 grid grid-cols-2 gap-2 sm:gap-4">
              <div className="flex-col">
                <h1 className="text-xl sm:text-3xl md:text-5xl font-light font-[Didot] text-emerald-700">
                  25,000
                </h1>
                <p className="text-xs md:text-base font-normal">
                  Liters of Water saved. Seed paper flips the script, conserving
                  a remarkable amount of water with every batch.
                </p>
              </div>
              <div className="flex-col">
                <h1 className="text-xl sm:text-3xl md:text-5xl md:text-5xl font-light font-[Didot] text-emerald-700 ">
                  4 Tons
                </h1>
                <p className="text-xs md:text-base font-normal">
                  Of CO<sub>2</sub> —Stopped in Its Tracks.Seed paper rewrites
                  the story, blocking 4 tonnes of CO₂ from entering our
                  skies—the equivalent of taking a car off the road for an
                  entire year.{" "}
                </p>
              </div>
              <div className="flex-col">
                <h1 className="text-xl sm:text-3xl md:text-5xl font-light font-[Didot] text-emerald-700">
                  3m<sup>3</sup>
                </h1>
                <p className="text-xs md:text-base font-normal">
                  Of waste transformed. Most paper ends its story buried in
                  landfills. Seed paper breaks that cycle by blossoming into
                  wildflowers, and giving back to the earth.
                </p>
              </div>
              <div className="flex-col">
                <h1 className="text-xl sm:text-3xl md:text-5xl font-light font-[Didot] text-emerald-700">
                  25
                </h1>
                <p className="text-xs md:text-base font-normal">
                  Eucalyptus Giants Standing Tall. Every sheet becomes a silent
                  promise to protect trees that have taken decades to grow,
                  letting nature&apos;s giants continue their vital work for
                  generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Working*/}
        <div className="py-8 bg-white">
          <div className=" flex-col align-center justify-center py-4 rounded-sm text-center">
            <h1 className="font-bold text-xl sm:text-4xl pb-2 font-[Georgia]">
              How It Works
            </h1>
            <div className="px-30 sm:px-40 md:px-50">
              <hr />
            </div>
            <p className="text-slate-900 text-xs sm:text-base pt-4 font-[Georgia]">
              From paper to plant in four simple steps
            </p>
          </div>
          <div className="hidden md:flex space-x-[60px] justify-center mx-[60px] pt-5">
            {steps.map((icon) => (
              <Icon {...icon} key={icon.title} />
            ))}
          </div>
          {/*For Smaller Screens*/}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {steps.map((icon) => (
              <Icon {...icon} key={icon.title} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
