/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/model.glb 
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

export function Avatar(props) {
    const { animation } = props;

    const group = useRef();
    const { nodes, materials } = useGLTF("models/model.glb");

    const { animations: CallingAnimation } = useFBX("animation/Talking.fbx");
    const { animations: FallingAnimation } = useFBX("animation/Falling.fbx");
    const { animations: StandingAnimation } = useFBX("animation/Standing.fbx");

    console.log("animations", CallingAnimation);
    CallingAnimation[0].name = "Talking";
    FallingAnimation[0].name = "Falling";
    StandingAnimation[0].name = "Standing";

    const { actions } = useAnimations(
        [CallingAnimation[0], FallingAnimation[0], StandingAnimation[0]],
        group,
    );
    useEffect(() => {
        actions[animation].reset().fadeIn(0.5).play();
        return () => {
            actions[animation].reset().fadeOut(0.5);
        };
    }, [animation]);

    return (
        <group {...props} ref={group} dispose={null}>
            <group rotation-x={-Math.PI / 2}>
                <primitive object={nodes.Hips} />
                <skinnedMesh
                    geometry={nodes.avaturn_body.geometry}
                    material={materials.avaturn_body_material}
                    skeleton={nodes.avaturn_body.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.avaturn_hair_0.geometry}
                    material={materials.avaturn_hair_0_material}
                    skeleton={nodes.avaturn_hair_0.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.avaturn_shoes_0.geometry}
                    material={materials.avaturn_shoes_0_material}
                    skeleton={nodes.avaturn_shoes_0.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.avaturn_look_0.geometry}
                    material={materials.avaturn_look_0_material}
                    skeleton={nodes.avaturn_look_0.skeleton}
                />
            </group>
        </group>
    );
}

useGLTF.preload("models/model.glb");
