import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogMen } from "../../data/catalog";

const heroMenPage = {
    imageUrl: 'https://content.elmueble.com/medio/2022/03/21/00477853_8778b81d_2000x1335.jpg',
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
        <Catalog productList={catalogMen}/>
    </>
}

export { MenPage };
