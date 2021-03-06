import React, {useRef,useState} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { OrbitControls,DeviceOrientationControls } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import { Suspense } from 'react';
// import Jaguar  from "../components/Jaguar"
import Mask from '../components/Mask';
import Loader from "../components/loader"

const Controls = () => { 
  const orbitRef = useRef();
  const {camera, gl} = useThree();
  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
          minDistance={10}
          maxDistance={10}
          maxAzimuthAngle={.105}
          minAzimuthAngle={-.105}
          maxPolarAngle={1.75}
          minPolarAngle={1.4}
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
      <div className={styles.scene}>
          <Suspense fallback={<Loader/>}>
            <Canvas
        className={styles.canvas}>
              <Controls/>
              {/* <DeviceOrientationControls/> */}
              <pointLight position={[-30, 10, -30]} />
              <pointLight position={[10, 10, 10]} />
              <pointLight position={[30, 10, 30]} />
              <Mask
                position={[0,0,0]}
                rotation={[0,0,0]}
              />
            </Canvas>
          </Suspense>
      </div>
  )
}
