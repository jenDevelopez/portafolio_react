import { FaLink,FaGithub } from 'react-icons/fa6'
import { PropsCardProject } from '../../types';
import { IoCloseSharp } from "react-icons/io5";

import useMyContext from '../../hooks/useMyContext';


function CardProject({ title, description, link, github, image, tags, className }: PropsCardProject) {
  const device = window.innerWidth;
  const img = device > 768 ? image.desktop : image.mobile;
  const {viewProjectInfo,setViewProjectInfo} = useMyContext()
  return (
    
    
    <article onClick={() => setViewProjectInfo(false)} className={`z-10 w-full mx-auto h-full bg-cover ${className} relative group  rounded-lg `} >
      
    <div className={`w-full h-full  absolute top-0  ${viewProjectInfo && 'opacity-75'}
    `} >
      <img className='object-cover object-top h-full rounded-lg' src={img} alt={`captura de pantalla del proyecto ${title}`} />
    </div>
    <div className={`w-full h-full opacity-0 bg-zinc-400
     absolute top-0 flex flex-col justify-center gap-4 p-4 
      ${viewProjectInfo && 'opacity-90 z-10'}
    
     `} >
      <span className='absolute top-4 right-6'><IoCloseSharp size={20}/></span>
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
