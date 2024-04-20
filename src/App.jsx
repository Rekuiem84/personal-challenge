import "./App.css";
import { useState, useEffect } from "react";
import Card from "./assets/components/Card";

const owner = "Rekuiem84";
const repo = "personal-challenge";
const pathToFile = "README.md";

async function fetchContent(owner, repo, pathToFile) {
	// Retourne explicitement la promesse créée par fetch
	try {
		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/contents/${pathToFile}`
		);
		const data = await response.json();
		const fileContent = atob(data.content);
		const parser = new DOMParser();
		const doc = parser.parseFromString(fileContent, "text/html");
		const aTags = Array.from(doc.querySelectorAll("a"));
		const demoLinks = aTags.filter(
			(a) => a.textContent.trim().toUpperCase() === "DEMO"
		);
		let linksData = [];
		demoLinks.forEach((link) => {
			// Enlève les slashs de l'URL, puis découpe en tableau
			const urlParts = link.href.split("/").join(" ").trim().split(" ");
			link.textContent = urlParts[urlParts.length - 1].split("-").join(" ");
			linksData.push([
				link.textContent,
				link.href,
				urlParts[urlParts.length - 1],
			]);
		});
		return linksData;
	} catch (error) {
		return console.error(error);
	}
}

function App() {
	const [linksData, setDemoLinks] = useState([]);

	useEffect(() => {
		fetchContent(owner, repo, pathToFile).then((links) => {
			setDemoLinks(links);
		});
	}, []);

	return (
		<div className="challenges">
			{linksData.map((link, index) => (
				<Card key={index} nom={link[0]} href={link[1]} path={link[2]} />
			))}
		</div>
	);
}

export default App;
