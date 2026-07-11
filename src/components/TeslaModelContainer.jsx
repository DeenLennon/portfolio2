import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage, Environment } from "@react-three/drei";

const TeslaModel = lazy(() => import("./TeslaModel").then(mod => ({ default: mod.TeslaModel })));

const TeslaModelContainer = () => {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} shadows>
        <Suspense fallback={null}>
          <Stage environment="studio" intensity={1} adjustCamera={false}>
            <TeslaModel />
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1.5}
            enablePan={false}
          />
          <PerspectiveCamera position={[0, 2, 5]} makeDefault />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TeslaModelContainer;
