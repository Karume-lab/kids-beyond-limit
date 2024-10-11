// components/Gallery.tsx
"use client";

import React from "react";
import MasonryGrid from "../components/MasonryGrid";


const Page: React.FC = () => {
  return (
    <div className="bg-white">
      <div className=" h-32 bg-gradient-to-b from-blue-darker  to-blue-light  px-10 md:px-40 flex items-center">
        <span className="text-white font-semibold text-5xl ">Gallery</span>

      </div>
      <MasonryGrid />
    </div>
  );
}

export default Page;