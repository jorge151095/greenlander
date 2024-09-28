import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogWomen} from "../../data/catalog";

const heroWomenPage = {
    imageUrl: 'https://www.tillys.com/dw/image/v2/BFBK_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9279d2e3/tillys/images/catalog/1000x1000/450783531.jpg?sw=800&sh=1028&q=100',
    imageText: 'Nueva temporada en pans para mujer',
    headline: 'Nueva temporada otoño-invierno en pans para mujer',
    button: {
        href: '/',
        label: 'VER AHORA'
    }
};

const WomenPage = () => {
    return <>
        <Hero {...heroWomenPage}/>
        <Catalog productList={catalogWomen}/>
    </>
}
export { WomenPage };