import { TextField,Button, Grid } from "@mui/material";
import { Box,Container } from "@mui/system";
import { useState  } from "react";
import ContactCard from "./ContactCard/ContactCard";


export default function ContactForm() {
    const [info, setInfo] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const handleClick=()=>{
           
        setInfo([...info,{firstName,lastName,contact,email}])
        console.log(info)
        setFirstName("")
        setEmail('')
        setContact('')
        setLastName('')
    }
  return (
   <Container sx={{
   display:'flex',
   alignItems:'center',
   maxWidth:'70vw',
   width:'400px',
   flexDirection:'column',
   justifyContent:'center'}}  m={0.5}>
    
    
        
    
    <TextField  variant="outlined"
    placeholder="Firs name" 
    value={firstName}
    onChange={(e)=>{setFirstName(e.target.value)}}>    
    </TextField>   
    
    <TextField variant="outlined" 
    placeholder="Last  name"
    value={lastName}
    onChange={(e)=>{setLastName(e.target.value)}}    
    ></TextField>
    <TextField variant="outlined" 
    placeholder="Contact"
    value={contact}
    onChange={(e)=>{setContact(e.target.value)}}
    ></TextField> 
    <TextField variant="outlined" 
    placeholder="Email"
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    ></TextField>   

    <Box mt={1}>
        <Button variant="contained" onClick={handleClick}  >Submit</Button> 
    </Box>

    <Grid container spacing={2} m={2} md={10}>
        {info.map(item=>(
            <ContactCard key={Math.random} 
            name={item.firstName} 
            lName={item.lastName} 
            contact={item.contact}
            email={item.email} ></ContactCard>)

        )}
    
    </Grid>
    
    


    
   </Container>
  )
}
