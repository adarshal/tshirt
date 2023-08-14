import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  //apply color smoothly
  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt
















// import React from 'react';
// import { easing } from 'maath';
// import { useSnapshot } from 'valtio';
// import { useFrame } from '@react-three/fiber';
// import { Decal, useGLTF, useTexture } from '@react-three/drei';
// // decal= mesh/texture
// // useGLTF to use 3d model

// import state from '../store';

// const Shirt = () => {
//     const snap=useSnapshot(state);
//     const {nodes, materials}=useGLTF('./shirt_baked.glb');

//     const logoTexture=useTexture(snap.logoDecal);
//     const fullTexture=useTexture(snap.fullDecal);
//     useFrame((state,delta)=>{
//         //apply color smoothly
//         easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
//         // materials.lambert1.color.lerp(snap.color, easing.linear(delta * 4));
//     })
//     const stateString=JSON.stringify(snap);//need to pass it as key as somtime tshirt not changes// so whenever state changes change shown
    
//   return (
//     <group key={stateString}>
//         <mesh 
//         castShadow
//         geometry={nodes.T_Shirt_male.geometry}
//         material={materials.lambert1}
//         material-roughness={1}
//         dispose={null}
//         >
//             {snap.isFullTexture && (
//                 <Decal
//                 position={[0,0,0]}
//                 rotation={[0,0,0]}
//                 scale={1}
//                 map={fullTexture}
//                 />                
//             )} 
//             {snap.isLogoTexture && (
//                 <Decal
//                 position={[0,0.04,0.15]}
//                 rotation={[0,0,0]}
//                 scale={0.15}
//                 map={logoTexture}
//                 />                
//             )} 
//         </mesh>

//     </group>
//   )
// }

// export default Shirt;
