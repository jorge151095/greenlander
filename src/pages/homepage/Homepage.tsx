import { Hero } from "../../components/Hero/Hero";
import { LatestNews } from "../../components/News/LatestNews";
import { motion, useScroll, useTransform } from "framer-motion"
import './Homepage.scss';
import { useEffect, useState } from "react";

const heroProps = {
    //imageUrl: 'https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg',
    videoUrl: 'https://cdn.pixabay.com/video/2020/02/25/32862-394513943_large.mp4',
    imageText: 'greenlander-back',
    headline: 'Aprovecha las ofertas del HotSale, 15% descuento en chamarras de piel.',
    button: {
      href: '/kids',
      label: 'COMPRAR AHORA'
    }
  };

const Homepage = () => {
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

      useEffect(() => {
          const handleResize = () => {
              setIsMobile(window.innerWidth <= 768);
          };

          window.addEventListener('resize', handleResize);

          // Limpieza del event listener cuando el componente se desmonta
          return () => {
              window.removeEventListener('resize', handleResize);
          };
      }, []);
      // Obtén la posición de desplazamiento
      const { scrollY } = useScroll();

      // Transforma la escala en base al scroll
      const scale = useTransform(scrollY, [-20, 300], [2.4, 1]); // De 1.5x a tamaño original
    return <>
      
      <div className="sloganHomePage">
        {isMobile ? <div > 
          ENCUENTRA TU HOGAR
          </div>
        : 
          <motion.div
          className="container"
          style={{ scale }}> 
              <div  className="titulo"> 
                  ENCUENTRA TU HOGAR
              </div>
          </motion.div>
        }
      </div>
            <Hero {...heroProps} />
      <div >
        <LatestNews/>
      </div>

    </>   
};

export { Homepage };
