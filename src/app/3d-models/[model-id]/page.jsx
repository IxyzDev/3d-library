'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader, useGLTF } from '@react-three/drei';

// Componente para cargar y mostrar el modelo 3D
function Model() {
  const { scene } = useGLTF('/assets/low_poly_alpaca/scene.gltf');
  return <primitive object={scene} />;
}

// Página que muestra el modelo en el centro con interactividad
export default function ModelViewer() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
