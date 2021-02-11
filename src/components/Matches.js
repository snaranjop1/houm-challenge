import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";
import MatchCard from "./MatchCard";

export default function Matches() {
	const { matches, setmatches } = useContext(DataContext);

	const renderCards = () => {
		return matches.map((match) => {
			return <MatchCard key={match.idEvent} data={match} />;
		});
	};

	return (
		<div className="container" id="cards-container">
			<div className="row row-cols-1 row-cols-md-4 g-4">
				{renderCards()}
			</div>
		</div>
	);
}
