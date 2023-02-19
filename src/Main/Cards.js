import { Box, Card, CardActionArea, CardMedia,CardContent,Typography,CardActions,Button } from "@mui/material";

const Cards=function Cards(props){
    return (
        <Box sx={{border:'2px solid green' ,
         bgcolor:'grey',
         flexDirection:'row',
         width: '250px',
           }}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                     component="img"
                     height="140"
                     image={props.img}
                     alt={props.alt}
                   />
                    <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{}}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
                </CardActionArea>
                <CardActions>
        <Button size="small" variant='outlined' color="primary">
          Share
        </Button>
        <Button size="small" variant='outlined' color="primary">
          Share
        </Button>
      </CardActions>
            </Card>
            
        </Box>
    )
}
export default Cards;