/* eslint-disable react/prop-types */
function Card({ nom = "", href = "", path = "" }) {
	return (
		<a className="project-card" href={href}>
			<img className="projet__img" src={`public/images/${path}.png`} alt="" />
			<p className="projet__title">{nom}</p>
		</a>
	);
}

export default Card;
