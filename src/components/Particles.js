import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Particles() {
  const particlesRef = useRef()
  
  // Inisialisasi partikel
  const count = 5000
  const positions = new Float32Array(count * 3)
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20
  }
  
  useFrame((state) => {
    particlesRef.current.rotation.x += 0.0005
    particlesRef.current.rotation.y += 0.001
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        color="#00a2ff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}