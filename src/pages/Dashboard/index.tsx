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
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Project
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Project
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://github.com/eugenieeeech">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Project3
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://github.com/eugenieeeech">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="https://github.com/eugenieeeech">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
    
    </PageTemplate>
  );
};

export default Dashboard;
