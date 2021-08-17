import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
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
            A Hololive Fan Game Project. The project was created with the
            Hololive fan community. I took part in building one of the minigames
            with Unity.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://itzeusmti.itch.io/holoyomi"
          >
            Play
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  var MGMProject = (
    <Grid item xs={6}>
      <Card style={{height:"100%"}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Member-Get-Member(MGM) project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created a MGM API with other intern in Tandem HK.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://eugeniecheng.medium.com/hackathon-in-tandem-hk-d650da98535b"
          >
            Blog
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  var CurrencyProject = (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Exchange Currency Tool
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The tool converts the currency by the current exchange rates. This
            tool is created in React.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/eugenieeeech/ExchangeCurrencyTool"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  var busTerminus = (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            [Unreal Engine] Bus Terminus
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created a similar bus terminus scene in Unreal Engine with level
            editing and scripting skills.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/eugenieeeech/-UnrealEngine-Bus-Terminus"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  var Rhythm = (
    <Grid item xs={6}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rhythm Game with Sound control
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The game is created with Pygame. The feature of the game is sound
            input contol and the beat generation.
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/eugenieeeech/AIST2010-Introduction-to-Computer-Music"
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

  var cardTemp = (
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
          <Button
            size="small"
            color="primary"
            href="https://cuhk.edu.hk"
            startIcon={<GitHubIcon />}
          >
            Github
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );

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
        {MGMProject}
        {CurrencyProject}
        {busTerminus}
        {fanGameProject}
        {Rhythm}
      </Grid>
    </PageTemplate>
  );
};

export default Dashboard;
