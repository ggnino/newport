import React, {useState} from "react";
import img from "../imgs/c.svg";

function Navbar() {
    
    const [style, setStyle] = useState({width: '', animate: ''});
    
    const openNav = () => {
        setStyle({width: '100%', animate: "ld ld-bounce-alt-out"});
    }
    const closeNav = () => {
        setStyle({width: '0%', animate: "ld ld-bounce-alt-in"})
    }

	return (
		<div>
			<div className="navbar navbar-expand-sm fixed-top" id="navBar">
				<div id="name">
					<img className='img-fluid' alt="img" src={img} />
				</div>
				<div className={style.animate} onClick={openNav} id="toggler">
					<span></span>
				</div>
			</div>
			<div id="myNav" style={{width:style.width}} className="overlay">
				<a href="#none" onClick={closeNav} className="closebtn" id="c">
					&times;
				</a>

				<div className="overlay-content">
					<a href="#mio">About</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#ft">Contact</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
