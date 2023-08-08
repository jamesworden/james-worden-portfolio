import { ISkillCube } from '../components/skills-cubes';
import javascriptLogo from '../images/javascript-logo.png';
import typescriptLogo from '../images/typescript-logo.png';
import angularLogo from '../images/angular-logo.jpg';
import reactLogo from '../images/react-logo.png';

export const skillCubes: ISkillCube[] = [
	{
		rotation: [1.2, 1, 1],
		position: [-4, 1, -2],
		image: javascriptLogo,
	},
	{
		rotation: [1.2, 1.1, 1],
		position: [2, 1, -3],
		image: typescriptLogo,
	},
	{
		rotation: [1, 0.9, 1.2],
		position: [0, 1, -1],
		image: angularLogo,
	},
	{
		rotation: [1, 0.9, 1.2],
		position: [2, 1, -2],
		image: reactLogo,
	},
];
