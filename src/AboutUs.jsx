import Footer from "./components/Footer";
import { InstagramEmbed } from "react-social-media-embed";
import { Instagram, Linkedin, BoxArrowInUpRight } from "react-bootstrap-icons";
const projectLeads = [
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
];

const RnD = [
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
];

const mediaTeam = [
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
];
const techTeam = [
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Your Name",
    linkedin: "https://in.linkedin.com/company/enactus-nsut",
    instagram: "https://www.instagram.com/enac.nsut/",
  },
];
function Cards({ img, name, instagram, linkedin }) {
  return (
    <>
      <div className="bg-transparent flex-col space-y-4 p-5 shadow-xl hover:shadow-4xl hover:bg-neutral-100 transition ease-in-out duration-300">
        <img
          src={img}
          alt="Your Image"
          className="mx-auto h-auto w-[100%] object-cover"
        />
        <h1 className="flex-1 text-stone-700 text-center text-base sm:text-lg card-2:text-2xl card-1:text-4xl font-semibold font-[Didot]">
          {name}
          <hr />
        </h1>
        <div className="flex-1 flex space-x-2 justify-center ">
          {instagram ? (
            <a href="https://www.instagram.com/enac.nsut/" target="_blank">
              <Instagram className="size-6 text-stone-700" />
            </a>
          ) : (
            <></>
          )}
          {linkedin ? (
            <a href={linkedin} target="_blank">
              <Linkedin className="size-6 text-stone-700" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
export default function AboutUs() {
  return (
    <>
      <div className="bg-linear-to-tl from-green-200 from-[0%] via-emerald-100 via-[50%] to-teal-200 to-[100%]">
        <div className="pb-4 p-10">
          <h1 className="text-3xl md:text-6xl text-slate-800 font-[Didot] text-center">
            Our Team
          </h1>
          <hr />
        </div>
        <div className="py-2 sm:py-5 px-10">
          <h2 className="text-xl md:text-4xl font-[Gill_Sans] text-slate-700 font-bold text-center">
            Project Leads
          </h2>
          <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10 card-2:space-x-20 items-center justify-center align-center py-4 px-4 sm:px-0 sm:py-8">
            {projectLeads.map((leads) => (
              <Cards {...leads} key={leads.name} />
            ))}
          </div>
        </div>
        <div className="px-8">
          <hr />
        </div>
      </div>
      <div className="bg-linear-to-tl from-sky-200 via-blue-100  to-cyan-200 w-[100%] py-5 px-8 ">
        <div className="flex items-center align-center sm:justify-between space-x-4 sm:space-x-8 card-2:space-x-14 pt-4 sm:pt-8">
          <h2 className="flex-1 text-xl md:text-4xl font-[Gill_Sans] text-neutral-700  font-bold text-right sm:text-left">
            Media Team
          </h2>
          <h2 className="flex-1 text-xl md:text-4xl font-[Gill_Sans] text-neutral-700 font-bold sm:text-right">
            Research and Development
          </h2>
        </div>
        <div className="flex space-x-4 sm:space-x-8 card-2:space-x-14 items-center justify-center align-center py-4 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {mediaTeam.map((leads) => (
              <Cards {...leads} key={leads.name} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {RnD.map((leads) => (
              <Cards {...leads} key={leads.name} />
            ))}
          </div>
        </div>
        <hr />
        <h2 className="text-xl sm:text-4xl font-[Gill_Sans] text-neutral-700  font-bold text-center pt-5">
          Tech Team
        </h2>
        <div className="flex space-x-4 space-x-4 sm:space-x-8 card-2:space-x-14 items-center justify-center mx-auto align-center py-4 sm:py-8 sm:w-[50%]">
          {techTeam.map((leads) => (
            <Cards {...leads} key={leads.name} />
          ))}
        </div>
      </div>
      <div className="bg-stone-100 py-5 px-8">
        <h1 className="text-3xl md:text-6xl text-black font-[Didot] text-center">
          Partnerships
        </h1>
        <div className="flex flex-row w-[100%] justify-center items-center align-center space-x-8 group pt-5">
          <div className="bg-white shadow-md flex-1 group-hover:rotate-[-3deg] group-hover:scale-[1.05] transition ease-in-out duration-300">
            <img
              src="src/assets/Images/VedanshBhaiya.png"
              className="h-[100%] w-auto object-cover px-4 pt-4 pb-12"
            />
          </div>
          <div className="flex-2">
            <h2 className="font-[Didot] text-xl md:text-4xl pb-5">
              Mitr Foundation
            </h2>
            <div>
              <hr />
              <p className="font-[Gill_Sans] py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                adipisci ex excepturi. Magni fugiat excepturi odit minima
                reprehenderit soluta nostrum odio animi earum, dolorum quaerat
                officia quam suscipit, vel non! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique aperiam quae iste
                beatae. Adipisci ad odio neque necessitatibus consequuntur enim
                qui dolorem deserunt ab, aliquam error omnis ducimus est
                corporis.
              </p>
              <div className="flex space-x-2 pb-5">
                <a href="instagram.com" target="_blank">
                  <Instagram className="size-6 group-hover:scale-[1.2] transition ease-in-out duration-300" />
                </a>
                <a href="https://mitrfoundation.org/" target="_blank">
                  <BoxArrowInUpRight className="size-6 group-hover:scale-[1.2] transition ease-in-out duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[100%] justify-center items-center align-center space-x-8 group pt-5">
          <div className="flex-2">
            <h2 className="font-[Didot] text-xl md:text-4xl pb-5">
              We Care Foundation
            </h2>
            <div>
              <hr />
              <p className="font-[Gill_Sans] py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                adipisci ex excepturi. Magni fugiat excepturi odit minima
                reprehenderit soluta nostrum odio animi earum, dolorum quaerat
                officia quam suscipit, vel non! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Similique aperiam quae iste
                beatae. Adipisci ad odio neque necessitatibus consequuntur enim
                qui dolorem deserunt ab, aliquam error omnis ducimus est
                corporis.
              </p>
              <div className="flex space-x-2 pb-5">
                <a href="instagram.com" target="_blank">
                  <Instagram className="size-6 group-hover:scale-[1.2] transition ease-in-out duration-300" />
                </a>
                <a href="https://www.wecarefoundation.in/" target="_blank">
                  <BoxArrowInUpRight className="size-6 group-hover:scale-[1.2] transition ease-in-out duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md flex-1 group-hover:rotate-[-3deg] group-hover:scale-[1.05] transition ease-in-out duration-300">
            <img
              src="src/assets/Images/VedanshBhaiya.png"
              className="h-[100%] w-auto object-cover px-4 pt-4 pb-12"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <h1 className="text-3xl md:text-6xl text-black font-[Didot] text-center pt-10 pb-5">
          Updates
        </h1>
        <div className="px-8 pb-5">
          <hr />
        </div>
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
