import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss';

const NavBar = () => {
    return <div className="nav-bar">
        <ImageFrame 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKuaHuT1Q00XTU3DBvCgN5TT1n7KHb70WyA&s"
            alt="logo-greenlander"
            width="50"
        />
        <Menu />
        <NavUtils />
    </div>
}

export default NavBar;
