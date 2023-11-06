import React from 'react';
import { LinkedInSvg } from './svgs/linkedin-svg';
import { GithubSvg } from './svgs/github-svg';
import { EnvelopeSvg } from './svgs/envelope-svg';
import cx from 'classnames';

interface FooterProps {
	pathClass?: string;
	hidden: boolean;
}

export const Footer: React.FC<FooterProps> = ({ pathClass, hidden }) => (
	<footer
		className={cx(
			'w-full flex justify-around transition',
			hidden ? 'opacity-0' : 'opacity-100'
		)}
	>
		<div className='max-w-screen-xl flex pb-8 pt-2 px-safe-or-2 w-full m-auto'>
			<a
				className='mr-8 flex flex-col justify-around'
				href='https://www.linkedin.com/in/jameswordenny/'
				target='_blank'
			>
				<LinkedInSvg pathClass={pathClass}></LinkedInSvg>
			</a>

			<a
				className='mr-8 flex flex-col justify-around'
				href='https://github.com/jamesworden'
				target='_blank'
			>
				<GithubSvg pathClass={pathClass}></GithubSvg>
			</a>

			<a
				className='mr-8 flex flex-col justify-around'
				href='mailto:james@jamesworden.com'
				target='_blank'
			>
				<EnvelopeSvg pathClass={pathClass}></EnvelopeSvg>
			</a>
		</div>
	</footer>
);
