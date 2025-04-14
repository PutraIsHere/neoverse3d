import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0] }))
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
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
    <Physics gravity={[0, -9.81, 0]}>
      <Box />
      <Plane />
    </Physics>
  )
}