import "./OtherHeader.css";

const OtherHeader = ({ backgroundImage, title, subTitle }) => {
	return (
		<header
			className="hero"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className="hero-overlay">
				<h2 className="">{title}</h2>
				<p className="text-gray-100">{subTitle}</p>
			</div>
		</header>
	);
};

export default OtherHeader;
