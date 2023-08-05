import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import headshot from '../images/headshot.jpg';
import { Layout } from '../components/layout';
import { SectionDivider } from '../components/section-divider';
import { ResumeTimeline } from '../components/resume-timeline';
import { resumeEntries } from '../data/resume-entries';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';

interface IFormData {
	name: string;
	email: string;
	message: string;
}

const defaultFormData: IFormData = {
	name: '',
	email: '',
	message: '',
};

type IInputError = string | null;

const defaultInputError: IInputError = null;

const IndexPage: React.FC<PageProps> = () => {
	const [formData, setFormData] = React.useState(defaultFormData);
	const [inputError, setInputError] = React.useState(defaultInputError);

	const handleFormChange = (event: any) => {
		const { name, value } = event.target as HTMLInputElement;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleFormSubmit = (event: any) => {
		event.preventDefault();

		// TODO: Validation?

		axios
			.post('https://ex0av8epzj.execute-api.us-east-1.amazonaws.com/Production', formData)
			.then((response) => {
				console.log(response);
			})
			.catch((response) => {
				console.log(response);
			});
	};

	return (
		<Layout>
			<section className='flex justify-between pt-4'>
				<span className='uppercase p-4 tracking-widest'>James Worden</span>
				<div className='flex flex-col justify-around'>
					<button
						className='uppercase px-8 py-2 tracking-widest bg-transparent border border-rose-900 text-rose-900 text-sm rounded-md tracking-widest'
						onClick={() => scrollTo('#contact-section')}
					>
						Contact
					</button>
				</div>
			</section>

			<section className='flex justify-between mt-36 mb-40'>
				<div className='pt-[50px] flex flex-col'>
					<div className='pb-8'>
						<h1 className='text-4xl pb-2'>I'm James Worden.</h1>
						<span>I strive to build simple and</span>
						<br />
						<span>intuitive software.</span>
					</div>

					<div>
						<button className='uppercase px-8 py-2 tracking-widest bg-rose-900 text-white text-sm rounded-md shadow-2xl tracking-widest'>
							My Work
						</button>
					</div>
				</div>

				<div className='relative mr-4 w-[360px] h-[240px]'>
					<img alt='Headshot' src={headshot} className='rounded-3xl absolute z-10' />
					<div className='absolute top-[20px] left-[20px] w-full h-full bg-rose-900 rounded-3xl z-2 shadow-2xl' />
				</div>
			</section>

			<SectionDivider displayName='About' displayNumber='01'></SectionDivider>

			<section className='columns-2 my-16'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.
				</p>
			</section>

			<SectionDivider displayName='Resume' displayNumber='02'></SectionDivider>

			<section className='flex justify-around my-16'>
				<ResumeTimeline resumeEntries={resumeEntries}></ResumeTimeline>
			</section>

			<SectionDivider displayName='Contact' displayNumber='03'></SectionDivider>

			<section className='flex justify-around flex-col my-16' id='contact-section'>
				<div>
					<h2 className='text-2xl'>james@jamesworden.com</h2>

					<form onSubmit={handleFormSubmit} className='py-8 flex flex-col max-w-sm'>
						<div className='flex'>
							<label htmlFor='name' className='mr-4'>
								<h5>Name:</h5>
							</label>
							<input
								className='bg-transparent outline-none border-b border-slate-800 w-full'
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleFormChange}
							/>
						</div>

						<br />

						<div className='flex'>
							<label htmlFor='email' className='mr-4'>
								<h5>Email:</h5>
							</label>
							<input
								className='bg-transparent outline-none border-b border-slate-800 w-full'
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleFormChange}
							/>
						</div>

						<br />

						<div className='flex'>
							<label htmlFor='message' className='mr-4'>
								<h5>Message:</h5>
							</label>
							<TextareaAutosize
								className='bg-transparent outline-none border-b border-slate-800 resize-none w-full'
								name='message'
								value={formData.message}
								onChange={handleFormChange}
								id='message'
								minRows={1}
								maxRows={5}
							></TextareaAutosize>
						</div>

						<div>
							<button
								type='submit'
								className='uppercase px-8 py-2 tracking-widest bg-rose-900 text-white text-sm rounded-md shadow-2xl tracking-widest mt-8'
							>
								Send
							</button>
						</div>
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
