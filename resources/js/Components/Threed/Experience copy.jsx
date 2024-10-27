import {
  CameraControls,
  Edges,
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  PivotControls,
  useTexture,
} from "@react-three/drei";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion-3d";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useMotionValue } from "framer-motion";
const Experience = (props) => {
  const { section } = props;
  const { viewport } = useThree();
  const ref = useRef();
  const ref2 = useRef();
  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();
  const laravel = useTexture("textures/laravel.png");
  const reactjs = useTexture("textures/reactjs.png");
  const flutter = useTexture("textures/flutter.png");
  const django = useTexture("textures/django.png");
  laravel.flipY = false;
  laravel.encoding = THREE.sRGBEncoding;
  const texture_1 = useLoader(TextureLoader, "textures/laravel.png");
  const texture_2 = useLoader(TextureLoader, "textures/reactjs.png");
  const texture_3 = useLoader(TextureLoader, "textures/flutter.png");
  const texture_4 = useLoader(TextureLoader, "textures/django.png");
  const texture_5 = useLoader(TextureLoader, "textures/laravel.png");
  const texture_6 = useLoader(TextureLoader, "textures/reactjs.png");
  // const textureMaterial = new THREE.MeshStandardMaterial({
  //   map: texture,
  //   transparent: true,
  //   opacity: 1,
  // });
  const [textureIndex, setTextureIndex] = useState(0);
  const textures = [
    "textures/laravel.png",
    "textures/reactjs.png",
    "textures/flutter.png",
    "textures/django.png",
  ];
  useFrame(() => {
    const currentIndex = Math.floor(Date.now() / 1000) % textures.length;
    if (currentIndex !== textureIndex) {
      setTextureIndex(currentIndex);
    }
    ref.current.rotation.x = ref.current.rotation.y += 0.01;
  });
  const texture = useLoader(TextureLoader, textures[textureIndex]);
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;
  const textureMaterialTop = new THREE.MeshStandardMaterial({
    map: laravel,
    transparent: false,
    opacity: 1,
  });
  const textureMaterialBottom = new THREE.MeshStandardMaterial({
    map: reactjs,
    transparent: false,
    opacity: 1,
  });
  const textureMaterialLeft = new THREE.MeshStandardMaterial({
    map: flutter,
    transparent: false,
    opacity: 1,
  });
  const textureMaterialRight = new THREE.MeshStandardMaterial({
    map: django,
    transparent: false,
    opacity: 1,
  });
  const textureMaterialFace = new THREE.MeshStandardMaterial({
    map: laravel,
    transparent: false,
    opacity: 1,
  });
  const textureMaterialBack = new THREE.MeshStandardMaterial({
    map: reactjs,
    transparent: true,
    opacity: 1,
  });

  return (
    <>
      <motion.group
        position={[1, 1, 1]}
        animate={{
          y: section === 0 ? 1 : 1.5,
          x: section === 0 ? 4.3 : 2,
        }}
      >
        {/* <OrbitControls /> */}
        <ambientLight intensity={1} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} /> */}
        <Suspense fallback={null}>
          {/* <directionalLight color="white" position={[0, 0, 1]} /> */}
          {/* <pointLight position={[10, 10, 10]} /> */}
          <mesh scale={section === 0 ? 0.7 : 1.2} ref={ref}>
            <boxGeometry args={[1, 1, 1]} attach="geometry" />
            <Edges />

            <meshStandardMaterial map={texture} />
          </mesh>
        </Suspense>
        Madame Fleur
      </motion.group>
      {section === 1 && (
        <>
          <motion.group
            position={[0, -1.5, -10]}
            animate={{
              z: section === 1 ? 0 : -10,
              x: section === 0 ? 4.3 : 2,

              y: section === 1 ? -viewport.height : -1.5,
            }}
          >
            {/* <OrbitControls /> */}
            <ambientLight intensity={1} />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} /> */}
            <Suspense fallback={null}>
              {/* <directionalLight color="white" position={[0, 0, 1]} /> */}
              {/* <pointLight position={[10, 10, 10]} /> */}
              <mesh scale={section === 0 ? 0.7 : 1.2} ref={ref2}>
                <boxGeometry args={[1, 1, 1]} attach="geometry" />
                <Edges />

                <meshStandardMaterial map={texture} />
              </mesh>
            </Suspense>
            Madame Fleur
          </motion.group>
        </>
      )}
    </>
  );
};

export default Experience;
