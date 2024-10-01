import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";
import { motion } from "framer-motion";

const heroProps = {
    imageUrl: 'https://media.glamour.mx/photos/65c2580aa55fdb59613f2829/16:9/w_3760,h_2115,c_limit/In-vs-out-Jacken-Trends-Aufmacher-GettyImages-1609603873.jpg',
    imageText: 'greenlander-back',
    headline: 'Aprovecha las ofertas del HotSale, 15% descuento en chamarras de piel.',
    button: {
      href: '/kids',
      label: 'COMPRAR AHORA'
    }
  };

const Homepage = () => {
    return <>
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ duration: 2 }}
        >
          <Hero {...heroProps} />
        </motion.div>
        <div className='app-body'>
            <Carousel title="Tendencias" items={trendingProducts}/>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <Carousel title="Greenlander" items={sales} />
            </motion.div>
        </div>
    </>   
};

export { Homepage };
