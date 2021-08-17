import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import { Grid, Paper } from "@material-ui/core";
// import backendApi from "../../backendApi";

const Home: React.FC<RoutedComponentProps> = (props) => {

  console.log("welcome")
  useEffect(() => {
    (async () => {
    })().then();

  }, []);

  return (
    <PageTemplate 
      appBarTitle={props.routeDetail.title}
      selectedId={props.routeDetail.id}
    >
      <Grid container>
        <Grid item>
          <Paper>
          Welcome to Eugenie's Page.
          </Paper>
        </Grid>
      </Grid>
    </PageTemplate>
  );
}

export default Home;