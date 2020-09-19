import React from "react";
import spellBookIcon from "../imgs/book.png";
import htmlIcon from "../imgs/html.png";
import cssIcon from "../imgs/css.png";
import jsIcon from "../imgs/js.png";
import reactIcon from "../imgs/react.png";
import mongoIcon from "../imgs/mongo.png";
import npmIcon from "../imgs/npm.png";
import nodelIcon from "../imgs/nodejs.png";
import expressIcon from "../imgs/expressjs-ar21.svg";
import hatIcon from "../imgs/wizard-hat.png";

function AboutSection() {
	return (
		<div style={{position: "relative"}}>
			<div className="d">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="black"
						fillOpacity="1"
						d="M0,160L720,224L1440,96L1440,0L720,0L0,0Z"
					></path>
				</svg>
			</div>
			<section id="mio">
				<div id="spells">
					<img className='ld ld-shiver' alt="spellbook" src={spellBookIcon} />
					<h1 className="p-2">Spell Book</h1>
					<img className='ld ld-rubber-h' alt="html icon" src={htmlIcon} />
					<img className='ld ld-rubber-h' alt="css icon" src={cssIcon} />
					<img className='ld ld-rubber-h' alt="js icon" src={jsIcon} />
					<br />
					<img className='ld ld-rubber-h' alt="react icon" src={reactIcon} />
					<img className='ld ld-rubber-h' alt="mongodb icon" src={mongoIcon} />
					<img className='ld ld-rubber-h' alt="npm icon" src={npmIcon} />
					<br />
					<img className='ld ld-rubber-h' alt="express icon" src={expressIcon} />
					<img className='ld ld-rubber-h' alt="nodejs icon" src={nodelIcon} />
				</div>
				<div id="about">
					<img id="nin" alt="wiz hat" className="ld ld-wander-v" src={hatIcon} />
					<h1 className="p-2">About</h1>
					<p>
						My name is Guillermo Gonzalez, I am a self taught full stack
						developer. I love to code and build different apps, also learning
						different languages, frameworks and libaries. Anytime I get an
						opportunity to learn something, I think of it as adding a new
						"spell" in my "spell book".Everytime I build an app, I think of it
						as making magic behind a computer screen. Im a MERN stack developer,
						looking for a place where I can have an impact, learn from great
						people, and where I can blossom into an excellent developer.
					</p>
				</div>
			</section>
			<div id="dc">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="black"
						fillOpacity="1"
						d="M0,96L720,288L1440,96L1440,320L720,320L0,320Z"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default AboutSection;
