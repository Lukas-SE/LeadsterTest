"use client";

import { useEffect, useState, useTransition } from "react";
import ButtonGroup from "../ButtonGroup";
import Card from "../Card";
import Paginator from "../Paginator";

interface IData {
  name: string;
  description: string;
  url: string;
}

interface IProps {
  fetcher(category: string): Promise<Array<IData>>;
  categories: { name: string }[];
}

interface IState {
  page: number;
  videos: IData[] | null;
}

export default function VideoGrid({ fetcher, categories }: IProps) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(categories[0].name);
  const [grid, setGrid] = useState<IState>({
    page: 1,
    videos: null,
  });

  useEffect(() => {
    fetcher(category)
      .then((data: IData[]) => {
        setGrid({ ...grid, videos: data });
      })
      .then(() => {
        setLoading(false);
      });
  }, [category]);

  function filter(newCategory: string) {
    setCategory(newCategory);
    setGrid({...grid, page: 1});
  }

  function setPage(setpage: number) {
    setGrid({ ...grid, page: setpage });
  }
  if (loading) {
    return (
      <div className="space-y-10 pb-20">
        <div className="flex flex-col items-center space-y-16">
          <div className="border-b-2 lg:w-[calc(1080px+1.5rem*2)] md:w-[calc(360px*2+1.5rem)] w-[360px] ">
            <div className="w-full justify-between relative flex flex-col items-center lg:items-end lg:flex-row pt-4 pb-7">
              <div className="max-w-full flex space-x-1 lg:space-x-3 no-scrollbar  pr-12 md:pr-0 lg:pr-12">
                {[...Array(4)].map((i, index) => (
                  <div key={index} className="w-28 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                ))}
              </div>
              <div className="shrink-0 flex items-center lg:space-x-4 z-10 lg:pl-12 pt-5 lg:pt-0"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto border-b-2 pb-14">
            {[...Array(9)].map((x, i) => {
              return (
                <div key={i} className="w-[360px] xsm:w-[280px] drop-shadow-xl">
                  <div className="h-[12.5rem] w-full rounded-t-2xl bg-gray-200 animate-pulse"></div>
                  <div className="h-[88px] w-full bg-white rounded-b-2xl flex px-8"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="space-y-10 pb-20">
        <div className="flex flex-col items-center space-y-16">
          <div className="border-b-2 lg:w-[calc(1080px+1.5rem*2)] md:w-[calc(360px*2+1.5rem)] w-[360px] ">
            <ButtonGroup handler={filter} categories={[...categories]} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto border-b-2 pb-14">
            {grid.videos
              ?.slice((grid.page - 1) * 9, grid.page * 9)
              .map(({ name, description, url }, i) => (
                <Card
                  name={name}
                  data={{ description: description, url: url }}
                  key={i}
                />
              ))}
          </div>
        </div>
        <Paginator
          handle={setPage}
          pages={Math.ceil(grid.videos ? grid.videos.length / 9 : 1)}
          current={grid.page}
        />
      </div>
    );
  }
}
