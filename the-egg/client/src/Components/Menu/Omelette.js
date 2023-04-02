import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../utils/queries';

function Omelette() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "omelettes" } 
  });


  return (
    <div className="menu-category">
      <h1>Omelettes</h1>
      <p>Served with 1 side and toast</p>
      <p>Sides: Homefries, hashbrowns, grits or sliced tomatoes.<br/>
      English muffin .25 extra</p>
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

export default Omelette;
