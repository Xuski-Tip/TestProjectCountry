import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Search from './components/Search';
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
      return  country.code.toLowerCase().includes(search.toLowerCase())
  })
  return (

    <div className='container'>
      <Search 
        value={search}
        onChange={handleChange}
      ></Search>
      <Grid container spacing={2}>
        {filterbyId.map(({name, code, currency, continent, languages, phone, capital }) => (
                <Grid key={code} item xs='12' md='4'>
                  <Card sx={{ minWidth: 275, minHeight: 250 } }>
                      <CardContent>
                        <Typography sx={{textAlign: 'right'}} variant="h6" component="div">
                            {code}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {name} / {capital}
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {continent.name}
                        </Typography>
                        <Typography sx={{ mb: 0.1,}}>
                          Lang:{ languages.map(responce => {
                            return (
                              <Typography sx={{fontSize: 14}}  component="span" color="text.secondary">
                                {responce.name + ', '} 
                              </Typography>
                            )
                          })}
                        </Typography>
                        <Typography sx={{ mb: 1.5,}}>
                          Native Lang:{ languages.map(responce => {
                            return (
                              <Typography sx={{fontSize: 14,}}  component='span' color="text.secondary">
                                {responce.native + ', '} 
                              </Typography>
                            )
                          })}
                        </Typography>
                        <Typography variant="body2">
                          Emergency phone numbers: {phone}
                        </Typography>
                        <Typography sx={{textAlign: 'left', mt:2}} variant="h6" component="div">
                          All currency of country: {currency}
                        </Typography>
                      </CardContent>
                  </Card>
                </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default App;
