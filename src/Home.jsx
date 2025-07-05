import Footer from "./components/Footer";
import { Link } from "react-router-dom";
const cardList = [
  {
    img: "src/assets/Images/Corporate Gift Sets.png",
    product: "Corporate Gift Sets",
    content: "Track time while planning for a greener future",
  },
  {
    img: "src/assets/Images/Ecofriendly Calanders.png",
    product: "Ecofriendly Calenders",
    content: "Sustainable gifting solutions for businesses",
  },
  {
    img: "src/assets/Images/Plantable Wedding Invitations.png",
    product: "Plantable Wedding Invitations",
    content: "Create memories that blossom into flowers",
  },
  {
    img: "src/assets/Images/Seed Paper Business Cards.png",
    product: "Seed Paper Business Cards",
    content: "Make a lasting impression with cards that grow into plants",
  },
];

const iconList = [
  {
    img: "src/assets/Images/Paper Creation.png",
    title: "Paper Creation",
    content: "Recycled materials are processed into paper pulp",
  },
  {
    img: "src/assets/Images/Seed Embedding.png",
    title: "Seed Embedding",
    content: "High-quality seeds are carefully embedded",
  },
  {
    img: "src/assets/Images/Usage.png",
    title: "Usage",
    content: "Use the product as intended",
  },
  {
    img: "src/assets/Images/Planting.png",
    title: "Planting",
    content: "Plant and watch it grow into beautiful plants",
  },
];

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
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 pb-10 font-[Gill_Sans]">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <Link
            to="/Shop"
            className="rounded-md bg-black px-4 py-2 md:px-6 md:py-4 text-md font-semibold text-white hover:bg-gray-700 transition ease-in-out duration-300 font-[Gill_Sans]"
            viewTransition
          >
            Shop Sustainable
          </Link>
        </div>
        <div className="hidden md:block flex-1 relative justify-center align-center py-7">
          <img
            src="src/assets/Images/Main image calendar.png"
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
        <p className="text-xs sm:text-sm font-[Gill_Sans]">{content}</p>
        <a href="" className="text-sm sm:text-base">
          Learn More
        </a>
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
        <h1 className="font-bold text-sm sm:text-lg text-center font-[Gill_Sans]">
          {title}
        </h1>
        <p className="text-center text-xs sm:text-base font-[Gill_Sans]">
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
        <div className="pb-6">
          <div className="w-[100%] flex align-center justify-center py-6">
            <h1 className="font-bold text-lg md:text-2xl text-white bg-lime-700 rounded-full px-4 py-2 md:px-6 md:py-2 font-[Gill_Sans] shadow-lg">
              Discover our range of products
            </h1>
          </div>
          <div className="hidden md:flex space-x-5 mx-5">
            {cardList.map((card) => (
              <Cards {...card} key={card.product} />
            ))}
          </div>
          {/* For Smaller Screens */}

          <div className="md:hidden grid grid-cols-2 gap-4">
            {cardList.map((card) => (
              <Cards {...card} key={card.product} />
            ))}
          </div>
        </div>
        <div className="py-6 bg-white">
          <div className="mx-auto w-[50%] flex-col align-center justify-center py-4 rounded-sm text-center">
            <h1 className="font-bold text-xl sm:text-4xl pb-2 font-[Georgia]">
              How It Works
            </h1>
            <hr className="bg-slate-800" />
            <p className="text-slate-900 text-xs sm:text-base pt-4 font-[Georgia]">
              From paper to plant in four simple steps
            </p>
          </div>

          <div className="hidden md:flex space-x-[60px] justify-center mx-[60px] pt-5">
            {iconList.map((icon) => (
              <Icon {...icon} key={icon.title} />
            ))}
          </div>

          <div className="md:hidden grid grid-cols-2 gap-4">
            {iconList.map((icon) => (
              <Icon {...icon} key={icon.title} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
