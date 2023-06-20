import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { TextureLoader } from 'three';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
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

// eslint-disable-next-line react/prop-types
const Blob = ({ size_param, distort_param, speed_param }) => {
  const texture = new TextureLoader().load('/circle_blob.svg');
  const size = size_param;
  const distort = distort_param;
  const speed = speed_param;
  return (
    <mesh rotation={[Math.PI - 0.1, 0.3, 1.2]}>
      <ambientLight intensity={1} />
      <sphereGeometry args={[size, 100, 200]} />
      <MeshDistortMaterial map={texture} distort={distort} speed={speed} />
    </mesh>
  );
};

const LoadingState = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        zIndex: 9999,
        backgroundColor: '#08050f',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress
        sx={{
          color: 'white',
          width: '100vh',
          height: '100vh',
          padding: '10vh',
        }}
      />
      <Typography
        variant="h3"
        sx={{
          p: 1,
          fontFamily: 'Lato, sans-serif',
          height: 'auto',
          textAlign: 'center',
        }}
      >
        Loading, please wait...
      </Typography>
    </Box>
  );
};

const Home = () => {
  const sizeParam = 1;
  const speedParamOne = 4;
  const distortParamOne = 0.3;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsLoading(true);
  }, []);
  return (
    <>
      {isLoading ? <LoadingState /> : null}

      <>
        <Canvas
          camera={{ position: [0, 2, 0] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Stars />
        </Canvas>
        <TopMenu />
        <Stack
          spacing={{ xs: 2, sm: 3, md: 4 }}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width={{ xs: '200px', sm: '220px', md: '240px', lg: '260px' }}
            height={{ xs: '200px', sm: '220px', md: '240px', lg: '260px' }}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
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
              <Blob
                size_param={sizeParam}
                speed_param={speedParamOne}
                distort_param={distortParamOne}
              />
            </Canvas>
          </Box>
          <Welcome />
        </Stack>
      </>
    </>
  );
};

export default Home;
