import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Leva, useControls } from "leva";
import { motion } from "framer-motion-3d";
import { Float, MeshDistortMaterial, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";
const Experience = (props) => {
    // const { section } = props;
    const isMobile = window.innerWidth < 768;
    const data = useScroll();
    const { viewport } = useThree();
    const [characterAnimation, setCharacterAnimation] = useState("Talking");
    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();
    const [section, setSection] = useState(0);
    const { animation } = useControls({
        animation: {
            value: "Talking",
            options: ["Talking", "Falling", "FallingToRoll"],
        },
    });
    useEffect(() => {
        setCharacterAnimation("Falling");
        setTimeout(() => {
            setCharacterAnimation(section === 0 ? "Talking" : "Standing");
        }, 600);
    }, [section]);
    useFrame((state) => {
        let curSection = Math.floor(data.scroll.current * data.pages);

        if (curSection > 3) {
            curSection = 3;
        }

        if (curSection !== section) {
            setSection(curSection);
        }

        // state.camera.position.x = cameraPositionX.get();
        // state.camera.lookAt(cameraLookAtX.get(), 0, 0);

        // const position = new THREE.Vector3();
        // characterContainerAboutRef.current.getWorldPosition(position);
        // console.log([position.x, position.y, position.z]);

        // const quaternion = new THREE.Quaternion();
        // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
        // const euler = new THREE.Euler();
        // euler.setFromQuaternion(quaternion, "XYZ");

        // console.log([euler.x, euler.y, euler.z]);
    });

    return (
        <>
            <motion.group
                // scale={[0.9, 0.9, 0.9]}
                position={[0, 0, 2]} // Place the avatar in front of the camera
                rotation={[-Math.PI / 12, 0, 0]}
                rotation-x={-Math.PI / 12}
                animate={"" + section}
                transition={{
                    duration: 0.6,
                }}
                variants={{
                    0: {
                        scaleX: 0.9,
                        scaleY: 0.9,
                        scaleZ: 0.9,
                    },
                    1: {
                        y: -6.1,
                        x: 0,
                        z: 1,
                    },

                    3: {
                        y: -17.1,
                        x: isMobile ? 0.2 : 0.5,
                        z: isMobile ? 1 : 1,
                        rotateX: 0,
                        rotateY: isMobile ? 0.2 : -Math.PI / 4,
                        rotateZ: 0,
                        scaleX: 1,
                        scaleY: 1,
                        scaleZ: 1,
                    },
                }}
                // animate={{
                //   y: section === 0 ? -1 : 1,
                //   x: section === 0 ? 2 : 1,
                // }}
            >
                <Avatar animation={characterAnimation} />
            </motion.group>

            <ambientLight intensity={4} />

            <Leva hidden={true} />
        </>
    );
};

export default Experience;
