import React, {useState} from "react";
import exappImg from "../imgs/fullstack.JPG";
import calappImg from '../imgs/Calculator.JPG';
import rqtappImg from '../imgs/got.JPG';
import tribappImg from '../imgs/ferr.JPG';
import issueappImg from '../imgs/issue.JPG';
import libappImg from '../imgs/library.JPG';
import metricappImg from '../imgs/metric.JPG';
import fileappImg from '../imgs/filemicroservice.JPG';
import urlappImg from '../imgs/url.JPG';

function ProjectsSection() {

    const [state, setState] = useState({front:{display: 'none', class: 'tablinks'},back:{display: 'none', class: 'tablinks'},full:{display: 'initial', class: 'tablinks active'}});

    const openTab = (e) => {
        if(e.currentTarget.id === '1'){
            setState({front:{display: 'none', class: 'tablinks'},back:{display: 'none', class: 'tablinks'},full:{display: 'block', class: 'tablinks active'}})
        }
        if(e.currentTarget.id === '2'){
            setState({front:{display: 'none', class: 'tablinks'},back:{display: 'block', class: 'tablinks active'},full:{display: 'none', class: 'tablinks'}})
        }
        if(e.currentTarget.id === '3'){
            setState({front:{display: 'block', class: 'tablinks active'},back:{display: 'none', class: 'tablinks'},full:{display: 'none', class: 'tablinks'}})
        }
        
    }

	return (
		<div>
			<div id="portfolio">
				<h1 className='ld ld-squeeze'>My Portfolio</h1>
				<p>
					I have been coding since fall of 2018, in Miami-Dade College. Here is
					a small sample of my most recent work as a MERN stack developer.
				</p>

				<div className="tab">
					<button onClick={openTab} id="1" className={state.full.class}>
						Full Stack
					</button>
					<button id="2" onClick={openTab} className={state.back.class}>
						Back End
					</button>
					<button id="3" onClick={openTab} className={state.front.class}>
						Front End
					</button>
				</div>

				<div id="FullStack" style={{display: state.full.display}} className="tabcontent">
					<h3 className='p-2 m-2'>Excercise Tracker</h3>
					<div style={{ display: "flex", position: "relative" }}>
						<img className="img-fluid rounded img-resize" alt="ex app" src={exappImg} />
						<p className="p-2 text-justify">
							An excercise app that logs the users activity.Login as Admin, or
							register new user; add, remove or edit user activity. Built with
							the MERN stack.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/exapp' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://gg-exercise-app.herokuapp.com/' className='btn btn-outline-light b2'>Live Version</a>
					</div>
					<h3 className='p-2 m-2'>Personal Library</h3>
					<div style={{ display: "flex", position: "relative" }}>
						<img className="img-fluid rounded img-resize" alt="lib app" src={libappImg} />
						<p className="p-2 text-justify">
							A personal library app, where user can log all the books that have been read. User can also add a review to each entry into the library. Built using the MERN stack.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/personallibrary' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://ggnino-personallibrary.glitch.me/' className='btn btn-outline-light b2'>Live Version</a>
					</div>
					<h3 className='p-2 m-2'>Issue Tracker</h3>
					<div style={{ display: "flex", position: "relative" }}>
						<img className="img-fluid rounded img-resize" alt="issue app" src={issueappImg} />
						<p className="p-2 text-justify">
							A issue tracker app, when logged in as a user; user posts an issue for a technician to fix. If logged in as a technician, tech can view all issues, delete any issues and close any open issues. Built using the MERN stack.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/issuetracker' className='btn btn-outline-light b1'>Source Code</a>
					<a target="_blank" rel="noopener noreferrer" href='https://ggnino-issuetracker.glitch.me/' className='btn btn-outline-light b2'>Live Version</a>
					</div>
					
				</div>

				<div id="BackEnd" style={{display: state.back.display}} className="tabcontent">
					<h3 className='p-2 m-2'>URL Shortener Microservice</h3>
					<div style={{ display: "flex", position: 'relative' }}>
						<img className="img-fluid rounded img-resize" alt="issue app" src={urlappImg} />
						<p className="p-2 text-justify">
							A back end microservice, which takes a url and shortens it. The shorten url will redirect to the original link. Built using NodeJS.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/urlshortner' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://ggnino-urlshortner.glitch.me/' className='btn btn-outline-light b2'>Live Version</a>
					</div>
					<h3 className='p-2 m-2'>File Metadata Microservice</h3>
					<div style={{ display: "flex", position: 'relative' }}>
						<img className="img-fluid rounded img-resize" alt="issue app" src={fileappImg} />
						<p className="p-2 text-justify">
							Another back end microservice which the user can upload a file. Which in return will receive a JSON response with file info. Built using NodeJs.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/filemetadataservice' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://ggnino-filemetadataservice.glitch.me/' className='btn btn-outline-light b2'>Live Version</a>
					</div>
					<h3 className='p-2 m-2'>Metric Converter</h3>
					<div style={{ display: "flex", position: 'relative' }}>
						<img className="img-fluid rounded img-resize" alt="issue app" src={metricappImg} />
						<p className="p-2 text-justify">
							A back end app which will convert a users measurement to the desired output. Built using NodeJS.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/metricconverter' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://ggnino-metricconverter.glitch.me/' className='btn btn-outline-light b2'>Live Version</a>
					</div>
				</div>

				<div id="FrontEnd" style={{display: state.front.display}} className="tabcontent">
                    <h3 className='p-2 m-2'>Javascript Calculator</h3>
					<div style={{ display: "flex", position: 'relative' }}>
						<img className="img-fluid rounded img-resize" alt="cal app" src={calappImg} />
						<p className="p-2 text-justify">
                        A javascript calculator app built using ReactJS, CSS+Bootstrap. Design inspired by <a id='link' target="_blank" rel="noopener noreferrer" href='https://www.lofree.co/products/digit-calculator?variant=11837401432108'>Lofree digit calculator</a>.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/calculator' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://gg-calculator.herokuapp.com' className='btn btn-outline-light b2'>Live Version</a>
					</div>
                    <h3 className='p-2 m-2'>Random Quote Generator</h3>
					<div  style={{ display: "flex", position: 'relative' }}>
						<img className="img-fluid rounded img-resize" alt="cal app" src={rqtappImg} />
						<p className="p-2 text-justify">
                        A simple quote generator app made with a game of thrones theme. Built this app using ReactJS, CSS+Bootstrap.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/random-quote' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://gg-random-quote-app.herokuapp.com' className='btn btn-outline-light b2'>Live Version</a>
					</div>
                    <h3 className='p-2 m-2 '>Tribute Page</h3>
					<div style={{ display: "flex", position: 'relative' }}>
						<img className="img-fluid rounded img-resize" alt="cal app" src={tribappImg} />
						<p className="p-2 text-justify">
                        A Tribute page for one of the greatest cars of all time, LaFerrari.Built this page using HTML/CSS+Bootstrap and Javascript.
						</p>
						<a target="_blank" rel="noopener noreferrer" href='https://github.com/ggnino/tribute-car' className='btn btn-outline-light b1'>Source Code</a>
						<a target="_blank" rel="noopener noreferrer" href='https://gg-ferraritribute.herokuapp.com' className='btn btn-outline-light b2'>Live Version</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectsSection;
