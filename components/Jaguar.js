import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Jaguar({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/static/Jaguar.gltf")
  return (
    <group ref={group} {...props} dispose={null} scale={.02}>
      <group position={[0, -18.49, 66.63]} rotation={[-Math.PI, 0, 0]}>
        <group position={[-21.76, -85.12, -3.18]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload("/static/Jaguar.gltf")


