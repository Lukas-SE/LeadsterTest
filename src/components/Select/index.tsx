import React, { ReactNode } from "react";

interface IProps {
  options: string[];
}

export default function Select({ options }: IProps) {
  return (
    <div className="shrink-0 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        className="rotate-180 scale-y-[0.6] scale-x-[1.4] absolute top-0 bottom-0 my-auto right-3 pointer-events-none"
      >
        <path
          stroke="none"
          fill="#1C3C50"
          d="M6.1339745962156 2.8038475772934a1 1 0 0 1 1.7320508075689 0l4.2679491924311 7.3923048454133a1 1 0 0 1 -0.86602540378444 1.5l-8.5358983848622 0a1 1 0 0 1 -0.86602540378444 -1.5"
        ></path>
      </svg>
      <select className="shrink-0 text-sm lg:text-base border px-3 py-2 outline-none font-bold border-leadster-0 rounded-xl pr-8">
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
