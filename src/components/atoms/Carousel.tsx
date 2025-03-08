import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardProject from './CardProjectItem';
import { CarruselProps } from '../../types';




const Carrusel = ({ listProjects }: CarruselProps) => {
  return (
    <Carousel
      swipeable={true}
      emulateTouch={true}
      showThumbs={false}
      showStatus={false}
    >
      {listProjects.map(({ title, description, link, github, tags, image, className, key }) => (
        <div key={key} className="h-[65vh] w-full">
          <CardProject
            key={key}
            title={title}
            description={description}
            link={link}
            github={github}
            tags={tags}
            image={image}
            className={className}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;