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
import { Mountain } from '../components/Mountain';
import { JapaneseForest } from '../components/Japanese_forest';
import { Forest } from '../components/Forest';
import { Fire } from '../components/Fire';
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
               <pointLight position={[-30, 10, -30]} intensity={.1} />
               <pointLight position={[10, 10, 10]}intensity={.1}  />
               <pointLight position={[30, 10, 30]} intensity={.1} />
               <pointLight color="#FF4500" rotation={[0,Math.PI/2,0]} position={[22.5,2,6.15]} intensity={.1} />
               <pointLight color="#FF4500" rotation={[0,Math.PI/2,0]}  position={[-22.5,2,6.15]} intensity={.1} />
               <pointLight color="#FF4500" rotation={[0,Math.PI/2,0]} position={[22,8,-27.5]} intensity={.1} />
               <pointLight color="#FF4500"  rotation={[0,Math.PI/2,0]} position={[-22,8,-27.5]} intensity={.1} />
              <group>

              <Album

                     />
              <Mask
          
                position={[0,0,0]}
                rotation={[0,0,0]}
              />
              {/* <Diorama position={[0,0,0]} scale={3}/> */}
              <JapaneseForest position={[0,-4,0]}/>
              {/* <Mountain position={[10,-10,0]}/> */}
              {/* <Forest position={[0,-4,0]}/> */}
              <Fire
                              position={[22.5,2,6.15]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              <Fire
                              position={[-22.5,2,6.15]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              <Fire
                              position={[-22,8,-27.5]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              <Fire
                              position={[22,8,-27.5]}
                              rotation={[0,0,0]}
                              scale={[.5,.5,.5]}
              />
              </group>

            </Canvas>
          </Suspense>
      </div>
  )
}
