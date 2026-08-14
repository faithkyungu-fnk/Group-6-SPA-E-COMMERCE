function Home() {
    return (

        <main className="home">

             {/* Hero section */}
             <section className="hero">
                <div className="hero-content">
                    <h1>Enjoy Your Perfect Cup of Coffee</h1>
                    <p>
                        Discover delicious coffee made with care and passion.
                    </p>

                    <button>Explore Our Menu</button>
                </div>
             </section>

               {/* Welcome section */}
               <section className="welcome">
                <h2>Welcome to BrewCoffee</h2>
                <p>
                    We are passionate about serving quality coffee and creating a warm and welcoming experience for every customer.
                </p>
               </section>
        </main>
    );
}

export default Home;