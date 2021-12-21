import React, { useEffect, useState } from "react";

export const GetGifs = ({ categoria }) => {
	const [imgx, setImgx] = useState([]);

	useEffect(() => {
		GetGifsAjax();
	}, [imgx]);

	const GetGifsAjax = async () => {
		if (categoria === undefined) return false;

		const key = "ZFcLYBI6hwmUIH2ywEWHjxs9Hc6EYvtr";
		const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&limit=10&q=${categoria}`;

		const resp = await fetch(url);
		const { data } = await resp.json();

		// console.log(data);

		const gifs = data.map((img) => {
			return (img = {
				id: img.id,
				url: img.images?.downsized_medium?.url,
				titulo: img.title,
			});
		});

		setImgx(gifs);
	};

	console.log(imgx);

	return (
		<div className="container">
			{imgx.map(({ id, titulo, url }) => (
				<div className="container-img">
					<img key={id} src={url} alt={titulo} />
				</div>
			))}
		</div>
	);
};

export default GetGifs;
