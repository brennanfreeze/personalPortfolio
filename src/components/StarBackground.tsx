import React, { useRef } from 'react';
import { Stars, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const StarBackground: React.FC = () => {
  const ref = useRef();

  return (
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
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.15}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
        target={[4, 4, 1]}
      />
      <Stars radius={300} depth={10} count={6000} factor={1} ref={ref} />
    </Canvas>
  );
};

export default StarBackground;
