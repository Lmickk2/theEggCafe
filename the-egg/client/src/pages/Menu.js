import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../utils/queries';

function Menu() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "omelettes" } 
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="menu">
      <h1>Appetizers</h1>
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

export default Menu;
