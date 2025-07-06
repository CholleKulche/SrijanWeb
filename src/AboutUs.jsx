import Footer from "./components/Footer";

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

function Cards({ img, product, content }) {
  return (
    <>
      <div className="bg-white flex-col space-y-4 p-5 shadow-md hover:shadow-2xl hover:bg-lime-50 transition ease-in-out duration-300">
        <img
          src="src/assets/Images/VedanshBhaiya.png"
          alt="Your Image"
          className="mx-auto h-auto w-[100%] object-cover"
        />
        <h1 className="flex-1 text-center text-2xl sm:text-4xl font-semibold font-[Didot]">
          Your name
        </h1>
        <p className="flex-1 text-xs sm:text-sm font-[Gill_Sans]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolorum blanditiis cupiditate labore culpa, illum a
          modi nemo tempora praesentium perferendis neque ex totam impedit!
          Veniam officiis dolorum beatae itaque.
        </p>
      </div>
    </>
  );
}
export default function AboutUs() {
  return (
    <>
      <div className="w-[100%] relative py-6 px-8 flex space-x-4 bg-linear-to-br from-green-200 from-[0%] via-emerald-100 via-[50%] to-teal-200 to-[100%] text-slate-600 shadow-lg z-1 font-[Gill_Sans] font-bold">
        <div className="flex-col flex-1">
          <h1 className="text-5xl font-[Georgia] text-slate-700 font-semibold">
            We at <div className="text-lime-600">Project Srijan</div> believe in
            creating environmental impact one paper at a time
          </h1>
          <p className="pt-4 text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit
            expedita, itaque nobis doloremque rerum tempora esse aliquid magni
            ratione numquam. Pariatur a est mollitia nostrum. Nihil facere earum
            dolore.
          </p>
        </div>
        <div className="flex-col flex-1">
          <h1 className="text-lg font-bold">Our Impact</h1>
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="flex-col">
              <h1 className="text-5xl font-light font-[Didot] text-emerald-700">
                100+
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsam illo aliquid molestiae qui,
              </p>
            </div>
            <div className="flex-col">
              <h1 className="text-5xl font-light font-[Didot] text-emerald-700 ">
                5000+{" "}
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex-col">
              <h1 className="text-5xl font-light font-[Didot] text-emerald-700">
                1000+{" "}
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsam illo aliquid
              </p>
            </div>
            <div className="flex-col">
              <h1 className="text-5xl font-light font-[Didot] text-emerald-700">
                500+{" "}
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsam illo aliquid molestiae qui, officia illum eius
                nulla sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4 bg-stone-100 p-10">
        <h1 className="text-6xl text-black font-[Didot] text-center font-bold ">
          Our Team
        </h1>
        <hr />
      </div>
      <div className="bg-stone-100 py-5 px-10">
        <h2 className="text-4xl font-[Gill_Sans] text-slate-600 font-bold">
          Project Leads
        </h2>
        <div className="flex space-x-8 items-center justify-center align-center py-8">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="bg-slate-100 w-[100%] py-5 px-10 border-t-1">
        <h2 className="text-4xl font-[Gill_Sans] text-slate-600 font-bold text-right">
          Media Team
        </h2>
        <div className="flex space-x-8 items-center justify-center align-center py-8">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="bg-stone-100 py-5 px-10 border-t-1">
        <h2 className="text-4xl font-[Gill_Sans] text-slate-600 font-bold ">
          RnD
        </h2>
        <div className="flex space-x-8 items-center justify-center align-center py-8">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="">
        <h1 className="text-6xl text-black font-[Didot] text-center font-bold p-10">
          Updates
        </h1>
      </div>
      <Footer />
    </>
  );
}
/**/
