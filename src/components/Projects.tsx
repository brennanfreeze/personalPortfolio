/* eslint-disable react/function-component-definition */
import { Stack } from '@mui/material';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <Stack
      position="relative"
      spacing={4}
      justifyContent="center"
      height="auto"
      alignItems="center"
      zIndex={2}
      color="white"
      sx={{
        marginTop: 10,
        fontFamily: 'Lato, san-serif',
      }}
    >
      <ProjectCard
        title="QC.py"
        link="https://github.com/QCpython"
        description="Open source quantum computing Python library."
      />
      <ProjectCard
        title="React Sorting"
        link="https://123freezebrennan.github.io/reactSortingVisual/"
        description="Visualization of array based sorting algorithms."
      />
      <ProjectCard
        title="A* Pathfinding"
        link="https://github.com/123freezebrennan/A-Star-Algorithm-Visual"
        description="A Python implemented A* search algorithm."
      />
    </Stack>
  );
};

export default Projects;
