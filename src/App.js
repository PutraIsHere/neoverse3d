import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { 
  Particles, 
  Effects, 
  PhysicsWorld, 
  DistortionEffect, 
  AIAssistant 
} from './components'
import { motion } from 'framer-motion'
import './styles.css'


export default function App() {
  return (
    <div className="website-container">
      <section className="hero-section">
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <PhysicsWorld />
          <Particles />
          <Effects />
          <DistortionEffect />
          <Environment preset="sunset" />
        </Canvas>

        <div className="hero-content">
          <h1>NEOVERSE</h1>
          <p>Next-Gen 3D Web Experience</p>
          <button>Explore Demo</button>
        </div>
      </section>

      <section className="content-section">
        <motion.div 
          className="feature-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>⚡ Real-Time Physics</h2>
          <p>Simulasi gravitasi berbasis GPU</p>
        </motion.div>
      </section>
      
      <div className="ui-overlay">
        <AIAssistant />
      </div>
    </div>
  )
}