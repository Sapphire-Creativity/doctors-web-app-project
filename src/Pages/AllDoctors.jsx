import React, { useContext, useEffect, useState } from "react";
import OtherHeader from "../components/OtherHeader/OtherHeader";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import { MdRadioButtonChecked } from "react-icons/md";

const AllDoctors = () => {
	const navigate = useNavigate();
	const { speciality } = useParams();

	const { doctors } = useContext(AppContext);
	const [filterDoc, setFilterDoc] = useState([]);

	const applyFilter = () => {
		if (speciality) {
			setFilterDoc(doctors.filter((moc) => moc.speciality === speciality));
		} else {
			setFilterDoc(doctors);
		}
	};

	useEffect(() => {
		applyFilter();
	}, [doctors, speciality]);
	return (
		<div>
			<OtherHeader
				backgroundImage={
					"https://plus.unsplash.com/premium_photo-1661349659049-1f8f462ae66d?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				title={"Our Doctors"}
				subTitle={"Discover what makes us better"}
			/>
			<section className="container">
				<div>
					<p className="text-gray-600">Browse though the doctors specialist</p>

					<div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
						<div className="flex flex-col gap-4 text-sm text-gray-600">
							<p
								onClick={() =>
									speciality === "General physician"
										? navigate("/alldoctors")
										: navigate("/alldoctors/General physician")
								}
								className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
									speciality === "General physician"
										? "bg-indigo-100 text-black"
										: ""
								}`}
							>
								General Physician
							</p>
							<p
								onClick={() =>
									speciality === "Gynecologist"
										? navigate("/alldoctors")
										: navigate("/alldoctors/Gynecologist")
								}
								className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
									speciality === "Gynecologist"
										? "bg-indigo-100 text-black"
										: ""
								}`}
							>
								Gynecologist
							</p>
							<p
								onClick={() =>
									speciality === "Dermatologist"
										? navigate("/alldoctors")
										: navigate("/alldoctors/Dermatologist")
								}
								className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
									speciality === "Dermatologist"
										? "bg-indigo-100 text-black"
										: ""
								}`}
							>
								Dermatologist
							</p>
							<p
								onClick={() =>
									speciality === "Pediatricians"
										? navigate("/alldoctors")
										: navigate("/alldoctors/Pediatricians")
								}
								className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
									speciality === "Pediatricians"
										? "bg-indigo-100 text-black"
										: ""
								}`}
							>
								Pediatricians
							</p>
							<p
								onClick={() =>
									speciality === "Neurologist"
										? navigate("/alldoctors")
										: navigate("/alldoctors/Neurologist")
								}
								className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
									speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
								}`}
							>
								Neurologist
							</p>
							<p
								onClick={() =>
									speciality === "Gastroenterologist"
										? navigate("/alldoctors")
										: navigate("/alldoctors/Gastroenterologist")
								}
								className={`w-[94vw] sm:w-auto pl-3 py-3 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
									speciality === "Gastroenterologist"
										? "bg-indigo-100 text-black"
										: ""
								}`}
							>
								Gastroenterologist
							</p>
						</div>

						{/*  */}
						<div className="w-full grid grid-cols-auto gap-4 gap-y-6">
							{filterDoc.map((item, index) => (
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
					</div>
				</div>
			</section>
		</div>
	);
};

export default AllDoctors;
