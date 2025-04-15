import { useState, useEffect } from 'react'
import * as tf from '@tensorflow/tfjs'
import * as speechCommands from '@tensorflow-models/speech-commands'

export function AIAssistant() {
  const [listening, setListening] = useState(false)
  const [command, setCommand] = useState('')

  useEffect(() => {
    const initModel = async () => {
      const recognizer = speechCommands.create('BROWSER_FFT')
      await recognizer.ensureModelLoaded()
      
      recognizer.listen(result => {
        const { scores } = result
        const labels = recognizer.wordLabels()
        const maxScore = Math.max(...scores)
        const index = scores.indexOf(maxScore)
        
        setCommand(labels[index])
        
        // Eksekusi perintah
        if (labels[index] === 'up') {
          console.log('Melompat!')
        }
      }, {
        includeSpectrogram: true,
        probabilityThreshold: 0.7
      })
      
      setListening(true)
    }

    initModel()
    return () => tf.disposeVariables()
  }, [])

  return (
    <div className="ai-assistant">
      {listening ? (
        <p>AI mendengar: <strong>{command || "..."}</strong></p>
      ) : (
        <p>Menyiapkan mikrofon...</p>
      )}
    </div>
  )
}