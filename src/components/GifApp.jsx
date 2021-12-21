import React, { useState } from "react";
import GetGifs from "./GetGifs";

function GifApp() {
	const [categoria, setcategoria] = useState("goku");

	const actionInput = (e) => {
		setcategoria(e.target.value);
	};

	const actionSubmit = (e) => {
		e.preventDefault();
		setcategoria((cat) => (cat = categoria));
	};

	return (
		<form onSubmit={actionSubmit}>
			<h1>Consumiendo Una Api Rest de Gifs.</h1>
			<input type="text" onChange={actionInput} />
			<GetGifs categoria={categoria}></GetGifs>
		</form>
	);
}

export default GifApp;
