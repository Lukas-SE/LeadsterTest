"use client"
import React from "react";

interface IProps {
  file: "xls" | "doc" | "ppt" | "zip";
  children: string;
}

export default function index({ children, file }: IProps) {
    function handleClick() {
        window.location.href = "https://www.linkedin.com/in/lucas-andrew-fernandes-santos-623bb0201/"
    }
  return (
    <button onClick={handleClick} className={file == "xls"
    ? "bg-[#C2F4EA] rounded text-[#00B185] mr-2"
    : file == "doc"
    ? "bg-[#C2E6FF] rounded text-[#0095F0] mr-2"
    : file == "zip"
    ? "bg-[#E8EEF3] rounded text-[#7C8991] mr-2"
    : "bg-[#FFF8D0] rounded text-[#AD9427] mr-2"}>
      <div className="flex items-center text-sm font-bold rounded">
        <div
          className={
            file == "xls"
              ? "bg-[#9FEFDF] aspect-square p-2 rounded-l"
              : file == "doc"
              ? "bg-[#A1D9FF] aspect-square p-2 rounded-l"
              : file == "ppt"
              ? "bg-[#FFF1A0] aspect-square p-2 rounded-l"
              : "bg-[#D0DEE7] aspect-square p-2 rounded-l"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={
              file == "xls"
                ? "#00B185"
                : file == "doc"
                ? "#0095F0"
                : file == "zip"
                ? "#7C8991"
                : "#AD9427"
            }
            viewBox="0 0 16 16"
          >
            <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
            <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
          </svg>
        </div>
        <p className="px-2">{`${children}.${file}`}</p>
      </div>
    </button>
  );
}
