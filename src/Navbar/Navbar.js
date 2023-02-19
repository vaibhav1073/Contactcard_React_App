import { AppBar, Typography,Container } from "@mui/material"
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';



function Navbar() {
  return (
    <AppBar>
        
            
        <Container sx={{display:'flex', alignItems:'center',justifyContent:"space-between" }} >
        <PhotoCameraOutlinedIcon></PhotoCameraOutlinedIcon>
           <Typography  variant="h6">Album here</Typography>
           <MenuRoundedIcon></MenuRoundedIcon>
        </Container>
        
    </AppBar>
  )
}

export default Navbar