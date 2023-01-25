// Landing page component - it includes other sub compoments such as Categories, FeaturedRacipies, About Us and Subscription.

import Form from 'react-bootstrap/Form';
import Categories from './Categories';
import FeaturedRecipies from './FeaturedRecipies';
import About from './About';
import Subscription from './Subscription';
import landingPage from "../images/landing_page.png"
import top from "../images/top.png"


const LandingPage = () => {
    return <div className='landing'>
        <div className='landing-img'><img src={landingPage} alt="Landing Page" /></div>
        <h1 className="landing-msg landing-fnt">WELCOME TO YOUR ONE-STOP RECIPE CENTER</h1>
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search your racipe."
                className="me-2 landing-search"
                aria-label="Search your racipe."
            />
            <button className='landing-btn' variant="outline-success"><i className="fa fa-search white-color"></i></button>
        </Form>
        <Categories />
        <button className='top-btn'><a href='/'><img src={top} /></a></button>
        <FeaturedRecipies />
        <About />
        <Subscription />
    </div>;
};

export default LandingPage
