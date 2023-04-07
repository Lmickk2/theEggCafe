import foodItem4 from "../../images/eggFoodItem4.png"
import foodItem5 from "../../images/eggFoodItem5.png"
import foodItem6 from "../../images/eggFoodItem6.png"
import foodItem7 from "../../images/eggFoodItem7.png"
import foodItem8 from "../../images/eggFoodItem8.png"
import foodItem9 from "../../images/eggFoodItem9.png"
import foodItem10 from "../../images/eggFoodItem10.png"
import foodItem11 from "../../images/eggFoodItem11.png"
import foodItem12 from "../../images/eggFoodItem12.png"
import { Link } from "react-router-dom"

function Gallery() {
    <div>
    <div className="food-gallery">
        <Link to ="/menu"><img src={foodItem4} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem5} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem6} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem7} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem8} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem9} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem10} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem11} className="gallery-img"/></Link>
        <Link to ="/menu"><img src={foodItem12} className="gallery-img"/></Link>
    </div>
    </div>
}

export default Gallery;