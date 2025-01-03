import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import OtherHeader from "../components/OtherHeader/OtherHeader";
import { assets } from "../assets/assets";

const Appointment = () => {
	const { docId } = useParams();
	const { doctors } = useContext(AppContext);
	const [docInfo, setDocInfo] = useState(null);

	const fetchDocInfo = async () => {
		const docInfo = doctors.find((doc) => doc._id === docId);
		setDocInfo(docInfo);
		console.log(docInfo);
	};

	useEffect(() => {
		fetchDocInfo();
	}, [doctors, docId]);

	return (
		<div>
			<OtherHeader
				backgroundImage={
					"https://plus.unsplash.com/premium_photo-1661349659049-1f8f462ae66d?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				title={"Appointment"}
				subTitle={"Discover what makes us better"}
			/>
			<section className="container">
				{/* Doctors Details */}

				{docInfo && (
					<div>
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="shadowOne rounded-lg">
								<img
									className=" w-full sm:max-w-72 "
									src={docInfo.image}
									alt=""
								/>
							</div>

							<div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-slate-50 mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
								{/* Doc Info; name, degree, experience */}
								<p className="flex items-center gap-2 text-2xl font-medium text-green-950">
									{docInfo.name}{" "}
									<img className="w-5" src={assets.verified_icon} alt="" />{" "}
								</p>
								<div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
									<p>
										{docInfo.degree} - {docInfo.speciality}{" "}
									</p>

									<button className="py-0.5 px-2 border text-xs rounded-full">
										{docInfo.experience}
									</button>
								</div>

								{/* Doctor About */}
								<div>
									<p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
										About <img src={assets.info_icon} alt="" />
									</p>
									<p className="text-sm text-gray-500 max-w-[700px] mt-1">
										{docInfo.about}
									</p>
								</div>

								<p>
									Appointment fee: <span>{docInfo.fees}</span>{" "}
								</p>
							</div>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default Appointment;
