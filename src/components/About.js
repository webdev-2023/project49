// About Us section of the website. 

import about from '../images/about-us.jpg'
const About = () => {
    return <div className="about-us">
        <div className='about-us-text'>
            <h1>ABOUT UCOOK</h1>
            <p>Looking for recipes? You’ve come to the right place. UCook collaborates with chefs around the world to create and share over 10,000 one-of-a-kind recipes. Our experienced staff also tested and reviewed all the recipes to make sure they are of the highest quality. All of them are available for free. Start your chef-level cooking journey today.</p>
            <p>If you are a highly skilled chef and have a unique recipe, contact us today to become a contributor. As an author, your recipes will be copyrighted and you’ll start earning as your recipes attract viewership.</p>
            <button>CONTACT US</button>
        </div>
        <img className='about-us-img' src={about} alt="About Us" />
    </div>;
};

export default About;
