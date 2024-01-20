import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { mergeBufferGeometries } from 'three-stdlib';
import noise from 'noisejs';

const generateMountainGeometry = () => {
    const terrainSize = 50;
    const terrainResolution = 50;
    const perlin = new noise.Noise(Math.random());
    const maxHeight = 20;
  
    const geometry = new THREE.PlaneGeometry(terrainSize, terrainSize, terrainResolution, terrainResolution);
    const colors = new Float32Array(geometry.attributes.position.count * 3);
  
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const x = geometry.attributes.position.getX(i);
      const y = geometry.attributes.position.getY(i);
  
      // Use Perlin noise to generate height
      const height = perlin.perlin2(x / 10, y / 10) * maxHeight;
  
      geometry.attributes.position.setZ(i, height);
  
      // Adjust colors based on height
      const color = new THREE.Color().setHSL(0.5, 0.5, height / maxHeight);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
  
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
    return geometry;
};

const SnowyMountainScene = () => {
  const mount = useRef();
  
    useEffect(() => {
      if (!mount.current) return;
  
         // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mount.current.appendChild(renderer.domElement);

        // Create mountain
        const mountainGeometry = generateMountainGeometry();
        const mountainMaterial = new THREE.MeshBasicMaterial({ vertexColors: 2 });
        const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
        scene.add(mountain);

        // Set up snow particles
        const snowParticles = new THREE.Group();
        const snowflakeGeometry = new THREE.CircleGeometry(0.1, 6);
        const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

        for (let i = 0; i < 1000; i++) {
            const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
            const x = (Math.random() - 0.5) * 50;
            const y = Math.random() * 20;
            const z = (Math.random() - 0.5) * 50;
            snowflake.position.set(x, y, z);
            snowParticles.add(snowflake);
        }

        scene.add(snowParticles);

        // Set camera position
        camera.position.z = 50;

        // Set background color
        scene.background = new THREE.Color(0x330033); // Purple background

        // Set up animation
        const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the mountains
        mountain.rotation.y += 0.005;

        // Move snow particles
        snowParticles.children.forEach(snowflake => {
            snowflake.position.y -= 0.1;
            if (snowflake.position.y < 0) {
            snowflake.position.y = 20;
            }
        });

        renderer.render(scene, camera);
        };

        // Handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        animate();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mount} />;
};

export default SnowyMountainScene;