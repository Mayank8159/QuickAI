import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-500 bg-white">
      <div className="flex flex-col gap-10 md:flex-row justify-between border-b border-gray-300 pb-8">
        {/* Logo + Description */}
        <div className="md:max-w-md">
          <img className="h-9" src={assets.logo} alt="dummyLogoDark" />
          <p className="mt-4 text-sm leading-relaxed">
            QuickAI is your go-to platform for AI-powered content creation tools.
          </p>
        </div>

        {/* Links + Newsletter */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-end md:items-start w-full">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-4 text-gray-800 text-base">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <h2 className="font-semibold text-gray-800 mb-4 text-base">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="border border-gray-300 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full h-10 rounded px-3 text-sm"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-primary w-full sm:w-28 h-10 text-white rounded text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-6 text-center text-xs md:text-sm pb-6">
        Copyright 2025 ©{" "}
        <a
          href="https://mayank-portfolio81.vercel.app/"
          className="underline hover:text-gray-700"
        >
          Mayank Kumar Sharma
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;