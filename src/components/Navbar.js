/* Create a navigation menu component for the website. 

Note: I have combination of React Bootstrap and React Router 'Link' for creating navigation menu.
 */

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className='header'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav">
                        <Link className="nav-item" to="/recipe">Recipe Categories</Link>
                        <Link className="nav-item" to="/saving">Saving Center</Link>
                        <Link className="nav-item" to="/videos">Cooking Videos</Link>
                        <Link className="nav-item" to="/contactus">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;