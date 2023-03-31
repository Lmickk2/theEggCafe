import background from "../images/Egg.png"

function Home() {
    return(
        <div>
    <div className="img-display">
    <img src={background} className="showcase" alt=""/>
    <h1 className="welcome">Welcome to the Egg!</h1>
    <p className="desc">- Good Food, Good Times -</p>
    <button className="view-menu">View Menu</button>
  </div>
 </div>
    )
}

export default Home;