import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#d88898" />

      <Sphere args={[1, 100, 200]} scale={2.4} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#d88898"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
};

export default Shape;

