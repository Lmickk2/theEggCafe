import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../../utils/queries';

function FlatTop() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "flatTop" } 
  });


  return (
    <div className="menu-category">
     <h2>Flat Top</h2>
      <ul>
      {data?.foodItems && data.foodItems.map((foodItem) => (
  <li key={foodItem._id}>
     <h4>{foodItem.name}<span className="price"> {foodItem.price}</span></h4>
    <p>{foodItem.description}</p>
    
  </li>
))}

      </ul>
    </div>
  );
}

export default FlatTop;