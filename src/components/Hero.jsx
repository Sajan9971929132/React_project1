const HeroSection = ()=>{
    return(
            <main className="hero">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui recusandae adipisci <br />
                        magnam, assumenda consequuntur veritatis facilis repellendus ducimus? Atque fugiat maxime <br />
                        excepturi, voluptatum vitae enim sunt sequi nisi pariatur?
                    </p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                    </div>
                    <div className="brand-icons">
                    <img src="./Assests/amazon.png" alt="Amazon-logo" />
                    <img src="./Assests/flipkart.png" alt="Flipcart-logo" />
                    </div>
                </div>
                <div className="hero-images"></div>
                <img src="./Assests/shoes.png" alt="Shoe-img" />
            </main>
    
);
};

export default HeroSection;