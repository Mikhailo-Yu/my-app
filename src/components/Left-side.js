import NavbarItem from './Navbar-item';
import './Left-side.css';

const Leftside = (props) => {

    const menu = [
        { "home": "home" },
        { "about": "about" },
        { "contact": "contact" }
    ];

    return (

        <div className="leftside">
            <p className="leftside-title">Навігація</p>
            <div className="navbar">
                <NavbarItem menu={menu} />

            </div>
        </div>
    )
}

export default Leftside;