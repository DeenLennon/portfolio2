import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage, Environment } from "@react-three/drei";

const ComputerModel = lazy(() => import("./ComputerModel").then(mod => ({ default: mod.ComputerModel })));

const ComputerModelContainer = () => {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} shadows>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} adjustCamera={false}>
            <ComputerModel />
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={2}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
          <PerspectiveCamera position={[0, 1, 4]} makeDefault />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputerModelContainer;
