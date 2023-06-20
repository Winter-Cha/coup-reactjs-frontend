// craate ProjectCard component

import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Project } from "@/models/Project";
import { useRouter } from "next/router";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${project.id}`);
  };

  return (
    <Card sx={{ minWidth: 345, margin: "auto" }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          sx={{ height: 140 }}
          image={project.image}
          title={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
