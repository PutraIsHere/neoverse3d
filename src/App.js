// src/App.js
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { PhysicsWorld } from './components/PhysicsWorld'
import { Particles } from './components/Particles'
import { Effects } from './components/Effects'
import './styles.css' // File CSS baru
import { useInView } from 'react-intersection-observer'
import { useGLTF } from '@react-three/drei'

function FeatureCard() {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className={`feature-card ${inView ? 'animate-fade' : ''}`}>
      {/* Konten */}
    </div>
  )
}

function ModelViewer() {
  const { scene } = useGLTF('/model.glb')
  return <primitive object={scene} scale={0.5} />
}

export default function App() {
  return (
    <div className="website-container">
      {/* --- Header 3D --- */}
      <section className="hero-section">
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <PhysicsWorld />
          <Particles />
          <Effects />
        </Canvas>
        <div className="hero-content">
          <h1>NEOVERSE</h1>
          <p>Next-Gen 3D Web Experience</p>
          <button>Explore Demo</button>
        </div>
      </section>

      {/* --- Konten Scrollable --- */}
      <section className="content-section">
        <div className="feature-card">
          <h2>⚡ Real-Time Physics</h2>
          <p>Simulasi gravitasi dan tumbukan berbasis GPU</p>
        </div>

        <div className="feature-card">
          <h2>🎨 Photoreal Lighting</h2>
          <p>Pencahayaan HDR dengan shadow mapping</p>
        </div>

        <div className="feature-card">
          <h2>🤖 AI Integration</h2>
          <p>Kontrol suara dan deteksi emosi</p>
        </div>
      </section>

      {/* --- Portfolio Showcase --- */}
      <section className="portfolio-section">
        <h2>Our 3D Projects</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer-section">
        <p>© 2024 NeoVerse | Built with React + Three.js</p>
      </footer>
    </div>
  )
}