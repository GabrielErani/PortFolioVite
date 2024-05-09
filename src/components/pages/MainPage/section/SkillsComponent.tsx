import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SkillsSection: React.FC = () => {
  return (
    <section id="Habilidades" className="h-fit max-w-screen py-20">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="my-8 md:text-7xl text-3xl">Habilidades</h1>
        <span className="h-3 bg-blue-400 w-10 rounded-full mb-16"></span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 p-4">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHtml5} size="4x" className="mb-2" />
          <p className="text-lg">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="mb-2" />
          <p className="text-lg">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faJs} size="4x" className="mb-2" />
          <p className="text-lg">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCode} size="4x" className="mb-2" />
          <p className="text-lg">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faReact} size="4x" className="mb-2" />
          <p className="text-lg">React</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;