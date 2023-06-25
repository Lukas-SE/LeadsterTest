import Image from "next/image";
import Comparativo from "public/images/comparativo_img_CTA.png";
import selo from "public/images/selo_RD.png";
import rating from "public/icons/rating.webp";
import card from "public/icons/no-card-dark.webp";
import LeadsterButton from "@/components/LeadsterButton";

export default function DemoSection() {
  return (
    <section className="bg-leadster-100 pt-16 flex flex-col lg:flex-row flex-1 text-leadster-0 font-medium items-center">
      <div className="flex flex-1 items-end justify-center lg:justify-end shrink-0">
        <Image src={Comparativo} alt="comparativo" />
      </div>
      <section className="flex flex-col flex-1 items-start justify-center ">
        <div className="lg:pl-24">
          <div className="text-2xl text-center lg:text-left md:text-[2.625rem]">
            <h3>Pronto para triplicar sua</h3>
            <h3 className="font-extrabold md:my-4 text-[1.8rem] md:text-5xl">
              Geração de Leads?
            </h3>
          </div>
          <p className="lg:text-xl mb-5 text-md mt-2 text-center lg:text-left">
            Criação e ativação em{" "}
            <span className="font-bold">
              <br className="hidden xsm:inline" />4 minutos.
            </span>
          </p>
          <div className="border-t-2 border-opacity-20 border-leadster-0 pt-6 space-y-5">
            <div className="md:space-x-5 flex flex-col md:flex-row items-center lg:justify-start justify-center py-5 lg:py-0">
              <LeadsterButton>ver demonstração</LeadsterButton>
              <Image
                src={selo}
                alt="selo apps mais usado"
                className="mt-8 md:mt-0"
              />
            </div>
            <div className="flex flex-col md:flex-row xsm:text-sm lg:text-[0.83vw] justify-center lg:justify-start">
              <div className="flex items-center space-x-1">
                <Image src={card} alt="cartão" />
                <p className="md:pr-3">
                  <span className="font-bold">Não </span>
                  é necessário Cartão de Crédito
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <Image
                  src={rating}
                  alt="rating"
                  className="border-leadster-0 md:border-l md:pl-3"
                />
                <p>
                  <span className="font-bold">4.9</span>/5 média de satisfação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
