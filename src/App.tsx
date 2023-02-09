import "./App.scss";
import { Row } from "./components/row/Row";

import requests from "./request";
import { Banner } from "./components/banner/banner";
import { Nav } from "./components/nav/Nav";

export function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="Top Rated"
				isLargeRow={true}
				fetchUrl={requests.feachTrending}
			/>
			<Row title="Now Playng" fetchUrl={requests.feachNowplaying} />
		</div>
	);
}
