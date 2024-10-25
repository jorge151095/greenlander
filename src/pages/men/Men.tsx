import { Catalog } from "../../components/Catalog/Catalog";
import { catalogMen } from "../../data/catalog";

const MenPage = () => {
    return <>
        <div style={{ width: '100vw'}}>
            <video width="100%" autoPlay muted>
                <source src="/assets/Greenlander2020.mp4" type="video/mp4" />
            </video>
        </div>
        <Catalog productList={catalogMen}/>
    </>
}

export { MenPage };
