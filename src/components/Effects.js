import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'

export function Effects() {
  return (
    <EffectComposer>
      <Bloom intensity={1.5} luminanceThreshold={0.1} />
      <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} />
    </EffectComposer>
  )
}