import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Search from "./components/Search";
import Matches from "./components/Matches";
import DataContext from "./contexts/DataContext";

function App() {
	const [matches, setmatches] = useState([]);
	const [matchesinit, setmatchesinit] = useState([]);
	const leagues = [4328, 4331, 4332, 4335, 4480, 4481];

	useEffect(() => {
		for (let j = 0; j < leagues.length; j++) {
			fetch(
				`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${leagues[j]}`
			)
				.then((res) => res.json())
				.then((data) => {
					setmatches((matches) => matches.concat(data.events));
					setmatchesinit((matches) => matches.concat(data.events));
				});
		}
	}, []);

	const reset = () => {
		setmatches(matchesinit);
	};

	return (
		<div>
			<DataContext.Provider value={{ matches, setmatches, reset }}>
				<Navbar />
				<Search />
				<Matches />
			</DataContext.Provider>
		</div>
	);
}

export default App;
