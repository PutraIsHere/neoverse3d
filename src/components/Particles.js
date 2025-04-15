import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Pilih salah satu (sesuai kebutuhan):

// 1. Named export (untuk impor: import { Particles } from ...)
export function Particles() {
  const particlesRef = useRef()
  const count = 1000
  const positions = new Float32Array(count * 3)
  
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  useFrame(() => {
    if (!particlesRef.current) return
    particlesRef.current.rotation.y += 0.002
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
        sizeAttenuation={true}
      />
    </points>
  )
}

// 2. Atau default export (untuk impor: import Particles from ...)
// export default function Particles() { ... }