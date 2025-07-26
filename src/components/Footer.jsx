import { Instagram, Linkedin } from "react-bootstrap-icons";
export default function Footer() {
  return (
    <div
      className="flex-col bg-emerald-800 space-y-16 items-center p-10 text-neutral-300 font-[Alegreya_Sans]"
      id="Contact"
    >
      <div className="flex">
        <div className="hidden md:block flex-1 text-lg md:text-4xl font-extrabold px-4">
          Creating sustainable solutions for a greener future.
        </div>
        <div className="flex-1 border-r md:border-x px-2 md:px-0">
          <div className="flex-col text-center">
            <h1 className="font-extrabold text-md md:text-xl">Products</h1>
            <ul className="text-xs md:text-base">
              <li className="pt-1">Business Cards</li>
              <li className="pt-1">Calendars</li>
              <li className="pt-1">Wedding Invitations</li>
              <li className="pt-1"> Corporate Gifts</li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-col text-center px-4">
            <h1 className="font-extrabold text-md md:text-xl">Contact Us</h1>
            <ul className="md:text-base text-xs ">
              <li className="pt-1">Email: srijan.enacnsut@gmail.com</li>
              <li className="pt-1">
                Phone: +91 8595622774 <br />
                +91 9999358770 <br />
                +91 9992184356
              </li>
              <li className="pt-1">
                Address: NSUT, Sector-3, Dwarka, NewDelhi{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 justify-center">
        <a href="https://www.instagram.com/srijan.enactusnsut" target="_blank">
          <Instagram className="md:size-6" />
        </a>
        <a href="https://www.linkedin.com/company/srijan-nsut" target="_blank">
          <Linkedin className="md:size-6" />
        </a>
      </div>
      <p className="text-center text-md md:text-lg ">
        &copy; 2025 Srijan. All rights reserved.
      </p>
    </div>
  );
}
