
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useQuery,  } from '@apollo/client';
import { ALL_COUNTRIES } from './apollo/dataCountries';
import CardMedia from '@mui/material/CardMedia';
import Search from './components/Search';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { textAlign } from '@mui/system';
function App() {
  const {search, setSearch} = useState('')  
  const {loading, error, data} = useQuery(ALL_COUNTRIES)
  console.log();
  // Проверка
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //
  console.log(data.countries);
  const handleChange = (e) => {
  }

  return (

    <div className='container'>
      <Search 
        value={search}
        onChange={handleChange}
      ></Search>
      <Grid container spacing={2}>
        {data.countries.map(({name, code, currency, continent, languages, phone, capital }) => (
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
                        <Typography sx={{ mb: 0.5, display: 'flex'}}>
                          Language:{languages.map(responce => {
                            return (
                              <Typography  color="text.secondary">
                                {responce.name + ','} 
                              </Typography>
                            )
                          })}
                        </Typography>
                        <Typography sx={{ mb: 1.5, display: 'flex'}}>
                          Native Language:{languages.map(responce => {
                            return (
                              <Typography  color="text.secondary">
                                {responce.native + ','} 
                              </Typography>
                            )
                          })}
                        </Typography>
                        <Typography variant="body2">
                          Emergency phone number: {phone}
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
