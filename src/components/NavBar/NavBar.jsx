import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiSearch2Line } from "react-icons/ri";
import { TbMenu3 } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { FaStethoscope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

import { assets } from "../../assets/assets";
const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const navigate = useNavigate();
	const [showSearch, setShowSearch] = useState(false);
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const [token, setToken] = useState(true);

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	//
	const handleShowSearch = () => {
		setShowSearch(!showSearch);
	};

	return (
		<div className="fixed top-0 w-full z-50 ">
			{/* Top Bar */}
			<div className="relative hidden bg-primary w-full py-2 px-8 text-white md:flex items-center justify-between text-xs font-medium">
				<div className="flex items-center gap-1">
					<HiLocationMarker className="text-sm" />
					<p>District Avenue, Plot 20, Location, City.</p>
				</div>
				<div className="flex items-center gap-1">
					<MdEmail className="text-sm" />
					<p>info@medicare.com</p>
				</div>
			</div>

			{/* Main Navbar */}
			<div className="bg-white w-full flex items-center justify-between py-3 px-5 shadowOne">
				{/* Logo Section */}
				<div
					onClick={() => {
						navigate("/");
						scrollTo(0, 0);
					}}
					className="text-xl font-bold text-primary cursor-pointer"
				>
					MediCare
				</div>

				{/* Menu Section */}
				<div className="hidden md:flex">
					<ul className="flex items-center gap-6 text-xs font-semibold text-gray-500">
						<NavLink
							to="/"
							className="hover:text-primary hover:scale-105 transition-all duration-300"
						>
							<li>HOME</li>
						</NavLink>
						<NavLink
							to="/about"
							className="hover:text-primary hover:scale-105 transition-all duration-300"
						>
							<li>ABOUT</li>
						</NavLink>
						<NavLink
							to="/alldoctors"
							className="hover:text-primary hover:scale-105 transition-all duration-300"
						>
							<li>DOCTORS</li>
						</NavLink>
						<NavLink
							to="/contact"
							className="hover:text-primary hover:scale-105 transition-all duration-300"
						>
							<li>CONTACT</li>
						</NavLink>
					</ul>
				</div>

				{/* Icon Buttons Section */}
				<div className="flex items-center gap-4 text-gray-700">
					{/* Profile Icon */}

					<div>
						{token ? (
							<div className="flex items-center gap-2 cursor-pointer group relative">
								<img
									className="w-8 rounded-full"
									src={assets.profile_pic}
									alt=""
								/>
								<img className="w-2.5" src={assets.dropdown_icon} alt="" />

								<div className=" absolute top-0 right-0 pt-14 text-base font-medium z-40 hidden group-hover:block ">
									<div className="min-w-48 bg-bgColor shadowOne rounded-lg  flex flex-col gap-2 p-5 text-[0.85rem]">
										<p
											onClick={() => navigate("myprofile")}
											className="hover:text-primary cursor-pointer "
										>
											My Profile
										</p>
										<p
											onClick={() => navigate("myappointment")}
											className="hover:text-primary cursor-pointer "
										>
											My Appointments
										</p>
										<p
											onClick={() => setToken(false)}
											className="hover:text-primary cursor-pointer "
										>
											Logout
										</p>
									</div>
								</div>
							</div>
						) : (
							<button
								onClick={() => navigate("./login")}
								className=" p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
								aria-label="Profile"
							>
								<CgProfile />
							</button>
						)}
					</div>
					{/* Search Icon */}
					<button
						onClick={handleShowSearch}
						className="hidden md:block p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
						aria-label="Search"
					>
						<RiSearch2Line />
					</button>
					{/* Menu Icon */}

					<button
						onClick={handleShowMenu}
						className="md:hidden p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
						aria-label="Menu"
					>
						<TbMenu3
							className={`transform transition-all duration-300 ${
								showMenu ? "rotate-90" : "rotate-0"
							}`}
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu Section */}
			{showMenu && (
				<div className="md:hidden bg-slate-100  fixed bottom-0 left-0 w-full px-5 py-5 rounded-xl opacity-0 animate-fadeIn transition-all duration-500 ease-in-out   shadowOne">
					<ul className="flex justify-between items-center  text-xl font-medium text-primary">
						<NavLink
							to="/"
							className="p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
						>
							<AiFillHome />
						</NavLink>
						<NavLink
							to="/about"
							className="p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
						>
							<AiOutlineTeam />
						</NavLink>
						<NavLink
							to="/alldoctors"
							className="p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
						>
							<FaStethoscope />
						</NavLink>
						<NavLink
							to="/contact"
							className="p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
						>
							<FiPhoneCall />
						</NavLink>

						<button
							onClick={handleShowSearch}
							className="p-3 text-lg rounded-full bg-gray-100 neomorphic hover:scale-105 transition"
							aria-label="Search"
						>
							<RiSearch2Line />
						</button>
					</ul>
				</div>
			)}

			{/* Search Field */}

			{showSearch && (
				<div className="w-full bg-gray-950 flex items-center justify-center opacity-90 fixed inset-0 z-30 ">
					{/* Close Button */}
					<IoIosClose
						onClick={handleShowSearch}
						className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out"
					/>

					{/* Search Container */}
					<div className="flex items-center justify-center gap-3 bg-gray-800 p-2 sm:p-6 rounded-lg shadow-lg">
						{/* Search Input */}
						<input
							type="text"
							placeholder="Search..."
							className="border border-gray-600 bg-transparent p-3 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 w-[200px] sm:w-[300px] lg:w-[400px]"
						/>
						{/* Search Button */}
						<button className="bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition duration-300 ease-in-out">
							<RiSearch2Line className="text-xl" />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavBar;
