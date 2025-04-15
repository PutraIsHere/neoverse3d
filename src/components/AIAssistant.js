import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

export function AIAssistant() {
  useEffect(() => {
    const init = async () => {
      try {
        await tf.setBackend('webgl');
        await tf.ready();
        console.log("TFJS ready!");
      } catch (err) {
        console.error("Failed to load TFJS:", err);
      }
    };
    init();
  }, []);
  
  return <div>Simple AI Assistant</div>;
}