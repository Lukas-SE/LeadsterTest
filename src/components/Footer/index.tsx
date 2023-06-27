import Image from "next/image";
import logo from "public/images/logo.png";
export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col items-center">
      <div className="my-10">
        <Image width={240} alt="leadster logo" src={logo} />
        <p className="text-[#627397] text-sm">
          Transformando visitantes em clientes.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 content-start pb-16">
        <div className="space-y-8 ">
          <p className="font-bold text-leadster-0">Links Principais</p>
          <div className=" flex flex-col justify-start text-[#838EAB] space-y-4 text-sm">
            {["Home", "Ferramenta", "Preços", "Contato"].map((item, i) => {
              return <p key={i} className="cursor-pointer">{item}</p>;
            })}
          </div>
        </div>
        <div className="space-y-8">
          <p className="font-bold text-leadster-0">Cases</p>
          <div className=" flex flex-col justify-start text-[#838EAB] space-y-4 text-sm">
            {[
              "Geração de Leads B2B",
              "Geração de Leads em Software",
              "Geração de Leads em Imobiliária",
              "Cases de Sucesso",
            ].map((item, i) => {
              return <p key={i} className="cursor-pointer">{item}</p>;
            })}
          </div>
        </div>
        <div className="space-y-8">
          <p className="font-bold text-leadster-0">Materiais</p>
          <div className=" flex flex-col justify-start text-[#838EAB] space-y-4 text-sm">
            {[
              "Blog",
              "Parceria com Agências",
              "Guia Definitivo do Marketing",
              "Materiais Gratuitos",
            ].map((item, i) => {
              return <p key={i} className="cursor-pointer">{item}</p>;
            })}
          </div>
        </div>
        <div className="space-y-8">
          <p className="font-bold text-leadster-0">Siga a Leadster</p>
          <div className=" flex flex-col justify-start text-sm space-y-4">
            <div className="flex space-x-4 mb-4">
              <div className="rounded-full bg-[#F7F8FB] h-11 aspect-square flex items-center justify-center cursor-pointer">
                <svg
                  className="translate-y-[-1px]"
                  fill="#838EAB"
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                >
                  <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
                </svg>
              </div>
              <div className="rounded-full bg-[#F7F8FB] h-11 aspect-square flex items-center justify-center cursor-pointer">
                <svg
                  fill="#838EAB"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </div>
              <div className="rounded-full bg-[#F7F8FB] h-11 aspect-square flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#838EAB"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </div>
            </div>
            <p className="text-leadster-0">
              E-mail:{" "}
              <span className="text-[#838EAB]">contato@leadster.com.br</span>
            </p>
            <p className="text-leadster-0">
              Telefone: <span className="text-[#838EAB]">(42) 98828-9851</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-center w-full items-center justify-around py-8 text-sm border-t border- border-opacity-30">
        <p className="text-[#838EAB]">Copyright © 2015 - 2022 Todos os direitos reservados | <span className="text-leadster-400">Leadster</span></p>
        <p className="text-[#838EAB]">Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
      </div>
    </footer>
  );
}
