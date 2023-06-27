import Banner from "@/components/Banner";
import DemoSection from "@/components/DemoSection";
import DownloadButton from "@/components/DownloadButton";
import VideoGrid from "@/components/VideoGrid";
import { prisma } from "@/lib/prisma";

export default function Home() {
  async function getAllCategories() {
    prisma.category.findMany();
  }
  async function getVideos(category: string) {
    prisma.videos.findMany({
      where: { category: { name: category } },
    });
  }
  return (
    <>
      <DownloadButton file="doc">Teste</DownloadButton>
      <Banner />
      <VideoGrid
        categories={[{ name: "temp" }]}
        videos={[
          {
            name: "Como aumentar sua Geração de Leads feat. Traktor",
            description: " aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa  aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa aaaaaaa",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
          {
            name: "test",
            description: "teste teste testando",
            url: "https://www.youtube.com/watch?v=DrxiNfbr63s&ab_channel=Vercel",
          },
        ]}
      />
      <DemoSection />
    </>
  );
}
