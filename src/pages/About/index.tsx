import React, { useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { RoutedComponentProps } from "../../routes";
import { Grid, Paper } from "@material-ui/core";
// import backendApi from "../../backendApi";

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
            Course taken in CUHK: AIST2010-Intro to Computer Music
            CSCI1130-Intro to Computing Using Java CSCI2100-Data Structures
            CSCI3100-Software Engineering CSCI3150-Intro to Operating Systems
            CSCI3160-Design & Analysis of Algo CSCI3230-Fundamentals of AI
            CSCI3250-Computers and Society CSCI3251-Engineering Practicum
            CSCI3260-Principles of Comp Graphics CSCI4120-Principles of Comp
            Game SW Minor(JAPANESE): JASP1450-New Practical Japanese I
            JASP1460-New Practical Japanese II JASP2450-New Practical Japanese
            III JASP2460-New Practical Japanese IV
          </Paper>
        </Grid>
      </Grid>
    </PageTemplate>
  );
};

export default About;
