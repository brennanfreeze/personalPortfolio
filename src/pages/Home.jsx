import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { TextureLoader } from 'three';
import { Box, Container } from '@mui/material';
import astronaut from '../assets/astronaut.png';

function Stars() {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(50000), { radius: 20.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 40;
    ref.current.rotation.y -= delta / 10000;
  });
  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}
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
    <mesh rotation={[Math.PI / 6, 0, 0.6]}>
      <ambientLight intensity={1} />
      <sphereGeometry args={[size, 100, 300]} />
      <MeshDistortMaterial map={texture} distort={distort} speed={speed} />
    </mesh>
  );
}

export default function Home() {
  const [sizeParamOne, setSizeParamOne] = useState(1);
  const speedParamOne = 4;
  const distortParamOne = 0.3;

  useEffect(() => {
    const handleResize = () => {
      const newSizeParamOne = window.innerWidth * 0.0005; // Adjust the factor according to your needs
      if (newSizeParamOne > 1.1) {
        setSizeParamOne(1.1);
      } else if (newSizeParamOne < 0.7) {
        setSizeParamOne(0.7);
      } else {
        setSizeParamOne(newSizeParamOne);
      }
    };

    // Initial resize
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center" // Add this line to vertically center the content
        sx={{
          zIndex: 1,
          position: 'absolute', // Change position to 'absolute' for better centering
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Adjust transform to center accurately
          height: `${sizeParamOne * 50}%`,
          width: `${sizeParamOne + 70}%`,
          minWidth: '22vh',
          minHeight: '22vh',
        }}
      >
        <Canvas camera={{ position: [0, 2, 0] }}>
          <Blob
            size_param={sizeParamOne}
            speed_param={speedParamOne}
            distort_param={distortParamOne}
          />
        </Canvas>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          zIndex: 2,
          position: 'absolute', // Change position to 'absolute' for better centering
          top: '50%', // Center vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Adjust transform to center accurately
        }}
      >
        <img
          alt="astronaut"
          src={astronaut}
          className="bounce-animation"
          style={{
            height: 'auto',
            width: `${sizeParamOne * 45 - 10}vh`,
          }}
        />
      </Box>
    </Container>
  );
}
