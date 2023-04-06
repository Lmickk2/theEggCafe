import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../../utils/queries';

function Salads() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "salads" } 
  });


  return (
    <div className="menu-category">
      <h2>Salads</h2>
      <ul>
      {data?.foods && data.foods.map((foodItem) => (
  <li key={foodItem._id}>
     <h4>{foodItem.name}<span className="price"> {foodItem.price}</span></h4>
    <p>{foodItem.description}</p>
    
  </li>
))}

      </ul>
    </div>
  );
}

export default Salads;