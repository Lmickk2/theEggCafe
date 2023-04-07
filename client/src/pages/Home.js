import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foodItem1 from "../images/Egg.png";
import foodItem2 from "../images/theEggItem.png";
import foodItem3 from "../images/eggFoodItem3.png";
import staff from "../images/eggStaff.png"
import Gallery from "../Components/FoodGallery/Gallery";
import foodItem4 from "../images/eggFoodItem4.png"
import foodItem5 from "../images/eggFoodItem5.png"
import foodItem6 from "../images/eggFoodItem6.png"
import foodItem7 from "../images/eggFoodItem7.png"
import foodItem8 from "../images/eggFoodItem8.png"
import foodItem9 from "../images/eggFoodItem9.png"
import foodItem10 from "../images/eggFoodItem10.png"
import foodItem11 from "../images/eggFoodItem11.png"
import foodItem12 from "../images/eggFoodItem12.png"

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [foodItem1, foodItem2, foodItem3];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div>
      <div className="img-display">
        <img src={images[currentImage]} className="showcase" />
        {/* <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button> */}
        <h1 className="welcome">Welcome to the Egg Cafe!</h1>
        <p className="desc">Breakfast and Lunch | 7 Days a Week</p>
        <Link to="/menu">
          <button className="view-menu">View Menu</button>
        </Link>
      </div>
      <div className="home-section">
        <h3>Everyone Loves The Egg!</h3>
        <div className="about">
          <p>
            The glowing red neon sign does not lie...The Egg's Cafe serves
            awesome food at affordable prices. Owners Robert and Eileen McCrary
            invite you to sit down for a delicious breakfast, lunch or dinner
            seven days a week. Enjoy one of their many flavorful omelettes, or a
            mouth watering Bacon Cheddar Burger in the cozy dining room or
            outdoor covered patio. Come see for yourself why The Egg Cafe is the
            premier breakfast spot in the Lake Norman area. From their many
            Homemade Egg's Benedicts, to their tasty Ruben Sandwiches...there's
            a reason Lake Norman residents choose The Egg Cafe over anywhere
            else.
          </p>
          <img src={staff} className="about-img"/>
        </div>
      </div>
      <div className="home-section">
        <h3>Gallery</h3>
        <div className="food-gallery">
        <img src={foodItem4} className="gallery-img"/>
        <img src={foodItem5} className="gallery-img"/>
        <img src={foodItem6} className="gallery-img"/>
        <img src={foodItem7} className="gallery-img"/>
        <img src={foodItem8} className="gallery-img"/>
        <img src={foodItem9} className="gallery-img"/>
        <img src={foodItem10} className="gallery-img"/>
        <img src={foodItem11} className="gallery-img"/>
        <img src={foodItem12} className="gallery-img"/>
    </div>
      </div>
    </div>
  );
}

export default Home;
