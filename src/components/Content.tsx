import data from '@/data/data.json';
import Link from 'next/link';

const Content = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl text-italic  mb-6">Projects</h2>
      <div className="">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="max-w-xl"
          >
            <Link href={project.link} className="text-xl font-semibold text-blue-500 underline mb-2">{project.name}</Link>
            <p className="text-gray-700 mb-4 mt-3">{project.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
