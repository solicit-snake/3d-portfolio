import { Suspense, useEffect, useState, React, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { AnimationMixer } from 'three'

import CanvasLoader from '../Loader'

const Dancer = () => {
  const dancer = useGLTF('./nerd__sus_sus/scene.gltf')
  const { scene, animations } = useGLTF('./nerd__sus_sus/scene.gltf')
  const mixer = new AnimationMixer(scene); // Create an AnimationMixer

  useEffect(() => {
    // Add each animation to the mixer
    animations.forEach((clip) => {
      mixer.clipAction(clip).play(); // Play the animation
      
    });
  }, [animations, mixer]);

  // Ensure the animation mixer is updated on every frame
  useFrame((state, delta) => {
    // rotates the guy
    // setRotationY((prev) => prev + delta * 0.5)
    dancer.scene.rotation.y += delta * 0.5;
    
    
    // Update animation mixer
    mixer.update(delta)

  });

  return (
    <group>
      <mesh>
        <ambientLight 
          intensity={0.2} 
          color={'yellow'}
        />
        <directionalLight
          position = { [0, 5, 0] }
          intensity = {0.7}
          color = "#ff847a"
        />
        <pointLight 
          position={[0, 0, 2]} // Positioned above the model for a downward light
          intensity={2} // Adjust intensity as needed
          decay={2} // Makes light decrease in intensity over distance 
          color={'yellow'}

        />
        <primitive
          object={dancer.scene}
          scale={0.6}
          position={[0, -4, 0]}
          rotation={[0, 1.4, 0]}
        />
      </mesh>
    </group>
  )
}

const DancerCanvas = () => {
  return (
    <Canvas
      // frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          
          // makes it so that the dancer can only be rotated around a specific angle (x axis)
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Dancer/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default DancerCanvas