import React from "react";

const TitleHeader = ({ title, children }) => {
	return (
		<div className="flex flex-col justify-center text-center">
			<h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-primary">
				{title}
			</h2>
			<span className="w-[5%] h-[0.15rem] rounded-full m-auto bg-primary my-2"></span>
			<p className="text-gray-600 text-[0.76rem] sm:text-[1rem] max-w-[100%] md:max-w-[80%] m-auto ">
				{children}
			</p>
		</div>
	);
};

export default TitleHeader;
