import Footer from "./components/Footer";
import { InstagramEmbed } from "react-social-media-embed";
import {
  Instagram,
  Linkedin,
  BoxArrowInUpRight,
  Facebook,
  Youtube,
  TwitterX,
} from "react-bootstrap-icons";
import { projectLeads, deptLeads } from "./data/about.js";

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
        <h1 className="text-3xl md:text-6xl text-black font-[Didot] text-center">
          Communities
        </h1>
        <p className="text-slate-900 text-xs sm:text-base pt-4 font-[Georgia] text-center pb-4">
          Communities we have organised workshops and collaborate with
        </p>
        {/*Mitr */}
        <div className="flex flex-row w-[100%] justify-center items-center align-center space-x-8 group pt-5">
          <div className="bg-white shadow-md flex-1 group-hover:rotate-[3deg] group-hover:scale-[1.05] transition ease-in-out duration-300">
            <img
              src="/assets/Images/MitrTrust.jpg"
              className="h-auto w-[100%] object-cover px-2 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-12"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-[Didot] text-xl md:text-4xl pb-5">
              Mitr Trust
            </h2>
            <div>
              <hr />
              <p className="font-[Gill_Sans] py-5 text-xs md:text-base">
                Mitr TRUST, established in January 2005 under the Indian Trust
                Act of 1860, is Delhi&apos;s pioneering LGBTQIA+ community-based
                organization. With a strong commitment to equity, dignity, and
                respect, Mitr TRUST works to empower individuals across the
                LGBTQIA+ spectrum, regardless of class, caste, creed, or race.
                Since 2008, the organization has been actively involved in
                HIV/AIDS awareness, prevention, and care initiatives, reaching
                over 2,500 community members.
              </p>
              <div className="flex space-x-2 pb-5">
                <a href="https://www.facebook.com/mitr.trust/" target="_blank">
                  <Facebook className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a href="https://www.instagram.com/mitrtrust/" target="_blank">
                  <Instagram className="size-4 md:size-6 group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a href="https://x.com/mitrtrust" target="_blank">
                  <TwitterX className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a href="https://mitrtrust.org/" target="_blank">
                  <BoxArrowInUpRight className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
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
              <p className="font-[Gill_Sans] py-5 text-xs md:text-base">
                We Care Foundation is committed to providing every child with
                access to quality education and nutritious meals, recognizing
                education as a fundamental human right and a cornerstone of
                personal and societal development. The foundation believes that
                education empowers individuals to transform their lives,
                equipping them with the knowledge and skills needed to improve
                their circumstances.
              </p>
              <div className="flex space-x-2 pb-5">
                <a
                  href="https://www.facebook.com/Wecarefoundationforhumanity/"
                  target="_blank"
                >
                  <Facebook className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/wecarefoundation4humanity/"
                  target="_blank"
                >
                  <Linkedin className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/wecarefoundation_4humanity/"
                  target="_blank"
                >
                  <Instagram className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=lrOkY9_ohDc"
                  target="_blank"
                >
                  <Youtube className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
                <a href="https://www.wecarefoundation.in/" target="_blank">
                  <BoxArrowInUpRight className="size-4 md:size-6  group-hover:scale-[1.1] transition ease-in-out duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md flex-1 group-hover:rotate-[-3deg] group-hover:scale-[1.05] transition ease-in-out duration-300">
            <img
              src="/assets/Images/WeCare.jpg"
              className="h-auto w-[100%] object-cover px-2 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-12"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
/**/
