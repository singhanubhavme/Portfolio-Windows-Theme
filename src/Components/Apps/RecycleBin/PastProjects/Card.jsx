import Image from 'next/image';

function Card({ project, index, colors }) {
  return (
    <div className="mx-auto min-h-[400px] w-[300px] overflow-hidden rounded-lg bg-white">
      <Image
        className="h-[180px] w-full"
        src={project.img}
        alt={project.title}
      />
      <div className="p-3">
        <div className="pt-2 text-base font-bold">{project.title}</div>
        <div className={`py-2 text-sm font-[500] ${colors[index]}`}>
          {project.tech}
        </div>
        <div className="text-justify text-gray-700">{project.description}</div>
      </div>
    </div>
  );
}

export default Card;
