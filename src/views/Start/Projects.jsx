import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { projects } from "./../../constants/projects";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`;

const ProjectGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px solid var(--color);
  :hover {
    border: 10px dashed var(--color);
  }
  > img {
    max-width: 100%;
  }
`;

const Projects = () => {
  return (
    <ProjectGrid>
      {projects.map((p) => (
        <Link to={p.path} key={`project-${p.path}`}>
          <ProjectGridItem>
            <img src={p.preview} />
          </ProjectGridItem>
        </Link>
      ))}
    </ProjectGrid>
  );
};

export default Projects;
