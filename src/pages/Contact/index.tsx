import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Email as EmailIcon,
} from '@material-ui/icons';

// import backendApi from "../../backendApi";
const Contact: React.FC<RoutedComponentProps> = (props) => {
  var cardStyle = {
    display: 'block',
    width: '100vw',
    height: 'auto'
}
  console.log("find me?");
  useEffect(() => {
    (async () => {})().then();
  }, []);
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     message: data.get("message"),
  //   });
  // };
  return (
    <PageTemplate
      appBarTitle={props.routeDetail.title}
      selectedId={props.routeDetail.id}
    >
      <Grid container justifyContent="center"
          alignItems="center" item spacing={2}
          direction="row">
        <Grid item container>
          <Box width={1} display="flex" justifyContent="center" 
          m={2}
          >
        <Card style={cardStyle}>
          <Box p={1} ><Typography variant="h5" component="h5"><EmailIcon/>Contact</Typography></Box>
          <Box p={1} >Email:</Box>
          <Box p={1}><a href="mailto: eugenie.630.cheng@gmail.com"> Click here</a></Box>
          <Box p={1}>Linkedin:</Box>
          <Box p={1}><Link href="https://www.linkedin.com/in/eugenie-cheng-eugenieeeech/">Eugenie Cheng</Link></Box>
        </Card>
        </Box>

          <Grid><Typography variant="h5" component="h5">Leave Your Message</Typography></Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="Enter Your Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained">
            Submit
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </Grid>
      </Grid>
    </PageTemplate>
  );
};

export default Contact;
