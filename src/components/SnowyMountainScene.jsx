import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

const SnowyMountainScene = () => {
    const mount = useRef(null);

    useEffect(() => {
        if (!mount.current) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
                75, 
                window.innerWidth / window.innerHeight,
                0.1,
                1000,
            );
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create snowy mountain geometry
        const coneGeometry = new THREE.ConeGeometry(10, 20, 50);
        const bufferGeometry = new THREE.BufferGeometry().fromGeometry(coneGeometry);

        // Set vertex colors directly in the geometry
        const colors = new Float32Array(bufferGeometry.attributes.position.count * 3);
        colors.fill(1); // Set all colors to white

        bufferGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
        const mountain = new THREE.Mesh(bufferGeometry, material);
        scene.add(mountain);

        // Set mountain position
        mountain.position.set(0, -5, -30);

        // snow
        const snowParticles = new THREE.Group()
        const snowGeometry = new THREE.CircleGeometry(0.1, 6);
        const snowMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
        });

        for (let i=0; i<1000; i++) {
            const snowflake = new THREE.Mesh(snowGeometry, snowMaterial);
            const x = (Math.random() - 0.5) * 50;
            const y = Math.random() * 20;
            const z = (Math.random() - 0.5) * 50;
            snowflake.position.set(x, y, z);
            snowParticles.add(snowflake);
        }

        scene.add(snowParticles);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);
            rotation.y += 0.005;

            snowParticles.children.forEach((flake) => {
                flake.position.y -= 0.1;
                if (flake.position.y < 0) {
                    flake.position.y = 20;
                }
            });
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        }

        window.addEventListener('resize', handleResize);

        animate();
        
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return <div ref={mount} />;
}

export default SnowyMountainScene;
