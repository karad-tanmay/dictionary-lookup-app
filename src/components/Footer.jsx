import React from "react";
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mt-5 w-full max-w-screen flex justify-center sm:justify-end items-center px-5 mb-5">

      <div className="flex items-center">
        <a
          href="https://github.com/karad-tanmay/dictionary-lookup-app"
          target="_blank"
          className="bg-violet-500 backdrop-blur-md p-3 rounded-full border-2 border-violet-800 hover:bg-violet-700 transition-all duration-200"
          aria-label="GitHub Repository"
        >
          <Github className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;