import { Link } from "react-router-dom";

function Home() {
    return (

        <main className="home">

             {/* Hero section */}
             <section className="hero">
                <div className="hero-content">
                    <h1>Enjoy Your Perfect Cup of Coffee</h1>
                    <p>
                        Freshly brewed coffee, carefully crafted to make every moment worth savoring.
                    </p>

                    <Link to="/menu" className="hero-button">
                    Explore Our Menu</Link>
                </div>
             </section>

               {/* Welcome section */}
               <section className="welcome">
                <h2>Welcome to BrewCoffee</h2>
                <p>
                    From rich espresso to smooth lattes, we serve quality coffee made with care, passion, and the finest beans.
                </p>
               </section>
        </main>
    );
}

export default Home;