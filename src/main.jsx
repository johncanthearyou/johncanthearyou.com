import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./index.module.css";
import Home from "./Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
	<div className={styles.content}>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-me" element={<AboutMe />} />
				<Route path="/education" element={<Education />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
		<Footer />
	</div>
);
