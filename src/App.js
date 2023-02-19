import { Container } from "@mui/system";
import ContactForm from "./ContactForm/ContactForm";
import ContactHeading from "./ContactHeading/ContactHeading";

function App() {
  return (
    <Container sx={{
      display: 'flex',
      flexDirection:'column',
      alingItems:'center',
      bgColor:'black'    

    }}>
      <ContactHeading></ContactHeading>
      
      <ContactForm></ContactForm>
    </Container>






  );
}

export default App;
