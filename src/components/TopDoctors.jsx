import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { MdRadioButtonChecked } from "react-icons/md";
import TitleHeader from "./TitleHeader";
import { AppContext } from "../Pages/Context/AppContext";
const TopDoctors = () => {
	const navigate = useNavigate();
	const { doctors } = useContext(AppContext);
	return (
		<div className="container pt-10 pb-5">
			<TitleHeader title={"Top Doctors to Book"}>
				<p className="max-w-[80%] m-auto">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					aliquid excepturi mollitia suscipit, ipsum assumenda!
				</p>
			</TitleHeader>

			<div className="w-full grid grid-cols-auto gap-4 lg:gap-8  py-10  ">
				{doctors.slice(0, 8).map((item, index) => (
					<div
						onClick={() => {
							navigate(`/appointment/${item._id}`);
						}}
						key={index}
						className=" p-2 sm:p-6 bg-white rounded-2xl shadow-neomorphic hover:shadow-neomorphic-active transition-all transform hover:-translate-y-2 flex flex-col items-center"
					>
						<img className=" mb-4" src={item.image} alt={item.name} />
						<div className="bg-green-100 text-green-800 p-1 rounded-full text-[0.4rem] font-medium mb-2 flex items-center justify-center gap-1">
							{" "}
							<MdRadioButtonChecked className="text-green-400" />
							Available
						</div>
						<p className="text-[0.7rem] sm:text-xl font-semibold text-gray-800 text-center">
							{item.name}
						</p>
						<p className="text-[0.6rem] sm:text-base text-gray-600">
							{item.speciality}
						</p>
					</div>
				))}
			</div>

			<button
				onClick={() => {
					navigate("/alldoctors");
					scrollTo(0, 0);
				}}
				className="creative-button flex items-center justify-center m-auto mt-12"
			>
				{" "}
				View All <GoArrowRight className="ml-3 text-2xl" />
			</button>
		</div>
	);
};

export default TopDoctors;
