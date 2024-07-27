import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import './NavUtils.styles.scss';

const NavUtils = () => {
    return <div className="nav-utils">
        <a href="favorites"><FaRegHeart /></a>
        <a href="shopping-cart"><RiShoppingCart2Line /></a>
    </div>
};

export { NavUtils };
