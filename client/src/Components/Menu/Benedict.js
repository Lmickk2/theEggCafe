import { useQuery } from '@apollo/client';
import { QUERY_FOOD } from '../../utils/queries';

function Benedict() {
  const { loading, error, data } = useQuery(QUERY_FOOD, {
    variables: { category: "benedict" } 
  });


  return (
    <div className="menu-category">
      <h2>Famous Benedicts</h2>
      <ul>
      {data?.foods && data.foods.map((foodItem) => (
  <li key={foodItem._id}>
     <h4>{foodItem.name}<span className="price"> {foodItem.price}</span></h4>
    <p>{foodItem.description}</p>
    
  </li>
))}

      </ul>
      <div className="category-info">
      <p>Served with 1 side and toast</p>
      <p>Sides: Homefries, hashbrowns, grits or sliced tomatoes.</p>
      </div>
    </div>
  );
}

export default Benedict;