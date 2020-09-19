import React from "react";
import icon from "../imgs/dust.png";

function ContactSection() {
	return (
		<div>
			<div id="contact">
				<svg
					id="conty"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="black"
						fillOpacity="1"
						d="M0,96L720,128L1440,320L1440,0L720,0L0,0Z"
					></path>
				</svg>
				<h1>Contact</h1>
				<p>
					If you have any questions or want to know more, contact me at my
					<a className='m-1' type="email" href="mailto:ggnino18@gmail.com">
						email
					</a>
					.
					<img alt="magic" src={icon} />
				</p>
				<p id="ft">Portfolio built using React &copy; 2020 By GG.</p>
			</div>
		</div>
	);
}

export default ContactSection;
