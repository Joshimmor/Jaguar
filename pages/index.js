import React, {useRef,useState} from 'react';
import styles from '../styles/Home.module.css'
import { OrbitControls,DeviceOrientationControls } from '@react-three/drei';
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import { Suspense } from 'react';
// import Jaguar  from "../components/Jaguar"
import Mask from '../components/Mask';
import Loader from "../components/loader"
import { Album } from '../components/Album_cover';
import {Diorama} from "../components/Diorama"
// import { Mountain } from '../components/Mountain';
// import { JapaneseForest } from '../components/Japanese_forest';
const Controls = () => { 
  const orbitRef = useRef();
  const {camera, gl} = useThree();
  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
          minDistance={30}
          maxDistance={30}
          maxPolarAngle={1}
          minPolarAngle={1}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={.6}
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
              <Controls />
              {/* <DeviceOrientationControls/> */}
              <pointLight position={[-30, 10, -30]} intensity={3} />
              <pointLight position={[10, 10, 10]}intensity={3}  />
              <pointLight position={[30, 10, 30]} intensity={3} />
              <group>

              <Album

                     />
              <Mask
          
                position={[0,0,0]}
                rotation={[0,0,0]}
              />
              <Diorama position={[0,0,0]} scale={3}/>
              {/* <JapaneseForest position={[0,-4,0]}/> */}
              {/* <Mountain position={[10,-10,0]}/> */}
              </group>

            </Canvas>
          </Suspense>
      </div>
  )
}
