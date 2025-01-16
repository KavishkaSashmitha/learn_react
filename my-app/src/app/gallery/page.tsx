import React from 'react';
import { Folder, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  link: string;
  index: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="bg-teal-100 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <Folder className="text-teal-600 w-6 h-6" />
          <span className="text-sm font-light text-teal-700">
            {project.index}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-teal-900">{project.title}</h3>
          <ArrowUpRight className="text-teal-600 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </a>
  );
};

const Page = () => {
  // In a real application, you would import this from your JSON file
  const { projects } = {
    projects: [
      {
        id: 1,
        title: 'Travel Blog',
        link: 'https://project1.com',
        index: '01',
      },
      {
        id: 2,
        title: 'Adventure Maps',
        link: 'https://project2.com',
        index: '02',
      },
      {
        id: 3,
        title: 'Photo Gallery',
        link: 'https://project3.com',
        index: '03',
      },
      {
        id: 4,
        title: 'Travel Planner',
        link: 'https://project4.com',
        index: '04',
      },
      {
        id: 5,
        title: 'Destination Guide',
        link: 'https://project5.com',
        index: '05',
      },
      {
        id: 6,
        title: 'Travel Journal',
        link: 'https://project6.com',
        index: '06',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-teal-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
