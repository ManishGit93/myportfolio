import React from 'react';
import planescene from '../../../public/assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
    const {scene,animations} = useGLTF(planescene)
    return (
      <mesh {...props}>
          <primitive object={scene}/>
      </mesh>
  )
}

export default Plane