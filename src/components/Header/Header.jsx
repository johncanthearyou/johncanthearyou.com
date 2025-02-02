import styles from "./Header.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<span style={{ float: "left" }}>johncanthearyou.com</span>
			<span style={{ margin: "auto" }}>
				<a href="/about-me">About Me</a>
				<span> | </span>
				<a href="/education">Education</a>
				<span> | </span>
				<a href="/experience">Experience</a>
				<span> | </span>
				<a href="/projects">Projects</a>
			</span>
			<span style={{ float: "right" }}>
				<a>Email</a>
				<span> | </span>
				<a>Github</a>
				<span> | </span>
				<a>Resume</a>
			</span>
		</div>
	);
}
