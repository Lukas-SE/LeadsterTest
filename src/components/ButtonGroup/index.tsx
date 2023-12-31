"use client";

import { useState } from "react";
import LeadsterButton from "../LeadsterButton";
import Select from "../Select";

interface IProps {
  categories: { name: string }[];
  handler(category: string): void;
}

export default function ButtonGroup({ categories, handler }: IProps) {
  function handleClick(data: string, index: number) {
    handler(data);
    setToggle(index);
    
  }
  const [toggle, setToggle] = useState(0);
  return (
      <div className="w-full justify-between relative flex flex-col items-center lg:items-end lg:flex-row pt-4 pb-7">
        <div className="w-1/5 md:hidden right-0 top-0 translate-x-[1px] pointer-events-none h-full absolute bg-gradient-to-l from-white via-white to-100%"></div>
        <div className="max-w-full flex overflow-x-scroll space-x-1 lg:space-x-3 no-scrollbar  pr-12 md:pr-0 lg:pr-12">
          {categories.map(({ name }, i) => (
            <LeadsterButton
              variation="select"
              click={() => {
                handleClick(name, i)
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
