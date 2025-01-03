import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./components/NavBar/NavBar";
import AllDoctors from "./Pages/AllDoctors";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import MyAppointment from "./Pages/MyAppointment";
import Appointment from "./Pages/Appointment";
import MyProfile from "./Pages/MyProfile";
import NotFound from "./Pages/NotFound";
import Footer from "./components/FooterComponents/Footer";
import Newsletter from "./components/FooterComponents/Newsletter";

const App = () => {
	return (
		<div>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/alldoctors" element={<AllDoctors />} />
				<Route path="/alldoctors/:speciality" element={<AllDoctors />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/myappointment" element={<MyAppointment />} />
				<Route path="/appointment/:docId" element={<Appointment />} />
				<Route path="/myprofile" element={<MyProfile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<Newsletter />

			<Footer />
		</div>
	);
};

export default App;
