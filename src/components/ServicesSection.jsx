import React from 'react';

const services = [
	{
		title: 'Creative Design',
		price: '$99',
		description:
			'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development',
		icon: '/assets/icons/creative-design-icon.png', // Replace with your actual icon path
	},
	{
		title: 'Graphic Design',
		price: '$199',
		description:
			'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development',
		icon: '/assets/icons/graphic-design-icon.png', // Replace with your actual icon path
	},
	{
		title: 'UI/UX Design',
		price: '$299',
		description:
			'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development',
		icon: '/assets/icons/uiux-design-icon.png', // Replace with your actual icon path
	},
	{
		title: 'Web Design',
		price: '$399',
		description:
			'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development',
		icon: '/assets/icons/web-design-icon.png', // Replace with your actual icon path
	},
];

const ServicesSection = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-6xl mx-auto text-center px-4'>
				<h2 className='text-orange-500 text-lg font-semibold'>
					Services
				</h2>
				<h3 className='text-4xl font-bold mt-2'>
					What I Do for Clients
				</h3>
				<p className='text-gray-500 text-lg mt-4'>
					Most common methods for designing
					websites that work well on desktop is
					responsive and adaptive design.
				</p>
			</div>
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-12'>
				{services.map((service, index) => (
					<div
						key={index}
						className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'
					>
						<div className='flex items-center space-x-4'>
							<div className='w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center'>
								<img
									src={
										service.icon
									}
									alt={
										service.title
									}
									className='w-10 h-10 object-contain'
								/>
							</div>
							<div>
								<h4 className='text-xl font-bold'>
									{
										service.title
									}
								</h4>
								<p className='text-orange-500 font-medium'>
									Starts
									from{' '}
									{
										service.price
									}
								</p>
							</div>
						</div>
						<p className='text-gray-500 mt-4 text-sm'>
							{service.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServicesSection;
