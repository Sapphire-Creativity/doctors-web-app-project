import React from "react";

const TitleHeader = ({ title, children }) => {
	return (
		<div className="flex flex-col justify-center text-center pt-10">
			<h2 className="text-[1.5rem] sm:text-4xl md:text-[2.1rem] font-extrabold text-primary">
				{title}
			</h2>
			<span className="w-[10%]  h-[0.15rem] rounded-full m-auto bg-primary my-4"></span>
			<p className="text-gray-600 font-medium text-[0.8rem] sm:text-[1rem]  w-full  md:max-w-[80%] m-auto ">
				{children}
			</p>
		</div>
	);
};

export default TitleHeader;
