import React, { useRef,useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from "@react-spring/three";
export default function SelectionBar() {
  let mask = useRef();
  // const { scene } = useGLTF('static/album_cover/scene.gltf')
  const { scene } = useGLTF('static/album_cover/scene.gltf')
  
  return <primitive object={scene} position={[10,-25,0]} rotation={[0,0,0]} scale={100}/>
  

}
