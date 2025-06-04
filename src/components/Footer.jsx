import React from "react";
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mt-5 w-full max-w-screen flex justify-center sm:justify-end items-center">

      <div className="flex items-center">
        <a
          href="https://github.com/karad-tanmay/dictionary-lookup-app"
          target="_blank"
          className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white hover:bg-white/30 transition-all duration-200"
          aria-label="GitHub Repository"
        >
          <Github className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;