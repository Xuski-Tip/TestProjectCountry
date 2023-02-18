
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useQuery,  } from '@apollo/client';
import { ALL_COUNTRIES } from './apollo/dataCountries';
function App() {
  
  const {loading, error, data} = useQuery(ALL_COUNTRIES)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='wrapper'>
      <Card className='' sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              Name
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
    </div>
  )
}

export default App;
