import React from 'react';
import { Stars, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const StarBackground: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 0] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
      }}
    >
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.2}
        enableZoom={false}
        enableDamping={false}
        enableRotate={false}
        target={[0, 20, 10]}
      />
      <Stars radius={200} depth={100} count={10000} factor={1} />
    </Canvas>
  );
};

export default StarBackground;
