import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { SkillCube } from './skill-cube';
import { Floor } from './floor';
import cx from 'classnames';

export interface SkillsCubesProps {
	skillCubes: SkillCube[];
	renderCanvas: boolean;
}

export const SkillsCubes: React.FC<SkillsCubesProps> = ({ skillCubes, renderCanvas }) => {
	return (
		<div className={cx('w-full h-full', renderCanvas ? 'absolute' : 'hidden')}>
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
