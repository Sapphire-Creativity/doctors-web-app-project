import React from "react";
import OtherHeader from "../components/OtherHeader/OtherHeader";
import AboutSectionOne from "../components/AboutComponent/AboutSectionOne";
import { FaBullhorn, FaEye } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import hospitalImage from "../../src/assets/hospital.jpg";
const About = () => {
	return (
		<div className="">
			<OtherHeader
				backgroundImage={
					"https://plus.unsplash.com/premium_photo-1661349659049-1f8f462ae66d?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				title={"About us"}
				subTitle={"Discover what makes us better"}
			/>
			<AboutSectionOne />

			{/*  */}
			<div className="container flex flex-col sm:flex-row items-center justify-center gap-10">
				{/* Mission */}
				<div className="p-8 bg-white shadowOne rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300 ease-in-out">
					<div className="flex items-center gap-4 mb-4">
						<FaBullhorn className="text-3xl text-primary" />
						<h3 className="text-primary text-2xl font-semibold">Our Mission</h3>
					</div>
					<p className="text-gray-600 leading-relaxed">
						To make healthcare accessible, efficient, and patient-centric by
						leveraging technology to connect patients with top-quality
						healthcare professionals anytime, anywhere.
					</p>
				</div>

				{/* Vision */}
				<div className="p-8 bg-white shadowOne rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 duration-300 ease-in-out">
					<div className="flex items-center gap-4 mb-4">
						<FaEye className="text-3xl text-primary" />
						<h3 className="text-primary text-2xl font-semibold">Our Vision</h3>
					</div>
					<p className="text-gray-600 leading-relaxed">
						To revolutionize the way healthcare is accessed and delivered by
						creating a world where everyone can receive timely, personalized
						care at their fingertips.
					</p>
				</div>
			</div>

			{/*  */}
			<div
				className="relative bg-fixed bg-cover bg-center h-[70vh]"
				style={{ backgroundImage: `url(${hospitalImage})` }}
			>
				{/* Overlay with color */}
				<div className="absolute inset-0 bg-primary opacity-50"></div>

				{/* Content */}
				<div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center ">
					<h2 className="text-4xl font-semibold mb-2">
						A Healthcare facility with world-class services.
					</h2>
					<p className="mb-4 text-lg">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
						obcaecati consequuntur.
					</p>
					<Link to="/myappointment">
						<button className="  white-button bg-bgColor text-primary font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-white transition duration-300">
							Book Appointment <IoIosSend className="inline ml-2" />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
