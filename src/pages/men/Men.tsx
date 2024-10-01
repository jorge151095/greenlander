import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogMen } from "../../data/catalog";

const heroMenPage = {
    imageUrl: 'https://uc-109.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.kXMOvB3nS19ADqrLbzd9WnJUzFAyhIi79K1LQde73BqNYXJ8Ni3jxmO3HvohSTDu_i2XW8pZiNlSkpFrmn8fKWsR4jPMUNZRdv0vVgRItJDqKrNXpeAxQAbVnLPYSDsQ.-vBkMkB_TUDn7Q350iCucw?size=2480x',
    imageText: 'Nueva temporada en chamarras de hombre',
    headline: 'Nueva temporada otoño-invierno en chamarras para hombre',
    button: {
        href: '/',
        label: 'VER AHORA'
    }
};

const MenPage = () => {
    return <>
        <div style={{ width: '100vw'}}>
            <video width="100%" autoPlay muted>
                <source src="/assets/Greenlander2020.mp4" type="video/mp4" />
            </video>
        </div>
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogMen}/>
    </>
}

export { MenPage };
