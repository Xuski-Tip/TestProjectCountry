import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, } from '@mui/material';
const Posts = ({props}) => {
    return (
        <Grid key={props.code} item xs='12' md='4'>
        <Card sx={{ minWidth: 275, minHeight: 250 } }>
            <CardContent>
              <Typography sx={{textAlign: 'right'}} variant="h6" component="div">
                  {props.code}
              </Typography>
              <Typography variant="h6" component="div">
                  {props.name} / {props.capital}
              </Typography>

              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.continent.name}
              </Typography>
              <Typography sx={{ mb: 0.1,}}>
                Lang:{ props.languages.map(responce => {
                  return (
                    <Typography sx={{fontSize: 14}}  component="span" color="text.secondary">
                      {responce.name + ', '} 
                    </Typography>
                  )
                })}
              </Typography>
              <Typography sx={{ mb: 1.5,}}>
                Native Lang:{ props.languages.map(responce => {
                  return (
                    <Typography sx={{fontSize: 14,}}  component='span' color="text.secondary">
                      {responce.native + ', '} 
                    </Typography>
                  )
                })}
              </Typography>
              <Typography variant="body2">
                Emergency phone numbers: {props.phone}
              </Typography>
              <Typography sx={{textAlign: 'left', mt:2}} variant="h6" component="div">
                All currency of country: {props.currency}
              </Typography>
            </CardContent>
        </Card>
      </Grid>
    )
}
export default Posts