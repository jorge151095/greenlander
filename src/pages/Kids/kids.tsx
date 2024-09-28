import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogKids} from "../../data/catalog";

const heroKidsPage = {
    imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/597e8ab1e3774872be75510566aca8be_9366/Adicolor_SST_Track_Pants_Kids_Blue_IY4007_21_model.jpg',
    imageText: 'Nueva temporada en pans para niños',
    headline: 'Nueva temporada otoño-invierno en pans para niños',
    button: {
        href: '/',
        label: 'VER AHORA'
    }
};

const KidsPage = () => {
    return <>
        <Hero {...heroKidsPage}/>
        <Catalog productList={catalogKids}/>
    </>
}
export { KidsPage };