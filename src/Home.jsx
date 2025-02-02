import { Link } from "react-router";

export default function Home() {
	return (
		<div>
			<h1>Welcome!</h1>
			<ul>
				<li>
					<Link to="/about-me">About Me</Link>
				</li>
				<li>
					<Link to="/education">Education</Link>
				</li>
				<li>
					<Link to="/experience">Experience</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
			</ul>
		</div>
	);
}
