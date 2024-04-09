import "./MainPage.css";
import HeaderMainPage from "./HeaderMainPage";

const MainPage = () => {
  return (
    <>
      <HeaderMainPage />
      <section id="SobreMim" className="min-h-screen h-fit max-w-screen">
        <div className="flex justify-center items-center flex-col w-full">
          <h1 className="my-16 md:text-7xl text-3xl">Sobre Mim</h1>
          <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
        </div>
        <p className="text-xl pt-sans-regular">
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
    </>
  );
};

export default MainPage;
