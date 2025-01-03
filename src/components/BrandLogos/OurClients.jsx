import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import Brand Logos
import Logo_1 from "../BrandLogos/logo-1.png";
import Logo_2 from "../BrandLogos/logo-2.png";
import Logo_3 from "../BrandLogos/logo-3.png";
import Logo_4 from "../BrandLogos/logo-4.png";
import Logo_5 from "../BrandLogos/logo-5.png";
import Logo_6 from "../BrandLogos/logo-11.png";
import TitleHeader from "../TitleHeader";

const OurClients = () => {
	return (
		<div className="w-full px-4 py-8 bg-white">
			<TitleHeader title={"Our Clients"}>
				<p>See top brands that trust our services</p>
			</TitleHeader>
			<Swiper
				loop={true}
				spaceBetween={0} // Ensure no gaps
				centeredSlides={false}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper"
				breakpoints={{
					320: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				}}
			>
				{[Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6].map((logo, index) => (
					<SwiperSlide key={index} className="flex items-center justify-center">
						<img
							src={logo}
							alt={`Client Logo ${index + 1}`}
							className="w-32 h-32 object-contain mx-auto opacity-50 hover:opacity-100 transition-opacity duration-1000"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default OurClients;
