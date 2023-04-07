import { Link } from "react-router-dom";
import backgroundSmall from "../images/EggFoodBG.png"
import backgroundLarge from "../images/Egg.png"
import foodItem from "../images/eggFoodItem2.png"

function Home() {
  const screenWidth = window.innerWidth;
  const backgroundImage = screenWidth < 1024 ? backgroundSmall : backgroundLarge;

  return (
    <div>
      <div className="img-display">
        <h1 className="welcome">Welcome to the Egg Cafe!</h1>
        <p className="desc">Looking for a place to enjoy a delicious meal without breaking the bank? Look no further than The Egg Cafe. From the mouth-watering Bacon Cheddar Burger to the homemade Eggs Benedict, The Egg Cafe offers a wide range of flavorful options to satisfy any craving.</p>
        {/* <img src={foodItem} className="foodImage"/> */}
        <Link to ="/menu"><button className="view-menu">View Menu</button></Link>
      </div>
    </div>
  );
}

export default Home;
