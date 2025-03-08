import { FaHtml5, FaCss3Alt, FaWordpressSimple, FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { DiMysql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import Section from "../molecules/Section";
import Carousel from "../atoms/Carousel";
import { type Tag,PropsCardProject } from "../../types";

function Projects() {
  const TAGS: { [key: string]: Tag }  = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: <TbBrandNextjs />,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: <SiTailwindcss />,
    },
    REACT: {
      name: "React JS",
      class: "bg-sky-500 text-white",
      icon: <FaReact />,
    },
    ZUSTAND: {
      name: "Zustand",
      class: "bg-yellow-500 text-gray-900",
      icon: <GiBearFace />,
    },
    FIREBASE: {
      name: "Firebase",
      class: "bg-blue-500 text-white",
      icon: <IoLogoFirebase />,
    },
    HTML: {
      name: "HTML5",
      class: "bg-orange-500 text-white",
      icon: <FaHtml5 />,
    },
    CSS: {
      name: "CSS3",
      class: "bg-sky-700 text-white",
      icon: <FaCss3Alt />,
    },
    WORDPRESS: {
      name: "Wordpress",
      class: "bg-blue-700 text-white",
      icon: <FaWordpressSimple />,
    },
    PHP: {
      name: "PHP",
      class: "bg-purple-700 text-white",
      icon: <FaPhp />,
    },
    MYSQL: {
      name: "MySQL",
      class: "bg-white text-blue-700",
      icon: <DiMysql />
    },
    JAVSCRIPT: {
      name: "Javascript",
      class: "bg-yellow-300 text-white-700",
      icon: <SiJavascript />
    },
    JQUERY: {
      name: "jquery",
      class: "bg-white text-blue-800",
      icon: <SiJquery />
    }
  };
  const proyectos: PropsCardProject[] = [
    {
      title: "Anima Animalis",
      description: "Pagina dinamica con CMS a una clinica veterinaria",
      link: "https://animaanimalis.es/",
      image: "/anima-animalis.webp",
      tags: [TAGS.HTML, TAGS.CSS, TAGS.WORDPRESS],
      className: "text-gray-700 left-0",
      backgroundImage: "",
      key: "prj1",
    },
    {
      title: "Star Wars Starships",
      description:
        "Pagina de naves de Star Wars, con su informacion, pilotos y películas en la que aparecen",
      link: "https://star-wars-aplication.netlify.app",
      github: "https://github.com/jenDevelopez/star-wars/",
      image: "/star_wars.webp",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.ZUSTAND, TAGS.FIREBASE],
      className: "text-white left-0",
      backgroundImage: "",
      key: "prj2",
    },
    {
      title: "Lleo XIII",
      description:
        "Página de la escuela Lleo XIII en Barcelona",
      link: "https://lleoxiii.com",
      image: "/lleoxiii.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-white left-0",
      backgroundImage: "",
      key: "prj3",
    },
    {
      title: "Pinturas Fepama",
      description:
        "Página de Fepama, empresa de pinturas",
      link: "https://pinturasfepama.es/",
      image: "/fepama.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-black left-0",
      backgroundImage: "",
      key: "prj4",
    },
    {
      title: "Grupo Alvera",
      description:
        "Página de Grupo Alvera, empresa dedicada a produccion de eventos",
      link: "https://grupoalvera.com/",
      image: "/alvera.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-white left-0",
      backgroundImage: "",
      key: "prj5",
    },
    {
      title: "Cris la pintora",
      description:
        "Página de Cris la Pintora, empresa dedicada a servicios de pintura y rehabilitacion de muebles",
      link: "https://crislapintora.com/",
      image: "/crispintora.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-black left-0",
      backgroundImage: "",
      key: "prj6",
    },
    {
      title: "Adrià Gilibets",
      description:
        "Página de Adrià gilibets, empresa dedicada a servicios de pintura y reformas",
      link: "https://adriagilibets.com/",
      image: "/gilibets.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-black left-0",
      backgroundImage: "",
      key: "prj7",
    },
    {
      title: "Gualoga",
      description:
        "Página de Gualoga, empresa dedicada al montaje de stands",
      link: "https://gualoga.com/",
      image: "/gualoga.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-black left-0",
      backgroundImage: "",
      key: "prj7",
    },
    {
      title: "Poseidrone",
      description:
        "Página de Poseidrone, empresa dedicada a la grabacion con drones",
      link: "https://poseidrone.com/",
      image: "/poseidrone.webp",
      tags: [TAGS.HTML, TAGS.CSS,TAGS.JAVSCRIPT,TAGS.WORDPRESS,TAGS.JQUERY],
      className: "text-black left-0",
      backgroundImage: "",
      key: "prj7",
    },
    {
      title: "Next crud",
      description:
        "Aplicacion hecha en Nextjs, de CRUD de notas",
      image: "/next-crud.webp",
      github:'',
      tags: [TAGS.TAILWIND,TAGS.JAVSCRIPT,TAGS.NEXT],
      className: "text-white left-0",
      backgroundImage: "",
      key: "prj8",
    },
  ];


  return (
    <Section title="Proyectos">
      
      <Carousel listProjects={proyectos} />
    </Section>
  )
}
export default Projects;