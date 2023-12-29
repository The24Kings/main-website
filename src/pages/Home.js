const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to my landing page!</h1>
            
            <p>Have a look around, this place is relatively empty due to a lack of <br/> 
                web-dev skills. However, I do enjoy my fair share of Zelda™ memes!
            </p>
            <img id="dancing-link" src={require("../content/Dance.gif")} alt="A picture of link from the Legend of Zelda™ doing a dance."/>

            <div className="footer">
                <p>Thanks for visiting!</p>
            </div>
        </div>    
    )
};

export default Home;