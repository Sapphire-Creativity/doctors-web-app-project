import React from "react";
import About_image from "../../assets/about_image.png";
import { useEffect } from "react";

// Import CountUp for Rush Counter Effect
import CountUp from "react-countup";

const AboutSectionOne = () => {
	return (
		<div className="container">
			<div className="flex flex-col py-10">
				<div className="flex flex-col lg:flex-row items-stretch justify-center gap-5">
					{/* Image Section */}
					<div className="flex-1 order-2 lg:order-1">
						<img
							src={About_image}
							alt="About_image"
							className="rounded-xl w-[30rem] m-auto h-auto object-cover"
						/>
					</div>

					{/* Text Content Section */}
					<div className="flex-1 flex flex-col order-1 lg:order-2">
						<h5 className="tracking-widest text-primary font-semibold">
							WHO WE ARE
						</h5>
						<hr className="w-10 h-[0.2rem] rounded-full bg-primary my-3" />
						<h3 className="text-3xl lg:text-5xl my-3 font-bold text-gray-800">
							With us, expect more than just Healthcare Services.
						</h3>
						<p className="text-gray-600 text-[0.9rem] py-4">
							Welcome to MediCare, your trusted partner in personalized
							healthcare. We are committed to bridging the gap between patients
							and doctors by offering a seamless platform where you can book
							appointments with your preferred healthcare providers at your
							comfort and convenience. 
							
							<br />
							<br />
							At MediCare, we understand that health is
							personal, and everyone deserves access to the right care at the
							right time. That’s why we’ve created a solution that empowers you
							to connect with qualified professionals who meet your unique
							needs.
						</p>
					</div>
				</div>

				{/* Rush Counter Cards Section */}
				<div className="-mt-10 max-w-[95%]  mx-auto grid grid-cols-2 sm:grid-cols-3 items-center justify-center lg:justify-between gap-5 sm:gap-10 p-5 sm:p-10 bg-white rounded-xl shadowOne cursor-pointer">
					{/* Counter Card 1 */}
					<div className="counter-card flex flex-col gap-1 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
						<h2 className="text-primary font-extrabold text-xl md:text-4xl">
							<CountUp end={10000} duration={2} separator="," />
						</h2>
						<p className="text-gray-500 text-[0.6rem] md:text-[0.85rem]">
							Happy Customers
						</p>
					</div>

					{/* Counter Card 2 */}
					<div className="counter-card flex flex-col gap-1 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
						<h2 className="text-primary font-extrabold text-xl md:text-4xl">
							<CountUp end={1000} duration={2} separator="," />
						</h2>
						<p className="text-gray-500 text-[0.6rem] md:text-[0.85rem]">
							Medical Professionals
						</p>
					</div>

					{/* Counter Card 3 */}
					<div className="counter-card    flex flex-col gap-1 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
						<h2 className="text-primary font-extrabold text-xl md:text-4xl">
							<CountUp end={15} duration={2} />
						</h2>
						<p className="text-gray-500  text-[0.6rem] md:text-[0.85rem]">
							Years Experience
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSectionOne;
