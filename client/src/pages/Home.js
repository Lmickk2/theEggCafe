import { Link } from "react-router-dom";
import backgroundSmall from "../images/EggFoodBG.png"
import backgroundLarge from "../images/Egg.png"

function Home() {
  const screenWidth = window.innerWidth;
  const backgroundImage = screenWidth < 1024 ? backgroundSmall : backgroundLarge;

  return (
    <div>
      <div className="img-display">
        <img src={backgroundImage} className="showcase" alt=""/>
        <h1 className="welcome">Welcome to the Egg!</h1>
        <p className="desc">Good Food, Good Times</p>
        <Link to ="/menu"><button className="view-menu">View Menu</button></Link>
      </div>
    </div>
  );
}

export default Home;
