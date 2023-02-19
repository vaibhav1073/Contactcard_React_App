import { Card, CardContent, Typography } from "@mui/material";


export default function ContactCard(props) {
  return (

    <Card>
      <CardContent>
        <Typography variant='h6' component="div">{props.name} {props.lName}</Typography>
        <Typography variant='p'
          component="div">
          <b>Contact:</b> {props.contact}
        </Typography>
        <Typography variant="p" >{props.email}</Typography>

      </CardContent>
    </Card>


  )
}
