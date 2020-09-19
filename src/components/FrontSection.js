import React from "react";
import magic from "../imgs/mw.png";
import glowingBG from '../imgs/GlowingFall.webm';
import compImg from '../imgs/comp.png';

function FrontPage() {
	return (
		<div>
			<div className="container-fluid" id="main">
				<div id="vid-container">
					<video autoPlay loop muted>
                        <source type='video/webm' src={glowingBG} />
                    </video>
				</div>
				<img alt="magic" className="img-fluid" id="magic" src={magic} />
				<h1 id="s">Computer Sorcerer</h1>
				<h2 id="a">Who Codes</h2>
				<a href="#portfolio" className="btn btn-outline-light">
					My Portfolio
				</a>
				<img alt='computer img' id="cc" src={compImg} />
				
			</div>
		</div>
	);
}

export default FrontPage;
