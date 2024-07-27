import { Hero } from "../../components/Hero/Hero";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { catalog } from "../../data/catalog";

const heroMenPage = {
    imageUrl: 'https://cuadra.com.mx/cdn/shop/files/H310BOA_1080x1080.jpg?v=1710269551',
    imageText: 'Nueva temporada en chamarras de hombre',
    headline: 'Nueva temporada otoño-invierno en chamarras para hombre',
    button: {
        href: '/',
        label: 'VER AHORA'
    }
};

const MenPage = () => {
    return <>
        <Hero {...heroMenPage}/>
        { catalog && 
            catalog.map((product) => 
            <ProductCard {...product} />
        )}
    </>
}

export { MenPage };
