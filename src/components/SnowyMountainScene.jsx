import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { mergeBufferGeometries } from 'three-stdlib';

const SnowyMountainScene = () => {
  const mount = useRef();

  useEffect(() => {
    if (!mount.current) return;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    // Create mountain range
    const mountainGeometry = new THREE.BufferGeometry();
    const mountainMaterial = new THREE.MeshBasicMaterial({ vertexColors: 2 });

    const mountainGeometries = [];

    for (let i = 0; i < 10; i++) {
    const mountainHeight = Math.random() * 20 + 10;
    const mountainWidth = Math.random() * 10 + 5;

    const coneGeometry = new THREE.ConeGeometry(mountainWidth, mountainHeight, 50);
    const coneColors = new Float32Array(coneGeometry.attributes.position.count * 3);
    coneColors.fill(1); // Set all colors to white

    coneGeometry.setAttribute('color', new THREE.BufferAttribute(coneColors, 3));

    const matrix = new THREE.Matrix4();
    matrix.makeTranslation(0, 0, -i * 20); // Separate each mountain along the z-axis

    coneGeometry.applyMatrix4(matrix);

    mountainGeometries.push(coneGeometry);

    // Adjust colors for each cone based on its height
    const color = new THREE.Color().setHSL(0.7 - i * 0.05, 1, 0.7);
    for (let j = 0; j < coneColors.length; j += 3) {
        coneColors[j] *= color.r;
        coneColors[j + 1] *= color.g;
        coneColors[j + 2] *= color.b;
    }
    }

    const mergedGeometry = mergeBufferGeometries(mountainGeometries);

    // Adjust colors for the merged geometry
    const mountainColors = new Float32Array(mergedGeometry.attributes.position.count * 3);
    for (let i = 0; i < mountainColors.length; i += 3) {
    const color = new THREE.Color().setHSL(0.7 - (i / 3) * 0.05, 1, 0.7);
    mountainColors[i] = color.r;
    mountainColors[i + 1] = color.g;
    mountainColors[i + 2] = color.b;
    }

    mergedGeometry.setAttribute('color', new THREE.BufferAttribute(mountainColors, 3));

    const mountain = new THREE.Mesh(mergedGeometry, mountainMaterial);
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