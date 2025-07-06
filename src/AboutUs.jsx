import Footer from "./components/Footer";
import { InstagramEmbed } from "react-social-media-embed";

const cardList = [
  {
    img: "src/assets/Images/VedanshBhaiya.jpeg",
    product: "Your Name",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis atque nostrum tenetur, cupiditate cumque numquam minima aspernatur commodi quo, sint porro nihil dignissimos, accusamus incidunt! Deleniti nihil esse delectus quos.",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.jpeg",
    product: "Your Name",
    content: "Sustainable gifting solutions for businesses",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.jpeg",
    product: "Your Name",
    content: "Create memories that blossom into flowers",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.jpeg",
    product: "Your Name",
    content: "Make a lasting impression with cards that grow into plants",
  },
];

function Cards({ img, product }) {
  return (
    <>
      <div className="bg-neutral-100 flex-col space-y-4 p-5 shadow-md hover:shadow-2xl hover:bg-white transition ease-in-out duration-300">
        <img
          src="src/assets/Images/VedanshBhaiya.png"
          alt="Your Image"
          className="mx-auto h-auto w-[100%] object-cover"
        />
        <h1 className="flex-1 text-center text-base sm:text-lg card-2:text-2xl card-1:text-4xl font-semibold font-[Didot]">
          Your name
          <hr />
        </h1>
        <h2 className="flex-1 text-center text-sm sm:text-base card-2:text-xl card-1:text-2xl font-semibold font-[Gill_sans]">
          Your post
        </h2>
      </div>
    </>
  );
}
export default function AboutUs() {
  return (
    <>
      <div className="pb-4 bg-stone-50 p-10">
        <h1 className="text-3xl md:text-6xl text-black font-[Didot] text-center">
          Our Team
        </h1>
        <hr />
      </div>
      <div className="bg-stone-50 py-2 sm:py-5 px-10">
        <h2 className="text-xl md:text-4xl font-[Gill_Sans] text-slate-700 font-bold text-center">
          Project Leads
        </h2>
        <div className="hidden sm:flex space-x-10 card-2:space-x-20 items-center justify-center align-centersm:py-8">
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="flex flex-col sm:hidden space-y-10 items-center justify-center align-center py-4 px-4 ">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="px-8 bg-slate-100">
        <hr />
      </div>
      <div className="bg-slate-100 w-[100%] py-5 px-8 hidden sm:block">
        <div className="flex justify-between space-x-8 card-2:space-x-14 pt-4 sm:pt-8">
          <h2 className="flex-1 text-xl md:text-4xl font-[Gill_Sans] text-slate-700 font-bold">
            Media Team
          </h2>
          <h2 className="flex-1 text-xl md:text-4xl font-[Gill_Sans] text-slate-700 font-bold text-right">
            Research and Development
          </h2>
        </div>
        <div className="flex space-x-8 card-2:space-x-14 items-center justify-center align-center py-4 sm:py-8">
          <div className="grid grid-cols-2 gap-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-[100%] py-5 px-8 block sm:hidden">
        <div className="flex pt-4 items-center align-center space-x-4">
          <h2 className="text-xl flex-1 font-[Gill_Sans] text-slate-700 font-bold text-right w-full">
            Media Team
          </h2>
          <h2 className="text-xl flex-1 md:text-4xl font-[Gill_Sans] text-slate-700 font-bold w-full">
            Research and Development
          </h2>
        </div>
        <div className="flex space-x-4 items-center justify-center align-center py-4">
          <div className="grid grid-cols-1 gap-2">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <div className="w-[100%] relative py-6 px-8 flex space-x-4 bg-linear-to-br from-green-200 from-[0%] via-emerald-100 via-[50%] to-teal-200 to-[100%] text-slate-600 shadow-lg z-1 font-[Gill_Sans] font-bold">
        <div className="hidden sm:flex flex-col flex-1">
          <h1 className="text-3xl md:text-5xl font-[Georgia] text-slate-700 font-semibold">
            We at <div className="text-lime-600">Project Srijan</div> believe in
            creating environmental impact one paper at a time
          </h1>
          <p className="pt-4 text-xs md:text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit
            expedita, itaque nobis doloremque rerum tempora esse aliquid magni
            ratione numquam. Pariatur a est mollitia nostrum. Nihil facere earum
            dolore.
          </p>
        </div>
        <div className="flex-col flex-1">
          <h1 className="text-sm md:text-lg font-bold">Our Impact</h1>
          <div className="pt-4 grid grid-cols-2 gap-2 sm:gap-4">
            <div className="flex-col">
              <h1 className="xl sm:text-3xl md:text-5xl font-light font-[Didot] text-emerald-700">
                100+
              </h1>
              <p className="text-xs md:text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsam illo aliquid molestiae qui,
              </p>
            </div>
            <div className="flex-col">
              <h1 className="xl sm:text-3xl md:text-5xl md:text-5xl font-light font-[Didot] text-emerald-700 ">
                5000+{" "}
              </h1>
              <p className="text-xs md:text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex-col">
              <h1 className="xl sm:text-3xl md:text-5xl font-light font-[Didot] text-emerald-700">
                1000+{" "}
              </h1>
              <p className="text-xs md:text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsam illo aliquid
              </p>
            </div>
            <div className="flex-col">
              <h1 className="xl sm:text-3xl md:text-5xl font-light font-[Didot] text-emerald-700">
                500+{" "}
              </h1>
              <p className="text-xs md:text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsam illo aliquid molestiae qui, officia illum eius
                nulla sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl md:text-6xl text-black font-[Didot] text-center  p-10">
          Updates
        </h1>
        <div className=" flex space-x-4 justify-evenly px-4 pb-10">
          <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />
          <InstagramEmbed
            url="https://www.instagram.com/p/CUbHfhpswxt/"
            className="hidden md:block"
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CUbHfhpswxt/"
            className="hidden card-1:block"
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CUbHfhpswxt/"
            className="hidden card-1:block"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
/**/
