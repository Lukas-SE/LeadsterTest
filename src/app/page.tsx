import Banner from "@/components/Banner";
import ButtonGroup from "@/components/ButtonGroup";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <>
      <Banner />
      <ButtonGroup
        categories={[
          { name: "Agências" },
          { name: "Chatbot" },
          { name: "Marketing Digital" },
          { name: "Geração de Leads" },
          { name: "Mídia Paga" }
        ]}
      />
      <DemoSection />
    </>
  );
}
