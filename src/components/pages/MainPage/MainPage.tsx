import "./MainPage.css";
import HeaderMainPage from "./HeaderMainPage";
import ProjectCard from "./ProjectCard";
import AboutSection from "./section/AboutComponent";
import SkillsSection from "./section/SkillsComponent";


const MainPage = () => {
  return (
    <>
    <HeaderMainPage />
    <AboutSection />
    <SkillsSection />
    <section
      className="h-fit max-w-screen justify-center items-center flex flex-col py-20"
      id="Projetos"
    >
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="my-8 md:text-7xl text-3xl">Projetos</h1>
        <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        <ProjectCard
          imageSrc="\panificadora37Projeto.jpeg"
          projectName="Site para uma padaria de família"
          projectDescription="Desenvolvi esse site por conta de um projeto de extensão da faculdade"
          demoLink="https://panificadora37.com.br"
        />
        <ProjectCard
          imageSrc="\iphoneCalculatorCopy.png"
          projectName="Cópia Funcional da Calculadora do Iphone"
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
  );
};

export default MainPage;
