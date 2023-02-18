
import './App.css';
import { useQuery,  } from '@apollo/client';
import { ALL_COUNTRIES } from './apollo/dataCountries';
function App() {
  
  const {loading, error, data} = useQuery(ALL_COUNTRIES)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    data.countries.map(({name, id}) => (
      <div key={id}>
        {name}
      </div>
    ))
  )
}

export default App;
