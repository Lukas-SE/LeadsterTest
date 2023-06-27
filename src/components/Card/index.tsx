import Image from "next/image";
import Modal from "../Modal";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DownloadButton from "../DownloadButton";
import ReactPlayer from "react-player";

interface IData {
  description?: string;
  url: string;
  imageurl?: string;
}

interface IProps {
  data: IData;
  name: string;
}

export default function index({ data, name }: IProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function handleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && (
          <Modal handler={handleModal}>
            <div className="bg-white rounded-2xl flex-col flex grow-0 w-[90vw] lg:w-[30vw] font-bold items-center overflow-hidden lg:overflow-y-auto overflow-y-scroll max-h-[90vh]">
              <div className="w-full h-fit">
                <div className="w-full bg-leadster-400 h-[6px]"></div>
                <div className="px-4 py-2">
                  <svg
                    onClick={handleModal}
                    className="ml-auto cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#1C3C50"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                </div>
              </div>
              <p className="text-xl max-w-[80%] md:max-w-[60%] text-center text-leadster-0 mb-6">
                <span className="text-leadster-400">Webinar: </span>
                {name}
              </p>
              <ReactPlayer width={"100%"}  controls className="w-full aspect-video" url={data.url} />
              <div className="py-2 px-4 w-full">
                <div className="w-full py-2">
                  <p className="border-b-2 border-leadster-0 border-opacity-20 pb-1">
                    Descrição
                  </p>
                  <p className="font-normal pt-1 max-h-24 overflow-y-scroll">
                    {data.description != ""
                      ? data.description
                      : "Sem descrição..."}
                  </p>
                </div>
                <div className="w-full py-2">
                  <p className="border-b-2 border-leadster-0 border-opacity-20 pb-1">
                    Downloads
                  </p>
                  <div className="pt-4">
                    <DownloadButton file="xls">Spreadsheet</DownloadButton>
                    <DownloadButton file="doc">Document</DownloadButton>
                    <DownloadButton file="ppt">Presentation</DownloadButton>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
      <div className="w-[360px] xsm:w-[280px] relative drop-shadow-xl font-bold text-leadster-0 text-lg leading-6 group hover:text-leadster-400 transition-all duration-300">
        <div
          onClick={handleModal}
          className="bg-leadster-400 absolute rounded-t-2xl bg-opacity-0 duration-300 transition-all group-hover:bg-opacity-25 w-full h-[12.5rem] z-10 cursor-pointer flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            className="rotate-90 scale-[1.3] opacity-0 group-hover:opacity-100 transition-all translate-y-16 group-hover:translate-y-0 delay-200 duration-300"
          >
            <path
              fill="#FFFFFF"
              d="M22.803847577293 6.287187078898a6 6 0 0 1 10.392304845413 0l21.607695154587 37.425625842204a6 6 0 0 1 -5.1961524227066 9l-43.215390309173 0a6 6 0 0 1 -5.1961524227066 -9"
            ></path>
          </svg>
        </div>
        <div className="h-[12.5rem] relative w-full overflow-hidden rounded-t-2xl cursor-pointer">
          <Image
            className="object-cover"
            src={data.imageurl ?? "/images/thumbnail.png"}
            alt="thumbnail"
            fill={true}
          />
        </div>
        <div className="h-[88px] w-full bg-white overflow-hidden rounded-b-2xl flex items-center px-8">
          <p onClick={handleModal} className="cursor-pointer line-clamp-2">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
