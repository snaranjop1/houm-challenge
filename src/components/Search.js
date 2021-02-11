import React, { useState, useContext, useEffect } from "react";
import DataContext from "../contexts/DataContext";
import "../styles/Search.css";

export default function Search() {
	const [champions, setchampions] = useState(false);
	const [europa, seteuropa] = useState(false);
	const [premier, setpremier] = useState(false);
	const [liga, setliga] = useState(false);
	const [bundesliga, setbundesliga] = useState(false);
	const [seriea, setseriea] = useState(false);
	const [search, setsearch] = useState("");

	const { matches, setmatches, reset } = useContext(DataContext);

	const textSearch = (text) => {
		setmatches((matches) =>
			matches.filter((match) =>
				match.strEvent.toLowerCase().includes(text.toLowerCase())
			)
		);
	};

	return (
		<div>
			<div className="container" id="intro-cont">
				<h1 id="intro">All Soccer Scores 📅</h1>
				<div className="container shadow" id="search-cont">
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search By Team"
							aria-label="Search"
							id="search-bar"
							onChange={(e) => textSearch(e.target.value)}
						/>
					</form>
				</div>
			</div>
			<div className="container" id="filter-cont">
				<div className="row">
					<div className="col">
						<button
							type="button"
							className={`btn filter ${champions}`}
							onClick={() => {
								setchampions(!champions);
								if (!champions) {
									setmatches((matches) =>
										matches.filter(
											(match) => match.idLeague === "4480"
										)
									);
								} else if (
									champions &&
									!europa &&
									!premier &&
									!liga &&
									!bundesliga &&
									!seriea
								) {
									reset();
								}
							}}
						>
							Champions League
						</button>
						<button
							type="button"
							className={`btn filter ${europa}`}
							onClick={() => {
								seteuropa(!europa);
								if (!europa) {
									setmatches((matches) =>
										matches.filter(
											(match) => match.idLeague === "4481"
										)
									);
								} else if (
									!champions &&
									europa &&
									!premier &&
									!liga &&
									!bundesliga &&
									!seriea
								) {
									reset();
								}
							}}
						>
							Europa League
						</button>
						<button
							type="button"
							className={`btn filter ${premier}`}
							onClick={() => {
								setpremier(!premier);
								if (!premier) {
									setmatches((matches) =>
										matches.filter(
											(match) => match.idLeague === "4328"
										)
									);
								} else if (
									!champions &&
									!europa &&
									premier &&
									!liga &&
									!bundesliga &&
									!seriea
								) {
									reset();
								}
							}}
						>
							Premier League
						</button>
						<button
							type="button"
							className={`btn filter ${liga}`}
							onClick={() => {
								setliga(!liga);
								if (!liga) {
									setmatches((matches) =>
										matches.filter(
											(match) => match.idLeague === "4335"
										)
									);
								} else if (
									!champions &&
									!europa &&
									!premier &&
									liga &&
									!bundesliga &&
									!seriea
								) {
									reset();
								}
							}}
						>
							La Liga
						</button>
						<button
							type="button"
							className={`btn filter ${bundesliga}`}
							onClick={() => {
								setbundesliga(!bundesliga);
								if (!bundesliga) {
									setmatches((matches) =>
										matches.filter(
											(match) => match.idLeague === "4331"
										)
									);
								} else if (
									!champions &&
									!europa &&
									!premier &&
									!liga &&
									bundesliga &&
									!seriea
								) {
									reset();
								}
							}}
						>
							Bundesliga
						</button>
						<button
							type="button"
							className={`btn filter ${seriea}`}
							onClick={() => {
								setseriea(!seriea);
								if (!seriea) {
									setmatches((matches) =>
										matches.filter(
											(match) => match.idLeague === "4332"
										)
									);
								} else if (
									!champions &&
									!europa &&
									!premier &&
									!liga &&
									!bundesliga &&
									seriea
								) {
									reset();
								}
							}}
						>
							Serie A
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
