import { FC } from 'react';
import Link from 'next/link';
import {ExternalLink} from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}) => {
  return (
    <div className="group rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black p-6 transition-all hover:border-neutral-400 dark:hover:border-neutral-500">
      {imageUrl && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={`${title} preview`}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Code</span>
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Example usage component
const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. And is hosted on Railway.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/DenisGremaud/my-portfolio',
      liveUrl: 'https://denisgremaud.me',
      imageUrl: '/img/projects/portfolio.png',
    },
    // Add more projects here
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export { ProjectCard, ProjectsGrid };