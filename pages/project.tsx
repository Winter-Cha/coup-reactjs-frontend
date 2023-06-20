// create project list page with mui

import React from "react";
import { NextPage } from "next";
import { Container, Grid, useTheme } from "@mui/material";
import { Project } from "@/models/Project";
import { ProjectCard } from "@/components/atoms/ProjectCard";
import { getProjects } from "@/services/project";

interface Props {
  projects: Project[];
}

const ProjectPage: NextPage<Props> = ({ projects }) => {
  const theme = useTheme();

  return (
    <Container sx={{ flexGrow: 1, marginTop: theme.spacing(2) }}>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: { projects },
  };
};

export default ProjectPage;
