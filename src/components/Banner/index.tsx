import Image from "next/image";
export default function Banner() {
  return (
    <div className="flex flex-1 items-center justify-center bg-leadster-100 h-[62vh] flex-col">
      <div className="rounded-[0.9rem] rounded-bl-[0.25rem] border-2 border-leadster-400 p-1 px-5 mb-5">
        <p className="text-leadster-400 font-extrabold text-sm">
          WEBINARS EXCLUSIVOS
        </p>
      </div>
      <h2 className="text-2xl md:text-5xl font-medium text-leadster-0">
        Menos Conversinha,
      </h2>
      <div className="relative flex flex-col text-3xl md:text-[5.5rem] xsm:text-[1.8rem] font-bold">
        <h1 className=" text-transparent md:leading-[120px] bg-clip-text bg-gradient-to-r from-[#2c83fb] from-70% to-[#1f76f0]">
          Mais Conversão
        </h1>
        <div className="w-[15px] h-[10px] md:w-[49px] md:h-[32px] absolute top-1 right-[-5px] md:top-4 md:right-[-20px]">
          <Image
            src="/images/asset-header.png"
            fill={true}
            alt="head asset"
          />
        </div>
        <span className="h-[1px] bg-leadster-0 bg-opacity-20 w-full my-5"></span>
      </div>
      <p className="text-center text-base md:text-[1.125rem] xsm:text-[0.8rem] font-semibold text-leadster-0">
        Conheça as estratégias que{" "}
        <span className="font-extrabold">
          mudaram o jogo <br className="md:hidden" />
        </span>
        e como aplicá-las no seu negócio
      </p>
    </div>
  );
}
