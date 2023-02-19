import { Typography , Button, Stack} from "@mui/material"
import { Box, Container } from "@mui/system"

function Main1() {
  return (
    <Box sx={{border:'2px solid blue' , textAlign:'center'}}>
      <Typography variant="h4">Album Example</Typography>
      <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quos quaerat eaque ipsam accusantium mollitia neque obcaecati voluptas minus nisi corrupti, aperiam officiis.
      </Typography>
      <Container>
      <Stack direction={"row"} spacing={1} sx={{display:'flex', justifyContent:'center'}}>
      <Button variant="contained">Primary Action </Button> 
      <Button variant="contained">Secondary Action </Button>
      </Stack>
      </Container>
      
            
        </Box>
        
  )
}

export default Main1