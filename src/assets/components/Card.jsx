/* eslint-disable react/prop-types */
function Card({ index = -1, nom = "nom du projet", href = "#", path = "/" }) {
	return (
		<a className="project-card" href={href}>
			<img
				className="projet__img"
				src={`public/images/${path}.png`}
				alt={nom}
			/>
			<p className="projet__title">{index + 1 + " - " + nom}</p>
		</a>
	);
}

export default Card;
