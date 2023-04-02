import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../utils/queries';

function FlatTop() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "flatTop" } 
  });


  return (
    <div className="menu-category">
      <ul>
        {data.foodItems.map((foodItem) => (
          <li key={foodItem._id}>
            <h2>{foodItem.name}</h2>
            <p>{foodItem.description}</p>
            <p>Price: {foodItem.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlatTop;