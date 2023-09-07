import * as React from 'react';
import { Navbar } from './navbar/navbar';
import { motion } from 'framer-motion';
import { TRANSITION_DURATION_MS } from '../constants';

export interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	contactSectionId?: string;
	onAnimationComplete?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
	children,
	contactSectionId,
	onAnimationComplete,
}) => {
	return (
		<main className='bg-gray-100 dark:bg-gray-900 transition dark:text-gray-100 h-full min-h-screen justify-between flex flex-col'>
			<Navbar contactSectionId={contactSectionId}></Navbar>

			<motion.main
				className='h-full w-full grow flex flex-col justify-between'
				onAnimationComplete={onAnimationComplete}
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 100 }}
				transition={{
					type: 'spring',
					mass: 0.35,
					duration: TRANSITION_DURATION_MS,
				}}
			>
				<div className='m-auto max-w-screen-lg flex flex-col px-safe-or-2 relative grow w-full'>
					{children}
				</div>

				<footer className='w-full flex justify-around'>
					<div className='max-w-screen-lg flex pb-8 pt-2 px-safe-or-2 w-full m-auto'>
						<a
							className='mr-8 flex flex-col justify-around'
							href='https://www.linkedin.com/in/jameswordenny/'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 36 36'
							>
								<path
									id='Icon_simple-linkedin'
									data-name='Icon simple-linkedin'
									d='M30.67,30.678H25.34V22.324c0-1.992-.041-4.556-2.778-4.556-2.779,0-3.2,2.167-3.2,4.409v8.5H14.026V13.5h5.121v2.342h.069a5.618,5.618,0,0,1,5.055-2.775c5.4,0,6.4,3.555,6.4,8.183v9.429ZM8.005,11.149a3.1,3.1,0,1,1,3.1-3.1A3.093,3.093,0,0,1,8.005,11.149Zm2.673,19.528H5.332V13.5h5.346ZM33.338,0H2.657A2.625,2.625,0,0,0,0,2.593V33.406A2.624,2.624,0,0,0,2.657,36H33.333A2.634,2.634,0,0,0,36,33.407V2.593A2.635,2.635,0,0,0,33.333,0Z'
									className='fill-rose-900 dark:fill-white'
								/>
							</svg>
						</a>

						<a
							className='mr-8 flex flex-col justify-around'
							href='https://github.com/jamesworden'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 36 35.109'
							>
								<path
									id='Icon_simple-github'
									data-name='Icon simple-github'
									d='M18,.445a18,18,0,0,0-5.693,35.077c.9.169,1.23-.387,1.23-.866,0-.428-.015-1.56-.023-3.06-5.007,1.086-6.063-2.415-6.063-2.415a4.771,4.771,0,0,0-2-2.632c-1.63-1.116.126-1.094.126-1.094A3.774,3.774,0,0,1,8.333,27.31a3.836,3.836,0,0,0,5.243,1.5,3.838,3.838,0,0,1,1.14-2.407c-4-.45-8.2-2-8.2-8.9a6.944,6.944,0,0,1,1.852-4.83,6.4,6.4,0,0,1,.158-4.764s1.507-.483,4.95,1.845a16.97,16.97,0,0,1,9,0C25.9,7.428,27.4,7.911,27.4,7.911a6.577,6.577,0,0,1,.18,4.764,6.973,6.973,0,0,1,1.845,4.83c0,6.915-4.208,8.438-8.212,8.88a4.309,4.309,0,0,1,1.215,3.33c0,2.409-.022,4.344-.022,4.929,0,.472.315,1.035,1.237.855A17.978,17.978,0,0,0,18,.445'
									transform='translate(0 -0.446)'
									className='fill-rose-900 dark:fill-white'
								/>
							</svg>
						</a>

						<a
							className='mr-8 flex flex-col justify-around'
							href='mailto:james@jamesworden.com'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='23'
								viewBox='0 0 37.141 25.713'
							>
								<g
									id='Icon_ionic-ios-mail'
									data-name='Icon ionic-ios-mail'
									transform='translate(-3.375 -7.875)'
								>
									<path
										id='Path_5'
										data-name='Path 5'
										d='M40.212,10.369l-9.607,9.785a.173.173,0,0,0,0,.25l6.723,7.16a1.159,1.159,0,0,1,0,1.643,1.164,1.164,0,0,1-1.643,0l-6.7-7.133a.183.183,0,0,0-.259,0L27.1,23.734a7.188,7.188,0,0,1-5.125,2.161,7.333,7.333,0,0,1-5.232-2.223l-1.571-1.6a.183.183,0,0,0-.259,0l-6.7,7.133a1.164,1.164,0,0,1-1.643,0,1.159,1.159,0,0,1,0-1.643l6.723-7.16a.19.19,0,0,0,0-.25L3.679,10.369a.176.176,0,0,0-.3.125V30.073A2.865,2.865,0,0,0,6.232,32.93H37.659a2.865,2.865,0,0,0,2.857-2.857V10.494A.179.179,0,0,0,40.212,10.369Z'
										transform='translate(0 0.658)'
										className='fill-rose-900 dark:fill-white'
									/>
									<path
										id='Path_6'
										data-name='Path 6'
										d='M21.716,24.222a4.854,4.854,0,0,0,3.491-1.464L39.215,8.5a2.806,2.806,0,0,0-1.768-.625H5.994A2.787,2.787,0,0,0,4.226,8.5L18.234,22.758A4.854,4.854,0,0,0,21.716,24.222Z'
										transform='translate(0.23)'
										className='fill-rose-900 dark:fill-white'
									/>
								</g>
							</svg>
						</a>
					</div>
				</footer>
			</motion.main>
		</main>
	);
};
