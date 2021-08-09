import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import { Grid } from "@material-ui/core";
// import backendApi from "../../backendApi";

const About: React.FC<RoutedComponentProps> = (props) => {

  console.log("hello world")
  useEffect(() => {
    (async () => {
    })().then();

  }, []);

  return (
    <PageTemplate 
      appBarTitle={props.routeDetail.title}
      selectedId={props.routeDetail.id}
    >
      <Grid container 
      justifyContent="center"
          alignItems="center">
        <Grid item>
          I am Eugenie. A final year student from The Chinese University Of Hong Kong (CUHK).
        </Grid>
      </Grid>
    </PageTemplate>
  );
}

export default About;