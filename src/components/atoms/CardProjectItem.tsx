import { FaLink,FaGithub } from 'react-icons/fa6'
import { PropsCardProject } from '../../types';


function CardProject({ title, description, link, github, image, tags, className }: PropsCardProject) {
  const device = window.innerWidth;
  const img = device > 768 ? image.desktop : image.mobile;
  return (
    <article className={`z-10 w-full mx-auto h-full bg-cover ${className} relative group border-2 border-gray-400 rounded-lg `} >
    <div className="w-full h-full  absolute top-0  group-active:opacity-50
    md:group-hover:opacity-50 " >
      <img className='object-cover object-top h-full rounded-xl border border-gray-100' src={img} alt={`captura de pantalla del proyecto ${title}`} />
    </div>
    <div className=" w-full h-full opacity-0 
     absolute top-0 flex flex-col justify-center gap-4 p-4 
     active:opacity-100 active:z-10
     md:hover:opacity-100 md:hover:z-10">
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
      <ul className="w-10/12 flex flex-wrap justify-start gap-2 my-1">
        {tags.map((tag,index) => (
          <li key={index}>
            <span
              className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
            >
              <span className={tag.class}>{tag.icon}</span>
              {tag.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {github && (
          <a target='_blank' href={github}>
            <FaGithub className="size-5 text-black" />
          </a>
        )}
        {link && (
          <a target='_blank' href={link}>
            <FaLink className="size-5 text-blue-500" />
          </a>
        )}
      </div>
    </div>
  </article>
  );

}

export default CardProject;
