// Section to display various menu Course categories. I have used bootstrap Card to mimic the display.

import Card from 'react-bootstrap/Card';
import appetizer from '../images/categories/appetizer@2x.png'
import barbecue from '../images/categories/BBQ-and-grill@2x-99x150.png'
import beverages from '../images/categories/beverages@2x.png'
import brunch from '../images/categories/brunch@2x.png'
import buffet from '../images/categories/buffet@2x-150x138.png'
import casual from '../images/categories/casual-party@2x.png'
import crowd from '../images/categories/cooking-for-crowd@2x.png'

const Categories = () => {
    return <div>
        <h2 className="category-heading">OUR CATEGORIES</h2>
        <a className='category-link' href="/recipe">VIEW ALL</a>
        <div className='category'>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={appetizer} />
                <Card.Body>
                    <Card.Text className='category-card-txt'>
                        appetizer
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={barbecue} />
                <Card.Body >
                    <Card.Text className='category-card-txt'>
                        barbecue
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={beverages} />
                <Card.Body>
                    <Card.Text className='category-card-txt'>
                        beverages
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={brunch} />
                <Card.Body >
                    <Card.Text className='category-card-txt'>
                        brunch
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={buffet} />
                <Card.Body >
                    <Card.Text className='category-card-txt'>
                        buffet
                    </Card.Text >
                </Card.Body>
            </Card>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={casual} />
                <Card.Body >
                    <Card.Text className='category-card-txt'>
                        casual
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='category-card'>
                <Card.Img className='category-card-img mx-auto' variant="top" src={crowd} />
                <Card.Body >
                    <Card.Text className='category-card-txt'>
                        crowd
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>;
};

export default Categories;
