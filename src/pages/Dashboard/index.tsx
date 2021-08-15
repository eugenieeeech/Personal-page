import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
// import backendApi from "../../backendApi";

const Dashboard: React.FC<RoutedComponentProps> = (props) => {
  console.log("hi");
  useEffect(() => {
    (async () => {})().then();
  }, []);

  var fanGameProject = (
    <Grid item xs={6}>
          <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          ホロ読み（holoyomi)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A Hololive Fan Game Project. The project was created with the Hololive fan community. I took part in building one of the minigames with Unity.
          </Typography>
        </CardContent>
     
      <CardActions>

        <Button size="small" color="primary" href="https://itzeusmti.itch.io/holoyomi">
         Play
        </Button>
      </CardActions>
    </Card>
    </Grid>

  );

  var cardTemp= (
  <Grid item xs={6}>
    <Card>
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          Project
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Project details
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" href="https://cuhk.edu.hk">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>);

  return (
    <PageTemplate
      appBarTitle={props.routeDetail.title}
      selectedId={props.routeDetail.id}
    >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          
          {cardTemp}
          {cardTemp}
          {cardTemp}
          
          {fanGameProject}{fanGameProject}
          </Grid>
    
    </PageTemplate>
  );
};

export default Dashboard;
