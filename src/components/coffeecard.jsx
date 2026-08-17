import { Link } from "react-router-dom";

const fallbackImage=
"https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

function CoffeeCard({ coffee }) {
    
    return (
        <article className="coffee-card">
           
           {/* Displays the coffee image */}
            <img className="coffee-card-image"
            src={coffee.image || fallbackImage}
            alt={coffee.name}
            onError={(e) => {
                e.currentTarget.src=fallbackImage;
            }}
            />

            {/* Displays the coffee details */}
            <div className="coffee-card-content">
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
                <p className="coffee-price"><strong>Ksh {coffee.price}</strong> </p>

                <Link 
                to={`/coffee/${coffee.id}`}
                className="button button-dark"
                aria-label={`View details for ${coffee.name}`}>
                    View details
                </Link>

            </div>
            
        </article>
    );
}

export default CoffeeCard;

