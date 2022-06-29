import React, {useRef,useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { OrbitControls,DeviceOrientationControls } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import { Suspense } from 'react';
// import Jaguar  from "../components/Jaguar"
import Mask from '../components/Mask';

const Controls = () => { 
  const orbitRef = useRef();
  const {camera, gl} = useThree();
  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
          enableZoom={false}
          maxDistance={5}
          minDistance={5}
          maxPolarAngle={1.25}
          minPolarAngle={1.25}
          />
  )
}
function devicePermission() {
  if (typeof DeviceMotionEvent.requestPermission === 'function' && !localStorage.getItem('Motion')) {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission();
    localStorage.setItem("Motion",true)
    window.location.reload(false);
  } 
}
export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.scene}>
        <Canvas
        onClick={devicePermission}
         className={styles.canvas}>
          <Suspense fallback={null}>
          {/* <Controls/> */}
          <DeviceOrientationControls /> 
          <pointLight position={[-30, 10, -30]} />
          <pointLight position={[10, 10, 10]} />
          <pointLight position={[30, 10, 30]} />
          {/* <Jaguar position={[0,0,0]}
                rotation={[.2, 0, 0]}
                /> */}
            <Mask
            position={[0,-25,0]}
            rotation={[0, Math.PI/2, 0]}/>
          </Suspense>
        </Canvas>
      </main>
    </div>
  )
}
