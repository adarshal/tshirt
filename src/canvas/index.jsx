import React from 'react'
import {Canvas} from '@react-three/fiber';
import { Center, Environment } from '@react-three/drei'
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => {
  return (
    <Canvas
    shadows
      className="w-full max-w-full h-full transition-all ease-in"
      camera={{ position: [0, 0, 0], fov: 20 }} 
      gl={{ preserveDrawingBuffer: true }}
      >
      <ambientLight intensity={0.5} />
      <Environment files={"little_paris_under_tower_1k.hdr"} />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;