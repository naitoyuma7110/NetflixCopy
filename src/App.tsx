import "./App.scss";
import { Row } from "./components/row/Row";

import requests from "./request";
import { Banner } from "./components/banner/banner";
import { Nav } from "./components/nav/Nav";
import { useState } from "react";

export function App() {
	const rows = [
		{
			title: "Top Rated",
			isLargeRow: true,
			fetchUrl: requests.feachTrending,
			isTrend: true,
			isPlaying: false,
		},
		{
			title: "Animation",
			isLargeRow: true,
			fetchUrl: requests.feactAnimation,
			isTrend: false,
			isPlaying: false,
		},
		{
			title: "Now Playing",
			isLargeRow: false,
			fetchUrl: requests.feachNowplaying,
			isTrend: false,
			isPlaying: false,
		},
	];
	const [isPlayingState, setIsPlayingState] = useState<boolean[]>(
		new Array(rows.length).fill(false)
	);
	const onRowMovieOpen = (index: number) => {
		console.log(`Action from child: ${index}`);
		setIsPlayingState((prevState) => {
			const newState = new Array(prevState.length).fill(false);
			newState[index] = true;
			return newState;
		});
	};
	return (
		<div className="App">
			<Nav />
			<Banner />
			{rows.map((row, index) => (
				<Row
					index={index}
					key={index}
					title={row.title}
					isLargeRow={row.isLargeRow}
					fetchUrl={row.fetchUrl}
					isTrend={row.isTrend}
					isPlaying={isPlayingState[index]}
					onRowMovieOpen={onRowMovieOpen}
				/>
			))}
		</div>
	);
}
