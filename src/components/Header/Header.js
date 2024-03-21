import { Link } from "react-router-dom";
import "./_Header.scss";
import instockLogo from '../../assets/logo/InStock-Logo_1x.png'

export default function Header({ activeNavItem }) {
    const baseNavItemClass = 'navigation-ctn__nav-item'
    let wareHouseNavItemClassName = baseNavItemClass;
    let inventoryNavItemClassName = baseNavItemClass;

    if (activeNavItem === "warehouses") {
        wareHouseNavItemClassName += '--active';
    } else {
        inventoryNavItemClassName += '--active'
    }

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo">
                    <Link to={"/warehouses"}>
                        <img src={instockLogo} alt='instock website logo'></img>
                    </Link>
                </div>
                <div >
                    <ul className="navigation-ctn">
                        <li className={wareHouseNavItemClassName}>
                            <Link to={"/warehouses"}>
                                Warehouses
                            </Link>
                        </li>
                        <li className={inventoryNavItemClassName}>
                            <Link to={"/inventory"}>
                                Inventory
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}