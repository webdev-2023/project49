// Section to display featured racipies. I have used bootstrap Card to mimic the display.

import Card from 'react-bootstrap/Card';
import StarRating from './StarRating ';
import hen from '../images/featured-racipies/hen.jpg'
import cake from '../images/featured-racipies/cake.jpg'
import burger from '../images/featured-racipies/burger.jpg'
import steak from '../images/featured-racipies/steak.jpg'
import muffins from '../images/featured-racipies/muffins.jpg'
import scramble from '../images/featured-racipies/scramble.jpg'

const FeaturedRecipies = () => {
    return <div>
        <h2 className="fr-heading">FEATURED RACIPIES</h2>
        <div className='fr'>
            <Card className='fr-card'>
                <Card.Img className='fr-card-img mx-auto' variant="top" src={hen} />
                <Card.Text>
                    <StarRating />
                </Card.Text>
                <Card.Body>
                    <Card.Title className='fr-card-title'>Alsatian Guines Hen</Card.Title>
                    <Card.Text className='fr-card-txt'>
                        Course Main Dishes
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='fr-card'>
                <Card.Img className='fr-card-img mx-auto' variant="top" src={cake} />
                <Card.Text>
                    <StarRating />
                </Card.Text>
                <Card.Body>
                    <Card.Title className='fr-card-title'>Chocolate Macadamia Coffeecake</Card.Title>
                    <Card.Text className='fr-card-txt'>
                        Course Breakfast and Brunch, Brunch, Cooking for a Crowd, Desserts, Sweets, Vegetarian
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='fr-card'>
                <Card.Img className='fr-card-img mx-auto' variant="top" src={burger} />
                <Card.Text>
                    <StarRating />
                </Card.Text>
                <Card.Body>
                    <Card.Title className='fr-card-title'>Mushroom Beef Burger</Card.Title>
                    <Card.Text className='fr-card-txt'>
                        Course Breakfast Main Dishes Casual Party
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='fr-card'>
                <Card.Img className='fr-card-img mx-auto' variant="top" src={steak} />
                <Card.Text>
                    <StarRating />
                </Card.Text>
                <Card.Body>
                    <Card.Title className='fr-card-title'>Poached Salmon Steak</Card.Title>
                    <Card.Text className='fr-card-txt'>
                        Course Fish and Seafood, Main Dishes
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='fr-card'>
                <Card.Img className='fr-card-img mx-auto' variant="top" src={muffins} />
                <Card.Text>
                    <StarRating />
                </Card.Text>
                <Card.Body>
                    <Card.Title className='fr-card-title'>Amaranth Muffins</Card.Title>
                    <Card.Text className='fr-card-txt'>
                        Course Breads and Muffins, Breakfast and Brunch, Brunch, Cooking for a Crowd, Vegetarian
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='fr-card'>
                <Card.Img className='fr-card-img mx-auto' variant="top" src={scramble} />
                <Card.Text>
                    <StarRating />
                </Card.Text>
                <Card.Body>
                    <Card.Title className='fr-card-title'>Artichoke-Cheese Scramble</Card.Title>
                    <Card.Text className='fr-card-txt'>
                        Course Breakfast and Brunch, Brunch, Buffet, Main Dishes
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>;
};

export default FeaturedRecipies;
