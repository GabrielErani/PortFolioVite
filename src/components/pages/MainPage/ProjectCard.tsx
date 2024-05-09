import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  projectName: string;
  projectDescription: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  projectName,
  projectDescription,
  demoLink,
}) => {
  return (
    <div className="flex flex-col items-center mb-12">
      <img src={imageSrc} alt={projectName} className="rounded-xl mb-4 max-w-[300px] h-[200px] object-cover" />
      <h2 className="text-2xl mb-2">{projectName}</h2>
      <p className="text-lg text-center mb-4 h-[80px]">{projectDescription}</p>
      <div>
        <a href={demoLink} target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
          Ver projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
