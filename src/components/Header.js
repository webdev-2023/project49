// Header compoment to display logo and menu. Navigation component is also embeded within Header component.

import Navigation from './Navbar.js'

const Header = (props) => {
    return <header className='header'>
        <a href='/'><img className='img-logo' src={props.logo} alt="Logo" /></a>
        <Navigation />
    </header>;
};

export default Header
