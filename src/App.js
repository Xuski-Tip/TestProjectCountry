import './App.css';
import Search from './components/Search';
import Posts from './components/Posts';
import { useQuery,  } from '@apollo/client';
import { ALL_COUNTRIES } from './apollo/dataCountries';
import { useState } from 'react';
import { Grid, } from '@mui/material';
function App() {
  const [search, setSearch] = useState('')  
  const {loading, error, data} = useQuery(ALL_COUNTRIES)
  // Проверка
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const filterbyId = data.countries.filter(country => {
      return country.code.toLowerCase().includes(search.toLowerCase())
  })
  return (

    <div className='container'>
      <Search 
        value={search}
        onChange={handleChange}
      ></Search>
      <Grid container spacing={2}>
        {filterbyId.map((props) => (
            <Posts props={props} >
            </Posts>
          ))}
      </Grid>
    </div>
  )
}

export default App;
