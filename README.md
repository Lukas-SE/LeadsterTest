<p align="center">
  <img src="https://i.imgur.com/nxiu69j.png" width="180" heigth="180">
</p>

<h1 align="center">
  📄 <a href="https://leadster-test-umber.vercel.app/">LEADSTER</a> 📄
</h1>
<p align="center">☝️</p>
<p align="center">Clique no link acima para visualizar o projeto!</p>

<h2 align="center">
  SOBRE
</h2>

### Features & Informações

⚛️ Desenvolvido (principalmente) com: **Next.js 13**, **TypeScript**, **prisma** e **tailwind**. 
- A aplicação foi desenvolvida de forma escalável, todos componentes são customizados, reutilizaveis e responsívos, aceitando diversos tipos de props para uma customização completa!
- Foi utilizado o Next 13, a mais nova versão do Next. trazendo de novo:
   - **O novo App dir:** Uma nova forma de criar rotas, loadings, erros, templates e controlar metadata de forma mais dinâmica e versatil.
   - **Fim do "getStaticProps" e "getServersideProps":** Diversos hooks e funções como essas não existem mais, agora, **um componente pode ser assíncrono!** podendo realizar o fetch de dados diretamente nele mesmo ou até mesmo **se conectar diretamente com o banco de dados**. 
   - **Server components:** Anteriormente, um componente gerava seu HTML no servidor e após cada requisição, passava por um processo chamado de "hydration", que gerava todo o javascript no client. Com os server components, componentes que não necessitam de interação podem ser gerados completamente no servidor (até mesmo seu javascript), já retornando "prontos" para o client, reduzindo muito o javascript gerado client-side e causando um bom impacto no SEO da página. Chamadas de API em server components **não** são exibidas no client, já que são cacheadas server-side por padrão!.
   - **Server actions (experimental no momento):** funções especiais que rodam serverside e podem ser passadas para client components também, ajudando a realizar mutações de dados server-side reduzir o javascript, e impulsionar formularios.
   - **E muio mais!:** Esses são apenas alguns dos recursos no novo Next13!

🐘 Banco de dados PostgreSQL serverless:
- **Galeria de vídeos escalavel:** Os url dos vídeos, titulos, categorias, descrições, datas de criação e thumbnail estão armazenados em um banco de dados relacional serverless e podem ser facilmente criados, deletados, editados e lidos em tempo real na aplicação.

💎 Prisma: o ORM que cuida de tudo relacionado ao seu banco de dados para você!
- Prisma automatiza diversas tarefas relacionadas ao banco de dados dentro do código por meio de models, trazendo intellisense avançada e criação automatica de tabelas e relações. Com o prisma, é praticamente impossivel criar querries que não funcionam.
- Caso no futuro houvesse a necessidade de migrar para outro banco de dados relacional, ou até mesmo um não relacional como MongoDB, com o prisma, isso e muito mais é feito de forma automatica apenas trocando o url do database e rodando um script, tornando a aplicação mais flexivel e escalavel.




A aplicação foi desenvolvida mantendo fidelidade ao protótipo, garantindo a funcionalidade. No entanto, também foi considerada a escalabilidade futura do projeto. Cada componente foi projetado com reutilização em mente, permitindo que sejam facilmente adaptados a diferentes casos de uso por meio de props.

Um exemplo disso é o componente "LeadsterButton". Por padrão, ele funciona como um botão grande, mas a propriedade "variation" possibilita a passagem dos valores "paginator" ou "select", permitindo uma variação sem a necessidade de estilização adicional. Isso torna o componente flexível e facilmente adaptável a diferentes contextos.

Outro exemplo é o componente "Modal", que aceita childrens para criar uma modal completa com funcionalidades avançadas, incluindo ativação e animações integradas. Esses componentes essenciais, como a navbar e o footer, são inseridos no arquivo layout.tsx. Aqui, o Next.js faz uso de caching para persistir os componentes e seus estados em todas as rotas futuras da aplicação, garantindo uma boa performance.

todos os componentes foram desenvolvidos utilizando o Tailwind CSS, que é nativamente suportado na nova versão do Next.js 13. Além disso, as animações foram criadas utilizando tanto o Tailwind CSS quanto o Framer Motion, proporcionando uma experiência visualmente atraente e interativa para os usuários. Essa abordagem cuidadosa e focada na escalabilidade futura do projeto assegura que a aplicação possa crescer e se adaptar facilmente a novas necessidades e requisitos ao longo do tempo.
Os vídeos e as categorias são obtidos de um banco de dados PostgreSQL serverless, que foi planejado e populado com dados utilizando um ORM chamado Prisma. Essa escolha traz uma série de vantagens significativas para o projeto e seu desenvolvimento futuro.

Com a introdução dos server components no Next.js 13, a aplicação apresenta resultados promissores em motores de busca e oferece diversas outras vantagens relacionadas à otimização para mecanismos de pesquisa (SEO).

Além disso, é importante destacar que o site é totalmente responsivo!  desenvolvido para funcionar em qualquer dispositivo, independentemente do tamanho da tela.

<h2 align="center">
  INSTALAÇÃO LOCAL
</h2>

É necessário possuir o [Node.js](https://nodejs.org/en) instalado em seu computador para poder instalar localmente.
Abra um terminal no diretório onde pretende clonar o repositório e execute os comandos:
```bash
git clone https://github.com/Lukas-SE/LeadsterTest.git
cd LeadsterTest
npm i
```
Agora crie um arquivo "**.env**" na pasta LeadsterTest e cole as variaveis de ambiente enviadas no email do teste com o assunto "**Front-End - Finalizado - Lucas Andrew**".
Salve e execute os comandos:
```bash
npx prisma generate
npm run dev
```
A aplicação ira iniciar no url localhost exibido no console.
Você pode criar, deletar, atualizar os videos e até mesmo adicionar novas categorias caso queira utilizando o prisma.
