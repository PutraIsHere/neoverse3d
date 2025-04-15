import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


function BlueBox() {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }))
  const texture = useTexture({
    map: 'https://i.imgur.com/MZQaH4o.png', // Texture biru holografik
    alphaMap: 'https://i.imgur.com/7QFcSr2.png', // Glow edge
  })

  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        {...texture}
        color="#00a2ff"
        emissive="#00a2ff"
        emissiveIntensity={2}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  )
}

export function PhysicsWorld() {
  return (
    <Physics gravity={[0, -5, 0]}>
      <BlueBox />
      <Plane />
    </Physics>
  )
}