import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 2, 5); 

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400);
    renderer.shadowMap.enabled = true; 
    containerRef.current.appendChild(renderer.domElement);

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5); 
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true; 
    scene.add(directionalLight);

   

    
    const loader = new GLTFLoader();
    loader.load(
      "/models/party_dress.glb", 
      (gltf) => {
        console.log("Model loaded successfully:", gltf);

        const model = gltf.scene;

       
        model.position.set(0, -6, 0); 
        model.scale.set(0.07, 0.07, 0.07); 
        model.traverse((node) => {
          if (node.isMesh) node.castShadow = true; 
        });
        scene.add(model);
        console.log("Model position:", model.position);
        console.log("Model scale:", model.scale);
        console.log("Model details:", model);

        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01; 
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

   
    return () => {
      if (renderer) renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default ThreeDModel;
