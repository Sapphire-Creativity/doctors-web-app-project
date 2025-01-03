import React from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

import OurClients from "../components/BrandLogos/OurClients";
import AboutSectionOne from "../components/AboutComponent/AboutSectionOne";
const Home = () => {
	return (
		<>
			<header
				className="relative bg-cover bg-center h-[100vh]"
				style={{ backgroundImage: `url("../src/assets/home-background.jpg")` }}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-accent opacity-60"></div>

				{/* Content */}
				<div className=" max-w-[95%] sm:max-w-[88%] lg:max-w-[60%] m-auto relative flex flex-col items-center justify-center h-full z-10 text-white">
					<h3 className="sm:text-xl  md:text-2xl mb-2 font-semibold">
						Your Health, Our Priority!
					</h3>
					<h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white text-center leading-[2rem] md:max-w-[90%]  ">
						Book Your Doctor's Appointment Anytime, Anywhere.
					</h1>

					<p className="my-3 text-center text-[0.7rem] sn:text-[1rem] md:text-lg font-medium max-w-[90%] ">
						Access trusted healthcare professionals at your convenience. No long
						waits, no hassle—just quality care from the comfort of your home or
						our clinics
					</p>

					<Link to="/myappointment">
						<button className="white-button bg-bgColor text-primary font-medium ">
							Book Appointment <IoIosSend />
						</button>
					</Link>
				</div>
			</header>
			{/* Speciality Meny */}

			<section className="container">
				<SpecialityMenu />
			</section>

			<section>
				<AboutSectionOne />
			</section>

			<section>
				<TopDoctors />
			</section>

			<section>
				<OurClients />
			</section>
		</>
	);
};

export default Home;
