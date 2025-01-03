import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
				{/* About Section */}
				<div>
					<h3 className="text-xl font-semibold mb-4">About Us</h3>
					<p className="text-sm text-gray-400">
						We are dedicated to connecting patients with top doctors and
						providing health tips for a better life.
					</p>
				</div>

				{/* Links Section */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Quick Links</h3>
					<ul className="text-sm text-gray-400 space-y-2">
						<li>
							<a href="/about" className="hover:text-white">
								About
							</a>
						</li>
						<li>
							<a href="/services" className="hover:text-white">
								Services
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-white">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Social Media Section */}
				<div>
					<h3 className="text-xl font-semibold mb-4">Follow Us</h3>
					<div className="flex space-x-4 ">
						<a
							href="https://facebook.com"
							className="hover:text-blue-500 transition-transform transform hover:scale-110 "
						>
							<GrFacebookOption / >
						</a>
						<a
							href="https://twitter.com"
							className="hover:text-blue-400 transition-transform transform hover:scale-110"
						>
							<BsTwitterX />
						</a>
						<a
							href="https://instagram.com"
							className="hover:text-pink-400 transition-transform transform hover:scale-110"
						>
							<IoLogoInstagram />
						</a>
						<a
							href="https://instagram.com"
							className="hover:text-pink-400 transition-transform transform hover:scale-110"
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
				© {new Date().getFullYear()} HealthConnect. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
