import { Instagram } from "react-bootstrap-icons";
export default function Footer() {
  return (
    <div
      className="flex-col bg-emerald-800 space-y-16 items-center p-10 text-neutral-300 font-[Gill_Sans]"
      id="Contact"
    >
      <div className="flex">
        <div className="hidden md:block flex-1 text-lg md:text-4xl font-bold px-4">
          Creating sustainable solutions for a greener future.
        </div>
        <div className="flex-1 border-r md:border-x px-2 md:px-0">
          <div className="flex-col text-center">
            <h1 className="font-bold text-md md:text-xl">Products</h1>
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
            <h1 className="font-bold text-md md:text-xl">Contact Us</h1>
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
      <a href="https://www.instagram.com/srijan.enactusnsut">
        <Instagram className="md:size-6 mx-auto" />
      </a>
      <p className="text-center text-md md:text-lg pt-5">
        &copy; 2025 Srijan. All rights reserved.
      </p>
    </div>
  );
}
