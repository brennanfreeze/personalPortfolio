import { Stack, Typography, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { TextureLoader } from 'three';
import astronaut from '../assets/astronaut.png';
import Welcome from '../components/Welcome';
import TopMenu from '../components/TopMenu';

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(50000), { radius: 20.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 10000;
  });
  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Blog: React.FC = () => {
  return (
    <>
      <TopMenu />
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          height: '100vh',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          p={2}
          sx={{
            textAlign: 'center',
            fontFamily: 'Lato, sans-serif',
            backgroundColor: 'primary.main',
            background:
              '-webkit-linear-gradient(220deg, #ce40ad 10%, #4b70dd 80%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Coming soon.
        </Typography>
        <Typography
          variant="h6"
          color="white"
          component={Link}
          to="/"
          p={2}
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Lato, sans-serif',
            textDecoration: 'none',
            border: 'solid white 2px',
            borderRadius: '25px',
          }}
        >
          Back To Home
        </Typography>
      </Stack>
    </>
  );
};

export default Blog;
