const NavbarItem = (props) => {
    console.log(props);
    return (
        <ul className="navbar-item">
            <li><a href='/'>{props.menu[0].home}</a></li>
            <li><a href='/'>{props.menu[1].about}</a></li>
            <li><a href='/'>{props.menu[2].contact}</a></li>
        </ul>
    )
}

export default NavbarItem