import "./MainPage.css";
import HeaderMainPage from "./HeaderMainPage";
import ProjectCard from "./ProjectCard";

const MainPage = () => {
  return (
    <>
      <HeaderMainPage />
      <section id="SobreMim" className="min-h-screen h-fit max-w-screen ">
        <div className="flex justify-center items-center flex-col w-full">
          <h1 className="my-8 md:text-7xl text-3xl">Sobre Mim</h1>
          <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
        </div>
        <p className="text-xl pt-sans-regular md:p-0 p-4 mb-8">
          Olá! Meu nome é Gabriel, e estou atualmente no segundo ano do curso de
          Sistemas de Informação na Faculdade Barretos, no interior de São
          Paulo.<br/> Minha jornada na área de tecnologia começou por curiosidade e
          logo se transformou em uma paixão pela programação e pelo vasto campo
          da TI.<br/> Desde o início da minha graduação em 2023, tenho me dedicado a
          absorver o máximo possível sobre desenvolvimento de software e
          sistemas de informação.<br/> A cada novo projeto e desafio, vejo uma
          oportunidade de aplicar meus conhecimentos e crescer como
          profissional.<br/> O que me encanta na tecnologia é sua capacidade de
          transformar ideias em soluções concretas que podem simplificar a vida
          das pessoas.<br/> Estou em constante aprendizado, sempre buscando maneiras
          de inovar e de aprimorar minhas habilidades em programação e
          desenvolvimento web.<br/> Agradeço por visitar meu portfólio e convido você
          a conhecer mais sobre meus projetos e a trajetória que estou
          construindo na área de TI.
        </p>
      </section>
      <section className=" h-fit max-w-screen justify-center items-center flex flex-col" id="Projetos">
        <div className="flex justify-center items-center flex-col w-full">
          <h1 className="my-8 md:text-7xl text-3xl">Projetos</h1>
          <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4.">
          <ProjectCard
            imageSrc="\panificadora37Projeto.jpeg"
            projectName="Site para uma padaria de família"
            projectDescription="Desenvolvi esse site por conta de um projeto da faculdade"
            demoLink="https://panificadora37.com.br"
          />
          <ProjectCard
            imageSrc="\iphoneCalculatorCopy.png"
            projectName="Nome do Projeto 2"
            projectDescription="Criei uma copia funcional da calculadora do Iphone para treinar minhas habilidades em React."
            demoLink="https://iphone-calculator-three.vercel.app/"
          />
          <ProjectCard
            imageSrc="\iphoneCalculatorCopy.png"
            projectName="Nome do Projeto 3"
            projectDescription="Criei uma copia funcional da calculadora do Iphone para treinar minhas habilidades em React."
            demoLink="https://iphone-calculator-three.vercel.app/"
          />
        </div>
      </section>
    </>
)};

export default MainPage;