
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
function App() {
  const {search, setSearch} = useState('')  
  const {loading, error, data} = useQuery(ALL_COUNTRIES)

  // Проверка
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //
  const handleChange = (e) => {
  }

  return (

    <div className='container'>
      <Search 
        value={search}
        onChange={handleChange}
      ></Search>
      <Grid container spacing={2}>
        <Grid item xs='12' md='4'>
          <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  NAME
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default App;
