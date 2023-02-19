import { Box } from "@mui/system";

const Footer=function(){
    return(
        <Box sx={{position:'fixed',
         bottom:0,height:'100px',
         bgcolor:'pink',
         width:'100%',
         textAlign:'center'}}>
            This is the footer
        </Box>

    )
}
export default Footer;