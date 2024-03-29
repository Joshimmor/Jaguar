/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Romain Vaysse (https://sketchfab.com/redshell)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/japanese-mask-9a3972e41f4646129245c6acd5a19b71
title: Japanese Mask
*/

import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useFrame } from '@react-three/fiber';

export default function Mask({ ...props }) {
  let mask = useRef();
  let [Rotation,setRotation] = useState(1);
  const changeRotation = () =>{
    setRotation(Number(!Rotation))
    console.log(Rotation,spring.z)
  }
  // const  { scene } = useGLTF('static/Mask/scene.gltf');
  // const  spring  = useSpring({
  //   z: Rotation? [Math.PI/2,-Math.PI,0 ]:[ Math.PI/2,-Math.PI,Math.PI],
  //   config:{ mass: .85, tension: 190, friction: 10 }
  // });
 

  // return (
    
  //   <group  rotateZ={spring.z}  dispose={null} scale={2} >
  //     <a.group onClick={changeRotation}  rotation={spring.z} position={[0,0,0]} scale={2}>
  //       <mesh  geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
  //       <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
  //       {/* <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} /> */}
  //       {/* <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} /> */}
  //     </a.group>
  //   </group>
  // )
  const { scene } = useGLTF('static/Mask/scene.gltf')
  
  return <primitive  object={scene} position={[0,-20,0]} rotation={[0,0,0]} scale={6}/>

}

useGLTF.preload('static/Mask/scene.gltf')
