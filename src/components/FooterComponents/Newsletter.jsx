import React from "react";
import { IoMdMail } from "react-icons/io";
const Newsletter = () => {
	return (
		<div className="  px-6 py-8 w-full bg-gray-100 grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
			<div>
				<h2 className="text-2xl sm:text-4xl font-bold mb-4">
					Subscribe to our Newsletter
				</h2>
				<p className="text-sm sm:text-base mb-8">
					Get the latest updates, health tips, and exclusive offers straight to
					your inbox.
				</p>
			</div>

			<form className="w-full flex flex-col  justify-between items-center gap-4">
				<div className="w-full flex flex-col sm:flex sm:flex-row items-center justify-between gap-4">
					<input
						type="text"
						placeholder="Name"
						className="px-4 py-3 w-full sm:w-1/2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
					/>
					<input
						type="email"
						placeholder="Email"
						className="px-4 py-3 w-full sm:w-1/2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
					/>
				</div>

				<button
					type="submit"
					className="bg-primary text-gray-50 w-full flex items-center justify-center gap-2 font-medium py-3 px-6 rounded-md transition-transform duration-500 transform hover:scale-105 hover:bg-gray-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
				>
					<IoMdMail /> Sign Up
				</button>
			</form>
		</div>
	);
};

export default Newsletter;
