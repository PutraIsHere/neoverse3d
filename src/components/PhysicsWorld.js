import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'


function BlueBox() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 10, 0] }))

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3')
      audio.volume = 0.3
      audio.play()
    }

    api.position.subscribe((pos) => {
      if (pos[1] < 1) playSound() // Mainkan suara saat menyentuh lantai
    })
  }, [api])

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