import React from "react";
import Image from "next/image";
import HeadAsset from "../../../public/images/asset-header.png";
export default function Banner() {
  return (
    <div className="flex items-center justify-center w-screen bg-leadster-100 h-[62vh] flex-col">
      <div className="rounded-[0.9rem] rounded-bl-[0.25rem] border-2 border-leadster-400 text-leadster-400 font-extrabold text-sm p-1 px-5 mb-5">
        <p>WEBINARS EXCLUSIVOS</p>
      </div>

      <h2 className="text-2xl md:text-5xl font-medium text-leadster-0">
        Menos Conversinha,
      </h2>
      <div className="relative flex flex-col text-3xl md:text-[5.5rem] xsm:text-[1.8rem] font-bold">
        <h1 className=" text-[rgba(155,44,44,0)] leading-[11vmin] bg-clip-text bg-gradient-to-r from-[#2c83fb] from-70% to-[#1f76f0] px-7">
          Mais Conversão
        </h1>
        <span className="h-[1px] bg-leadster-0 bg-opacity-20 w-full my-5"></span>
      </div>
      <p className="text-center text-base md:text-[1.125rem] xsm:text-[0.8rem] font-semibold text-leadster-0">
        Conheça as estratégias que
        <span className="font-extrabold"> mudaram o jogo<br className="md:hidden"/> </span>
        e como aplicá-las no seu negócio
      </p>
    </div>
  );
}
