import * as React from 'react';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import '../styles/global.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, usePlane, useBox, Triplet } from '@react-three/cannon';
import { Box, Plane, SoftShadows, useTexture } from '@react-three/drei';
import { BufferGeometry, Mesh } from 'three';

export interface SkillCube {
	rotation: Triplet;
	position: Triplet;
	image: any;
}

export interface SkillsCubesProps {
	skillCubes: SkillCube[];
	renderCanvas: boolean;
}

export const SkillsCubes: React.FC<SkillsCubesProps> = ({ skillCubes, renderCanvas }) => {
	const Floor = () => {
		const [scrollY, setScrollY] = useState(window.scrollY);

		const initialRotationX = -Math.PI / 2;
		const initialRotationY = -scrollY / 1000 + 0.075;

		const [ref, api] = usePlane<Mesh>(() => ({
			rotation: [initialRotationX, initialRotationY, 0],
		}));

		useEffect(() => {
			const onScroll = () => setScrollY(window.scrollY);
			window.removeEventListener('scroll', onScroll);
			window.addEventListener('scroll', onScroll, { passive: true });
			return () => window.removeEventListener('scroll', onScroll);
		});

		useFrame(() => {
			api.rotation.set(
				ref.current!.rotation.x,
				ref.current!.rotation.y + initialRotationY,
				ref.current!.rotation.z
			);
		});

		SoftShadows({
			focus: 5,
			size: 5,
		});

		return (
			<mesh ref={ref}>
				<Plane receiveShadow args={[1009, 1000]}>
					<shadowMaterial attach='material' color='#171717' />
				</Plane>
			</mesh>
		);
	};

	const SkillCube = (props: SkillCube) => {
		const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
			props.image,
		]);

		const [ref] = useBox(() => ({
			mass: 1,
			position: props.position,
			rotation: props.rotation,
		}));

		return (
			<mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
				<Box castShadow receiveShadow>
					<meshStandardMaterial
						metalness={3}
						toneMapped
						map={colorMap}
						displacementMap={displacementMap}
						normalMap={normalMap}
						roughnessMap={roughnessMap}
						aoMap={aoMap}
						displacementScale={0.2}
					/>
				</Box>
			</mesh>
		);
	};

	return (
		<div className='h-96 w-full'>
			{renderCanvas && (
				<Canvas shadows camera={{ position: [0, 1.5, 0], rotation: [-0.2, 0, 0], fov: 50 }}>
					<Suspense fallback={null}>
						<directionalLight
							castShadow
							position={[2.5, 8, 5]}
							intensity={3.5}
							shadow-mapSize-width={1024}
							shadow-mapSize-height={1024}
							shadow-camera-far={50}
							shadow-camera-left={-10}
							shadow-camera-right={10}
							shadow-camera-top={10}
							shadow-camera-bottom={-10}
						/>
						<ambientLight intensity={0.2} />
						<Physics>
							<Floor />
							{skillCubes.map((skillCube, i) => (
								<SkillCube
									key={i}
									position={skillCube.position}
									rotation={skillCube.rotation}
									image={skillCube.image}
								/>
							))}
						</Physics>
					</Suspense>
				</Canvas>
			)}
		</div>
	);
};
