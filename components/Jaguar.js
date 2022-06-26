import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export default function Jaguar({ ...props }) {
  const group = useRef();
  useFrame((state) => {
    const a = state.clock.getElapsedTime();
    group.current.rotation.y = a/2;
  })
  const { nodes, materials } = useGLTF("/static/Jaguar/Jaguar.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={.025} >
      <group position={[-5, -25, 66.63]} rotation={[-Math.PI, 0, 0]}>
        <group position={[-21.76, -85.12, 45]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload("/static/Jaguar/Jaguar.gltf")


