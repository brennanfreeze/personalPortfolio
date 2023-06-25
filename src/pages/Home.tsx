import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';
import { Stack, SxProps } from '@mui/material';
import astronaut from '../assets/astronaut.png';
import Welcome from '../components/Welcome';
import BasicLayout from '../components/BasicLayout';

const Blob = () => {
  const texture = new TextureLoader().load('/circle_blob.svg');
  const size = 1;
  const speed = 4;
  const distort = 0.3;
  return (
    <mesh rotation={[Math.PI - 0.1, 0.3, 1.2]}>
      <ambientLight intensity={1} />
      <sphereGeometry args={[size, 100, 200]} />
      <MeshDistortMaterial map={texture} distort={distort} speed={speed} />
    </mesh>
  );
};

const Home: React.FC = () => {
  const BlobStackStyle: SxProps = {
    width: { xs: '200px', sm: '220px', md: '240px', lg: '260px' },
    height: { xs: '200px', sm: '220px', md: '240px', lg: '260px' },
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <BasicLayout />
      <Stack
        spacing={{ xs: 2, sm: 3, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack sx={BlobStackStyle}>
          <div
            className="bounce-animation"
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              zIndex: 5,
              width: '55%',
              height: '100%',
              background: `url(${astronaut})`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
          <Canvas camera={{ zoom: 3, near: 3, far: 100 }}>
            <Blob />
          </Canvas>
        </Stack>
        <Welcome />
      </Stack>
    </>
  );
};

export default Home;
