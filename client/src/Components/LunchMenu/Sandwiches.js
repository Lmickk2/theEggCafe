import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../../utils/queries';

function Sandwiches() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "sandwiches" } 
  });


  return (
    <div className="menu-category">
      <h2>Sandwiches</h2>
      <ul>
      {data?.foodItems && data.foodItems.map((foodItem) => (
  <li key={foodItem._id}>
     <h4>{foodItem.name}<span className="price"> {foodItem.price}</span></h4>
    <p>{foodItem.description}</p>
    
  </li>
))}

      </ul>
      <div className="category-info">
      <p>Served with lettuce, tomato, and 1 side of your choice</p>
      <p>Sides: French fries, potato salad, cole slaw, pasta salad, or chips</p>
      </div>
    </div>
  );
}

export default Sandwiches;