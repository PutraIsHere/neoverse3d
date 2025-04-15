import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Grid() {
  const gridRef = useRef()

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <group ref={gridRef}>
      <gridHelper 
        args={[30, 30, '#00a2ff', '#00a2ff']} 
        rotation-x={Math.PI / 2}
        position-y={-5}
      />
    </group>
  )
}