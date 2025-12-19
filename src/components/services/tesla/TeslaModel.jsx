

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function TeslaModel(props) {
  const { nodes, materials } = useGLTF('/teslaModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.062}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Cylinder_Termo_0.geometry} material={materials.Termo} position={[0, -173.026, 160.741]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cylinder001_Tapa_0.geometry} material={materials.Tapa} position={[-3.133, 462.775, 207.607]} rotation={[-Math.PI / 2, 0, 0]} scale={79.144} />
          <mesh geometry={nodes.Cylinder002_Termo001_0.geometry} material={materials['Termo.001']} position={[0, -173.026, 160.741]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.Cylinder003_Black_0.geometry} material={materials.Black} position={[-3.133, 436.031, 207.607]} rotation={[-Math.PI / 2, 0, 0]} scale={79.144} />
          <mesh geometry={nodes.Cylinder004_hora_0.geometry} material={materials.hora} position={[-3.133, 462.775, 207.607]} rotation={[-Math.PI / 2, 0, 0]} scale={79.144} />
          <mesh geometry={nodes.Cylinder005_Base_0.geometry} material={materials.Base} position={[0, -173.026, 160.741]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes['580b585b2edbce24c47b2cc9_580b585b2edbce24c47b2cc9_0'].geometry} material={materials['580b585b2edbce24c47b2cc9']} position={[80.397, -0.299, 208.227]} rotation={[0, Math.PI / 2, 0]} scale={156.814} />
          <mesh geometry={nodes.Text__0.geometry} material={materials.Text__0} position={[13.586, 277.305, 234.222]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={44.889} />
          <mesh geometry={nodes.Text001__0.geometry} material={materials.Text__0} position={[-9.324, 277.305, 186.638]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={11.058} />
          <mesh geometry={nodes.Text002__0.geometry} material={materials.Text__0} position={[-3.252, 277.305, 179.126]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={13.351} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/teslaModel.glb')
