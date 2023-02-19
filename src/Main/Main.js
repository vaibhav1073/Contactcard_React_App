import { Container } from "@mui/system"
import Main1 from "./Main1"
import Cards from "./Cards"


function Main() {
  return (
    <Container>
        <Main1/>
        <Container sx={{flexDirection:'row',display:'flex', justifyContent:'space-evenly'}}>
        <Cards img="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg"
        title="Cat"
        />
        <Cards img="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg"
        title="Cat"
        />
        <Cards img="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg"
        title="Cat"
        />
        </Container>
    </Container>
  )
}

export default Main