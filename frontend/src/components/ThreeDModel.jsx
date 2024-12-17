import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeDModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, and Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 2, 5); // Adjust camera position for better visibility

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400);
    renderer.shadowMap.enabled = true; // Enable shadows
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Bright ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // Strong directional light
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true; // Enable shadows for directional light
    scene.add(directionalLight);

   

    // Load 3D Model
    const loader = new GLTFLoader();
    loader.load(
      "/models/party_dress.glb", // Path to your 3D model
      (gltf) => {
        console.log("Model loaded successfully:", gltf);

        const model = gltf.scene;

        // Position and scale the model
        model.position.set(0, -6, 0); // Place the model at the center
        model.scale.set(0.07, 0.07, 0.07); // Adjust scale for visibility
        model.traverse((node) => {
          if (node.isMesh) node.castShadow = true; // Enable shadows for meshes
        });
        scene.add(model);

        // Debug: Log model properties
        console.log("Model position:", model.position);
        console.log("Model scale:", model.scale);
        console.log("Model details:", model);

        // Animation Loop
        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01; // Spin the model around the Y-axis
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // Cleanup
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
