import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei"

export default function HeroCanvas() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial color="#4f46e5" distort={0.3} speed={2} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
