import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { TextureLoader } from 'three';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import astronaut from '../assets/astronaut.png';
import Welcome from '../components/Welcome';
import TopMenu from '../components/TopMenu';
import Projects from '../components/Projects';
import LinksAndCopyright from '../components/LinksAndCopyright';

function Stars() {
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
}

// eslint-disable-next-line react/prop-types
function Blob({ size_param, distort_param, speed_param }) {
  const texture = new TextureLoader().load('/circle_blob.svg');
  const size = size_param;
  const distort = distort_param;
  const speed = speed_param;
  return (
    <mesh rotation={[Math.PI / 8, 0.3, 0.9]}>
      <ambientLight intensity={1} />
      <sphereGeometry args={[size, 100, 200]} />
      <MeshDistortMaterial map={texture} distort={distort} speed={speed} />
    </mesh>
  );
}

export default function Home() {
  const [sizeParam, setSizeParam] = useState(1);
  const speedParamOne = 4;
  const distortParamOne = 0.3;
  useEffect(() => {
    const handleResize = () => {
      const newSizeParamOne = window.innerWidth * 0.0005; // Adjust the factor according to your needsPKT
      if (newSizeParamOne > 1.0) {
        setSizeParam(1.0);
      } else if (newSizeParamOne < 0.5) {
        setSizeParam(0.5);
      } else {
        setSizeParam(newSizeParamOne);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <TopMenu />
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
      <Container
        sx={{
          position: 'sticky',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 1,
        }}
      >
        <Box
          sx={{
            zIndex: 10,
            position: 'relative',
            margin: 'auto',
            width: '48vw',
            minWidth: '20vw',
            height: '48vh',
            minHeight: '20vh',
            marginBottom: 7,
            top: -10,
          }}
        >
          <Canvas camera={{ fov: 35, zoom: 1.2, near: 1, far: 1000 }}>
            <Blob
              size_param={sizeParam}
              speed_param={speedParamOne}
              distort_param={distortParamOne}
            />
          </Canvas>
          <Box
            className="astroanut-box"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              zIndex: 11,
              position: 'relative',
              padding: '0.5em',
              top: '-50%',
            }}
          >
            <img
              alt="astronaut"
              src={astronaut}
              className="bounce-animation"
              style={{
                position: 'absolute',
                width: '30%',
                height: 'auto',
                minWidth: '130px',
              }}
            />
          </Box>
        </Box>
        <Welcome />
        <Projects />
        <LinksAndCopyright />
      </Container>
    </>
  );
}
