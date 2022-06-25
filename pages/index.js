import React, {useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { OrbitControls} from '@react-three/drei';
import { Canvas, useThree} from '@react-three/fiber';
import { Suspense } from 'react';
import Jaguar  from "../components/Jaguar"

const Controls = () => {
  const orbitRef = useRef();
  const {camera, gl} = useThree();

  return (
      <OrbitControls
          args={[camera, gl.domElement]}
          ref={orbitRef}
      />
  )
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
         className={styles.canvas}>
          <Suspense fallback={null}>
          <Controls/>
          <pointLight position={[10, 10, 10]} />
         
          <Jaguar position={[0,0,0]}
                rotation={[.2, 0, 0]}/>
   
          </Suspense>
        </Canvas>
      </main>
    </div>
  )
}
