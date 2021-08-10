import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import { Grid, Paper } from "@material-ui/core";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
// import backendApi from "../../backendApi";

const columns: GridColDef[] = [
  {
    field: 'subject',
    headerName: 'Subject',
    width: 250,
  }, 
  {
    field: 'code',
    headerName: 'Couse number',
    width: 250,
  },
  {
    field: 'name',
    headerName: 'Couse name',
    width: 250,
  },
  
];

const rows = [
  { id: 1, subject: 'AIST',code: '2010',name: 'Intro to Computer Music',  },

  { id: 2, subject: 'CSCI', code:'1130',name: 'Intro to Computing Using Java' },
  { id: 3, subject: 'CSCI', code:'2100',name: 'Intro to Data Structures' },
  { id: 4, subject: 'CSCI', code:'3100',name: 'Software Engineering' },
  { id: 5, subject: 'CSCI', code:'3150',name: 'Intro to Operating Systems' },
  { id: 6, subject: 'CSCI', code:'3160',name: 'Design & Analysis of Algo' },
  { id: 7, subject: 'CSCI', code:'3230',name: 'Fundamentals of AI' },
  { id: 8, subject: 'CSCI', code:'3250',name: 'Computers and Society' },
  { id: 9, subject: 'CSCI', code:'3251',name: 'Engineering Practicum' },
  { id: 10, subject: 'CSCI', code:'3260',name: 'Principles of Comp Graphics' },
  { id: 11, subject: 'CSCI', code:'4120',name: 'Principles of Comp Game SW' },

  { id: 12, subject: 'JASP', code:'1450',name: 'New Practical Japanese I' },
  { id: 13, subject: 'JASP', code:'1460',name: 'New Practical Japanese II' },
  { id: 14, subject: 'JASP', code:'2450',name: 'New Practical Japanese III' },
  { id: 15, subject: 'JASP', code:'2460',name: 'New Practical Japanese IV' },

];

const About: React.FC<RoutedComponentProps> = (props) => {
  console.log("hello world");
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
        justifyContent="center"
        alignItems="center"
        direction={"column"}
        spacing={2}
      >
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Paper elevation={6}>
              I am Eugenie Cheng. I am a final year university student who is
              pursuing a Bachelor of Computer Science at The Chinese university
              of Hong Kong (CUHK). As a computer science major student, I have
              learnt different programming skills and knowledge from various
              courses and projects. For instance, throughout the Software
              Engineering Course, I have learnt the basic knowledge about
              full-stack web development and the principle of software
              development. In the course Principle of Computer Graphics, I
              worked in a team of two and developed a 3D game that included
              object generating, texturing and interactions.I have learnt about
              Object-oriented Programming (OOP). Furthermore, I am eager to
              learn new technologies such as Artificial Intelligence and new
              API. I have taken related courses and workshops to stay up to date
              on industry trends and seek for advancements. This allowed me to
              step outside my comfort zone and keep exploring new knowledge. In
              addition to my programming experience, my previous two summer
              internships position is software engineer. I mainly worked as a
              developer, expericened in both front-end and back-end. For the
              first internship, I was building UI in the application,
              implementing new functions in the application, organizing the code
              and coding with Flutter. For my second internship, I worked on
              back-end api for native app. I have learnt about SpringBoot,
              Kotlin and usage of different structure of application. I have
              quickly gained some mobile application developing skills during my
              internship. I believe I am a quick learner that would fit into a
              different working environment quickly.
            </Paper>
          </Grid>
          <Paper elevation={6}>
            Course taken in CUHK:
          </Paper>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
        </Grid>
      </Grid>
    </PageTemplate>
  );
};

export default About;
