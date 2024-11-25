import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laudantium, cupiditate sit quo quisquam exercitationem quibusdam
            inventore, magnam in consequatur voluptatibus aliquid, vero tempore
            odio eius accusamus error adipisci a.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+216 28424670</li>
            <li>nourkouider@outfity.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
