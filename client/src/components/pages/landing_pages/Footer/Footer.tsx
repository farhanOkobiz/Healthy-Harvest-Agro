"use Client";

import React from "react";
import {
  FaFacebookF,
  // FaInstagram,
  FaRegCreditCard,
  FaTruck,
  // FaYoutube,
} from "react-icons/fa";
import { FaRegMessage, FaRightLeft } from "react-icons/fa6";
import Link from "next/link";
import DownFooter from "../../DownFooter/DownFooter";

interface FooterProps {
  userCartProducts: {
    cartDetails: any[]; // Replace 'any' with the specific type if known
  };
}

const Footer: React.FC<FooterProps> = ({ userCartProducts }) => {
  const quickLink = [
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const information = [
    {
      name: "Order Policy",
      link: "/orderPolicy",
    },
    {
      name: "Privacy Policy",
      link: "/privacyPolicy",
    },
    {
      name: "Return Policy",
      link: "/returnPolicy",
    },
    {
      name: "Terms & Condition",
      link: "/terms-condition",
    },
  ];

  return (
    <div className="relative">
      <div className="Container bg-[#F3F3F3]">
        <div className="max-w-6xl grid grid-cols-2 lg:grid-cols-4 lg:justify-center mx-auto py-5 lg:py-10 px-1 gap-y-4 gap-x-2">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="lg:text-xl text-white bg-[#F7B50C] p-3 rounded-full">
              <FaTruck />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-md lg:text-xl">Free Shipping</div>
              <div className="text-sm text-gray-600">
                Free Shipping for orders
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="lg:text-xl text-white bg-[#F7B50C] p-3 rounded-full">
              <FaRightLeft />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-md lg:text-xl">Return & Exchanges</div>
              <div className="text-sm text-gray-600">
                Free Shipping for orders
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="lg:text-xl text-white bg-[#F7B50C] p-3 rounded-full">
              <FaRegMessage />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-md lg:text-xl">Online Support</div>
              <div className="text-sm text-gray-600">
                24 hours a day, 7 days a week
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="lg:text-xl text-white bg-[#F7B50C] p-3 rounded-full">
              <FaRegCreditCard />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-md lg:text-xl">Flexible payment</div>
              <div className="text-sm text-gray-600">
                Pay with Multiple Credit Cards
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Container bg-[#b4d150] py-10 lg:py-16">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between space-y-5">
          <div>
            <div className="text-black font-semibold mb-[20px] text-xl">
              Contact Info
            </div>
            <div className="text-black text-md lg:text-lg flex flex-col space-y-1">
              <div>Find a location nearest you.</div>
              <div>Contact: +8801717822619</div>
              <div>Whats app: +8801717822619</div>
              <div>
                Address: <br /> Dhaka, Bangladesh
              </div>
            </div>
          </div>
          <div>
            <div className="text-black font-semibold mb-[20px] text-xl">
              Quick Links
            </div>
            <ul className="text-black text-xl">
              {quickLink.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                    <li className="my-1 relative group cursor-pointer">
                      <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-black text-md lg:text-lg">
                        {item.name}
                      </span>
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-black font-semibold mb-[20px] text-xl">
              Infromation
            </div>
            <ul className="text-black text-xl">
              {information.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                    <li className="my-1 relative group cursor-pointer">
                      <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-black text-md lg:text-lg">
                        {item.name}
                      </span>
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-black font-semibold mb-[20px] text-xl">
              Social Media
            </div>
            <div className="">
              <div className="flex lg:justify-center lg:items-center gap-2 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61573543544925&rdid=RQmxJXDLOLTO3VO2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZXGHZFpcL%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-[#2563EB] rounded text-[#fff] border border-[#fff]/0 hover:scale-95 hover:border-[#fff] hover:border duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded text-[#fff] border border-[#fff]/0 hover:scale-95 hover:border-[#fff] hover:border duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a> */}

                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded text-white border border-white/0 hover:scale-95 hover:border-white hover:border duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a> */}

                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 bg-[#F60000] rounded text-[#fff] border border-[#fff]/0 hover:scale-95 hover:border-[#fff] hover:border duration-300"
                  aria-label="youtube"
                >
                  <FaYoutube />
                </a> */}
              </div>

              {/* <div className="mt-2">
                <iframe
                  title="Healthy Harvest Agro Location
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.887678301881!2d90.35840537590783!3d23.751612289096654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a0f9dbecab%3A0x1a5d5cce63cc8693!2sFabrilife!5e0!3m2!1sen!2sbd!4v1712391482365!5m2!1sen!2sbd"
                  width="500vh"
                  height="160vh"
                  className="rounded-md border border-gray-300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7B50C] text-white text-center py-4 border-t">
        Copyright © 2025 Healthy Harvest Agro. All Right Reserved. Developed by{" "}
        <a target="_blank" href="https://okobiz.com/">
          okobiz
        </a>
        .
      </div>

      <DownFooter userCartProducts={userCartProducts} />
    </div>
  );
};
export default Footer;
