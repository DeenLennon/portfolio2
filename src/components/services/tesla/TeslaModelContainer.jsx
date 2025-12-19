import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {TeslaModel} from "./TeslaModel"
import {OrbitControls, PerspectiveCamera, Stage} from "@react-three/drei";

const TeslaModelContainer = () => {
  return (
    <Canvas>
        <Suspense fallback="Loading...">
            <Stage environment="night" intensity={10}>
                <TeslaModel/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
            <PerspectiveCamera position={[0,-1,2]} zoom={0.5} makeDefault/>
        </Suspense>
    </Canvas>
  )
}

export default TeslaModelContainer