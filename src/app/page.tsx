
import Banner from "@/components/Banner";
import DemoSection from "@/components/DemoSection";
import VideoGrid from "@/components/VideoGrid";
import { prisma } from "@/lib/prisma";

interface IData {
  name: string;
  description: string;
  url: string;
}

export default async function Home() {

  const categories = await prisma.category.findMany();

  async function getVideos(category: string) {
    "use server"
    let data = await prisma.videos.findMany({
      where: { category: { name: category } },
    });
    return data as IData[]
  }
  return (
    <>
    
      <Banner />
      <VideoGrid
        categories={categories}
        fetcher={getVideos}
      />
      <DemoSection />
    </>
  );
}
