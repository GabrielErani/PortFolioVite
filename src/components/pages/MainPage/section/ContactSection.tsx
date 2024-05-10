import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection: React.FC = () => {
  return (
    <section id="Contato" className="h-fit max-w-screen py-20">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="my-8 md:text-7xl text-3xl">Contato</h1>
        <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <a href="https://github.com/GabrielErani" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          GitHub
        </a>
        <a href="https://br.linkedin.com/in/gabriel-cirilo-erani-85b6391a9" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          LinkedIn
        </a>
        <a href="mailto:gabrielciriloerani@gmail.com" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          E-mail
        </a>
      </div>
    </section>
  );
};

export default ContactSection;