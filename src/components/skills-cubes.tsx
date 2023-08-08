import * as React from 'react';
import { Suspense } from 'react';
import '../styles/global.scss';
import { Canvas } from '@react-three/fiber';
import { Physics, usePlane, useBox, Triplet } from '@react-three/cannon';
import { Box, Plane, RoundedBox, SoftShadows, useTexture } from '@react-three/drei';
import { BufferGeometry, Mesh } from 'three';

export interface ISkillCube {
	rotation: Triplet;
	position: Triplet;
	image: any;
}

export interface ISkillsCubesPageProps {
	skillCubes: ISkillCube[];
}

interface ICubeProps {
	position: Triplet;
	rotation: Triplet;
	image: any;
}

export const SkillsCubes: React.FC<ISkillsCubesPageProps> = ({ skillCubes }) => {
	const PlaneC = () => {
		const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

		SoftShadows({
			focus: 5,
			size: 5,
		});

		return (
			<mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
				<Plane receiveShadow args={[1009, 1000]}>
					<shadowMaterial attach='material' color='#171717' />
				</Plane>
			</mesh>
		);
	};

	const Cube = (props: ICubeProps) => {
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
		<div className='h-64 w-full'>
			<Canvas shadows camera={{ position: [0, 1.5, 1], rotation: [-0.2, 0, 0], fov: 25 }}>
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
					<Physics>
						<PlaneC />
						{skillCubes.map((skillCube) => (
							<Cube
								position={skillCube.position}
								rotation={skillCube.rotation}
								image={skillCube.image}
							/>
						))}
					</Physics>
				</Suspense>
			</Canvas>
		</div>
	);
};
