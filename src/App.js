import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { PhysicsWorld } from './components/PhysicsWorld';
import { Particles } from './components/Particles';
import { Effects } from './components/Effects';

export default function App() {
  return (
    <Canvas>
      <PhysicsWorld />
      <Particles />
      <Effects />
    </Canvas>
  )
}