import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const distortionShader = {
  uniforms: {
    time: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vec2 p = vUv * 2.0 - 1.0;
      float distort = sin(time + p.x * 10.0) * 0.1;
      gl_FragColor = vec4(
        0.0,
        abs(sin(time)) * 0.5 + 0.3,
        1.0,
        0.8 - length(p) * 0.3
      );
    }
  `
}

export function DistortionEffect() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        attach="material"
        args={[distortionShader]}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}