"use client";

// scroll button para pc

import { useRef, useState } from "react";
import LeadsterButton from "../LeadsterButton";
import Select from "../Select";

interface IProps {
  categories: { name: string }[];
}

export default function ButtonGroup({ categories }: IProps) {
  const [toggle, setToggle] = useState(0);
  return (
    <div className="justify-center relative flex flex-col items-center lg:items-end lg:flex-row pt-5 pb-8">
      <div className="w-1/5 md:hidden right-0 pointer-events-none h-full absolute bg-gradient-to-l from-white via-white to-100%"></div>
      <div className="max-w-[90vw] flex overflow-x-scroll space-x-1 lg:space-x-3 no-scrollbar px-3 pr-12 md:pr-0 lg:pr-12">
        {categories.map(({ name }, i) => (
          <LeadsterButton
            variation="select"
            click={() => {
              setToggle(i);
            }}
            active={i == toggle ? true : false}
            key={name}
          >
            {name}
          </LeadsterButton>
        ))}
      </div>
      <div className="shrink-0 flex items-center lg:space-x-4 text-leadster-0 z-10 lg:pl-12 pt-5 lg:pt-0">
        <p className="whitespace-nowrap font-extrabold hidden lg:inline">
          Ordenar por
        </p>
        <Select options={["Data de Publicação"]} />
      </div>
    </div>
  );
}
