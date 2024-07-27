import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";

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
        <Hero {...heroProps} />
        <div className='app-body'>
            <Carousel title="Tendencias" items={trendingProducts}/>
            <Carousel title="Greenlander" items={sales} />
        </div>
    </>   
};

export { Homepage };
