/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
// import {  useFrame } from "@react-three/fiber";
export default function Masks({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('static/Masks/Masks.gltf')
  // useFrame((state) => {
  //   const a = state.clock.getElapsedTime();
  //   group.current.position.x = a/2;
  // })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -1.23, 100]}>
        <mesh geometry={nodes.Group32662.geometry} material={nodes.Group32662.material} />
      </group>
      <group position={[-100, -1.23, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Group32662_1.geometry} material={nodes.Group32662_1.material} rotation={[0, Math.PI / 2, 0]} />
      </group>
      <group position={[100, -1.23, 0]}>
        <mesh geometry={nodes.Group32662_2.geometry} material={nodes.Group32662_2.material} rotation={[0, Math.PI / 2, 0]} />
      </group>
      <group position={[0, -1.23, -100]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Group32662_3.geometry} material={nodes.Group32662_3.material} />
      </group>
      <OrthographicCamera makeDefault={false} far={100000} near={-100000} position={[0, 0, -1000]} rotation={[-Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('static/Masks/Masks.gltf')