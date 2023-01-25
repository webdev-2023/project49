// This component is to display the 5 star rating feature. This is used in FeaturedRacipies component.
// html code for star is &#9733
// Reference: https://w3collective.com/react-star-rating-component/

import { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className='str-button'
                        // example of conditinally assigning css class
                        // className={`str-button ${index <= (hover || rating) ? "str-on" : "str-off"}`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span>
                            {index <= (hover || rating) ?
                                <i className="fa fa-star str-size" aria-hidden="true"></i>
                                : <i className="fa fa-star-o str-size" aria-hidden="true"></i>}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default StarRating;
