import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import { Grid, Typography } from "@material-ui/core";
import {
  DataGrid,
  GridColDef,
} from "@material-ui/data-grid";
// import backendApi from "../../backendApi";

const columns: GridColDef[] = [
  {
    field: "subject",
    headerName: "Subject",
    flex: 1,
  },
  {
    field: "code",
    headerName: "Couse number",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Couse name",
    flex: 1,
  },
];

const rows = [
  { id: 1, subject: "AIST", code: "2010", name: "Intro to Computer Music" },

  {
    id: 2,
    subject: "CSCI",
    code: "1130",
    name: "Intro to Computing Using Java",
  },
  { id: 3, subject: "CSCI", code: "2100", name: "Intro to Data Structures" },
  { id: 4, subject: "CSCI", code: "3100", name: "Software Engineering" },
  { id: 5, subject: "CSCI", code: "3150", name: "Intro to Operating Systems" },
  { id: 6, subject: "CSCI", code: "3160", name: "Design & Analysis of Algo" },
  { id: 7, subject: "CSCI", code: "3230", name: "Fundamentals of AI" },
  { id: 8, subject: "CSCI", code: "3250", name: "Computers and Society" },
  { id: 9, subject: "CSCI", code: "3251", name: "Engineering Practicum" },
  {
    id: 10,
    subject: "CSCI",
    code: "3260",
    name: "Principles of Comp Graphics",
  },
  { id: 11, subject: "CSCI", code: "4120", name: "Principles of Comp Game SW" },

  { id: 12, subject: "JASP", code: "1450", name: "New Practical Japanese I" },
  { id: 13, subject: "JASP", code: "1460", name: "New Practical Japanese II" },
  { id: 14, subject: "JASP", code: "2450", name: "New Practical Japanese III" },
  { id: 15, subject: "JASP", code: "2460", name: "New Practical Japanese IV" },
];

const About: React.FC<RoutedComponentProps> = (props) => {
  console.log("hello world");
  useEffect(() => {
    (async () => {})().then();
  }, []);

  var shortIntro = (
    <Typography align="center" component="h5" variant="h5" style={{ margin: 50 }} >
      I am Eugenie Cheng. <br />A final year university student who is pursuing a
      Bachelor of Computer Science at The Chinese University of Hong Kong
      (CUHK).
      
    </Typography>
  );

  return (
    <PageTemplate
      appBarTitle={props.routeDetail.title}
      selectedId={props.routeDetail.id}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction={"column"}
        spacing={2}
      >
        <Grid item>{shortIntro}</Grid>
        <Typography style={{ paddingBottom: 30 }}component="h5" variant="h5">
          Course taken in CUHK:
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </Grid>
    </PageTemplate>
  );
};

export default About;
