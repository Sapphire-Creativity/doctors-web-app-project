import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import TitleHeader from "./TitleHeader";

const SpecialityMenu = () => {
	return (
		<div className="flex flex-col items-center text-center justify-center">
			<TitleHeader title={"Find Doctors By Speciality"}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus
					nisi nostrum cumque officia, asperiores debitis dicta error minima
					non.
				</p>
			</TitleHeader>

			<div className="flex w-full overflow-x-auto items-center justify-center gap-6 pt-10 px-4 sm:gap-8 scrollbar-hide">
				{specialityData.map((item, index) => (
					<Link
						onClick={() => scrollTo(0, 0)}
						key={index}
						to={`/alldoctors/${item.speciality}`}
						className="creative-neomorphic p-5 rounded-xl flex flex-col items-center text-center transition-transform transform hover:scale-110 hover:shadow-neomorphic-active min-w-[120px] sm:min-w-[150px]"
					>
						<img
							className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-full mb-4 shadowOne"
							src={item.image}
							alt={item.speciality}
						/>
						<p className="text-gray-600 font-semibold text-xs">
							{item.speciality}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default SpecialityMenu;
