"use client"
import { useState } from "react";
import ButtonGroup from "../ButtonGroup";
import Card from "../Card";
import Paginator from "../Paginator";

interface IData {
  name: string;
  description: string;
  url: string;
}

interface IProps {
  videos: IData[];
  categories: {name: string}[]
}

export default function VideoGrid({ videos, categories }: IProps) {
  const [grid, setGrid] = useState({category: categories[0].name, page: 1})

  function setPage(setpage: number) {
    setGrid({...grid, page: setpage})
  }

  return (
    <div className="flex flex-col items-center space-y-16">
      <div className="border-b-2 lg:w-[calc(1080px+1.5rem*2)] md:w-[calc(360px*2+1.5rem)] w-[360px] ">
        <ButtonGroup
          categories={[
            { name: "teste 1" },
            { name: "teste2" },
            { name: "teste 3" },
            { name: "teste 4" },
            { name: "teste 5" },
          ]}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto">
        {videos.slice((grid.page - 1) * 9, grid.page * 9).map(({ name, description, url }, i) => (
          <Card name={name} data={{description: description, url: url}} key={i} />
        ))}
      </div>
      <Paginator handle={setPage} pages={Math.ceil(videos.length / 9)} current={grid.page} />
    </div>
  );
}
