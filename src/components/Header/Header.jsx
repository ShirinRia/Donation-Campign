import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import logo from "../../assets/Resources/logo.png"

const Header = () => {
    const links=<>
    <li><NavLink>Home</NavLink></li>
    <li><NavLink>Donation</NavLink></li>
    <li><NavLink>Statistics</NavLink></li>
    </>
    return (
        <div >
            <div className="navbar bg-base-100 max-w-6xl mx-auto">
                <div className="flex-1">
                <img src={logo} alt="logo" />
                </div>
                <div className="flex-none">
                    <ul className="flex px-1 gap-5">
                         {links}
                    
                    </ul>
                </div>
            </div>

            <Banner >

            </Banner>
        </div>
    );
};

export default Header;