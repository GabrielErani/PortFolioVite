import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="SobreMim" className="h-fit max-w-screen py-20">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="my-8 md:text-7xl text-3xl">Sobre Mim</h1>
        <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
      </div>
      <p className="text-xl pt-sans-regular md:p-0 p-4 mb-8">
        Sou Gabriel, estudante de Sistemas de Informação na Faculdade Barretos
        desde 2023. Apaixonado por tecnologia, foco em desenvolvimento de
        software e inovação em TI.
        <br />
        Agradeço sua visita ao meu portfólio.
      </p>
    </section>
  );
};

export default AboutSection;