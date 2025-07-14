import Footer from "./components/Footer";
import { InstagramEmbed } from "react-social-media-embed";
import {
  Instagram,
  Linkedin,
  BoxArrowInUpRight,
  Facebook,
  Youtube,
  Line,
} from "react-bootstrap-icons";

{
  /* Leads */
}
const projectLeads = [
  {
    img: "src/assets/Images/KirtanGupta.png",
    name: "Kirtan Gupta",
  },
  {
    img: "src/assets/Images/GarvMittal.png",
    name: "Garv Mittal",
  },
];

const deptLeads = [
  {
    img: "src/assets/Images/DishaKashyap.png",
    name: "Disha Kashyap",
    post: "Research and Development",
  },
  {
    img: "src/assets/Images/VanshBhardwaj.png",
    name: "Vansh Bhardwaj",
    post: "Research and Development",
  },
  {
    img: "src/assets/Images/VedanshBhaiya.png",
    name: "Urvi Ghai",
    post: "Research and Development / Media",
  },
  {
    img: "src/assets/Images/YashmitGupta.png",
    name: "Yashmit Gupta",
    post: "Media",
  },
  {
    img: "src/assets/Images/Vedansh.png",
    name: "Vedansh",
    post: "Media",
  },
  {
    img: "src/assets/Images/MananBhateja.png",
    name: "Manan Bhateja",
    post: "Media",
  },
  {
    img: "src/assets/Images/JyotinThakur.png",
    name: "Jyotin Thakur",
    post: "Tech",
  },
  {
    img: "src/assets/Images/SuhaniGarg.png",
    name: "Suhani Garg",
    post: "Tech",
  },
  {
    img: "src/assets/Images/Ritveek.png",
    name: "Ritveek",
    post: "Business Outreach",
  },
  {
    img: "src/assets/Images/SatvikGupta.png",
    name: "Satvik",
    post: "Business Outreach",
  },
];

function Cards({ img, name, post }) {
  return (
    <>
      <div className="flex-1 bg-transparent flex-col space-y-4 p-5 shadow-xl hover:shadow-4xl hover:bg-neutral-50 transition ease-in-out duration-300">
        <img
          src={img}
          alt="Your Image"
          className="mx-auto h-auto w-[100%] object-cover"
        />
        <h1 className="flex-1 text-stone-700 text-center text-sm sm:text-base card-2:text-xl xl:text-3xl font-semibold font-[Didot]">
          {name}
        </h1>
        <hr />
        <h2 className="flex-1 text-stone-700 text-center text-xs sm:text-sm card-2:text-lg xl:text-xl font-semibold font-[Didot]">
          {post}
        </h2>
      </div>
    </>
  );
}

export default function AboutUs() {
  return (
    <>
      {/*Project Leads */}
      <div className="bg-linear-to-tl from-green-200 from-[0%] via-emerald-100 via-[50%] to-teal-200 to-[100%]">
        <div className="pb-8 p-10">
          <h1 className="text-3xl md:text-6xl text-slate-800 font-[Didot] text-center">
            Our Team
          </h1>
          <hr />
        </div>
        <div className="py-2 sm:py-5 px-10">
          <h2 className="text-xl md:text-4xl font-[Gill_Sans] text-slate-700 font-bold text-center">
            Project Leads
          </h2>
          <div className="flex flex-col sm:flex-row space-y-10 md:w-[85%] sm:space-y-0 sm:space-x-10 card-2:space-x-20 items-center justify-center align-center py-4 px-4 sm:px-0 sm:py-8 mx-auto">
            {projectLeads.map((leads) => (
              <Cards {...leads} key={leads.name} />
            ))}
          </div>
        </div>
        <div className="px-8">
          <hr />
        </div>
      </div>
      {/*Dept Leads*/}
      <div className="bg-linear-to-tl from-sky-200 via-blue-100  to-cyan-200 w-[100%] py-8 px-8 ">
        <h2 className="text-xl md:text-4xl font-[Gill_Sans] text-neutral-700  font-bold text-center">
          Department Leads
        </h2>
        <div className="hidden sm:grid grid-cols-3 align-center pt-8 px-[1.25rem] gap-[1.25rem] md:px-[2rem] md:gap-[2rem]">
          {deptLeads.slice(0, 9).map((leads) => (
            <Cards {...leads} key={leads.name} />
          ))}
        </div>
        <div className="hidden sm:block w-[calc(33%-1.5625rem)] md:w-[calc(33%-2.5rem)] mx-auto pt-8">
          <Cards {...deptLeads[9]} />
        </div>

        {/* Mobile view for Dept Leads*/}
        <div className="grid sm:hidden grid-cols-2 gap-4 pt-8">
          {deptLeads.map((leads) => (
            <Cards {...leads} key={leads.name} />
          ))}
        </div>
      </div>

      {/*Partnerships */}
      <div className="bg-stone-100 py-8 px-8">
        <h1 className="text-3xl md:text-6xl text-black font-[Didot] text-center pb-4">
          Partnerships
        </h1>

        {/*Mitr */}
        <div className="flex flex-row w-[100%] justify-center items-center align-center space-x-8 group pt-5">
          <div className="bg-white shadow-md flex-1 group-hover:rotate-[3deg] group-hover:scale-[1.05] transition ease-in-out duration-300">
            <img
              src="src/assets/Images/MitrTrust.jpg"
              className="h-[100%] w-auto object-cover px-2 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-12"
            />
          </div>
          <div className="flex-1">
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
                <a href="https://www.facebook.com/mitr2016/" target="_blank">
                  <Facebook className="size-6 group-hover:scale-[1.2] transition ease-in-out duration-300" />
                </a>
                <a href="https://mitrfoundation.org/" target="_blank">
                  <BoxArrowInUpRight className="size-6 group-hover:scale-[1.2] transition ease-in-out duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*We Care */}
        <div className="flex flex-row w-[100%] justify-center items-center align-center space-x-8 group pt-5">
          <div className="flex-1">
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
                <a
                  href="https://www.facebook.com/Wecarefoundationforhumanity/"
                  target="_blank"
                >
                  <Facebook className="size-6 group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/wecarefoundation4humanity/"
                  target="_blank"
                >
                  <Linkedin className="size-6 group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/wecarefoundation_4humanity/"
                  target="_blank"
                >
                  <Instagram className="size-6 group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=lrOkY9_ohDc"
                  target="_blank"
                >
                  <Youtube className="size-6 group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a href="https://www.wecarefoundation.in/" target="_blank">
                  <BoxArrowInUpRight className="size-6 group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md flex-1 group-hover:rotate-[-3deg] group-hover:scale-[1.05] transition ease-in-out duration-300">
            <img
              src="src/assets/Images/WeCare.jpg"
              className="h-[100%] w-auto object-cover px-2 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-12"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
/**/
