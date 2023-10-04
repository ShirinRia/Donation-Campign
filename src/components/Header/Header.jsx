import { NavLink } from "react-router-dom";
import logo from "../../assets/Resources/logo.png"

const Header = () => {
    const links=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/donation'}>Donation</NavLink></li>
    <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
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

           
        </div>
    );
};

export default Header;