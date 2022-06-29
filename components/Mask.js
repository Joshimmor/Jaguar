/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Romain Vaysse (https://sketchfab.com/redshell)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/japanese-mask-9a3972e41f4646129245c6acd5a19b71
title: Japanese Mask
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Mask({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('static/Mask/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={50}>
      <group rotation={[-Math.PI / 2, 0,Math.PI / 2]} position={[3,0,0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} />
      </group>
      <group rotation={[-Math.PI / 2, 0,-Math.PI / 2]} position={[-3,0,0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0,0,3]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} />
      </group>
      <group rotation={[-Math.PI / 2, 0,Math.PI ]} position={[0,0,-3]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.defaultMat} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.defaultMat} />
      </group>
    </group>
  )
}

useGLTF.preload('static/Mask/scene.gltf')