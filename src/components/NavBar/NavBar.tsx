import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";
import './NavBar.styles.scss';

const NavBar = () => {
    return ( 
    <div className="nav-bar">
        <a href="/" className="nav-bar-anchor" 
        >
            <div className="stylesLogo">
                <div className="stylesLogo-tittle">Home Special</div>
                <div className="stylesLogo-subtittle">Si Jehova no edificare, la casa es en vano.</div>
            </div>
        </a>
        <Menu />
        <NavUtils />
    </div>
    )
}

export default NavBar;
