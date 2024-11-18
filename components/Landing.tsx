import { MrDeHaviland } from "@/fonts";

import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-1 h-screen w-full">
      <main className="mx-auto text-center mt-16 md:mt-28 space-y-5 md:space-y-8 text-[#313638]">
        <h1 className="uppercase font-medium text-3xl md:text-6xl tracking-[18px]">
          Welcome
        </h1>
        <h4 className="uppercase tracking-[5px] text-sm">to the wedding of </h4>
        <h2 className="uppercase font-medium text-3xl tracking-[10px]">
          Shirley
        </h2>
        <div className="text-4xl tracking-[5px]">
          <h3 className={MrDeHaviland.className}>and</h3>
        </div>
        <h2 className="uppercase font-medium text-3xl tracking-[10px]">
          Andrew
        </h2>
        <h5 className="uppercase tracking-[4px]">
          13.04.2024 &#x2022; Chigwell
        </h5>
      </main>
    </div>
  );
};

export default Landing;
