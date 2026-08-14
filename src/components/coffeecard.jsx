function CoffeeCard({ coffee }) {
    
    return (
        <article className="coffee-card">
           
           {/* Displays the coffee image */}
            <img className="coffee-card-image"
            src={coffee.image}
            alt={coffee.name}
            />

            {/* Displays the coffee details */}
            <div className="coffee-card-content">
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
                <p className="coffee-price">Ksh {coffee.price} </p>
            </div>
            
        </article>
    );
}

export default CoffeeCard;

