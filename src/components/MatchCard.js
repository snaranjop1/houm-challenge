import React from "react";
import "../styles/MatchCard.css";
import moment from "moment/moment.js";

export default function MatchCard(props) {
	return (
		<div>
			<div className="col">
				<div className="card h-100 match-card">
					<img
						src={props.data.strThumb}
						className="card-img-top"
						alt="banner"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{props.data.strHomeTeam + " "}
							<span className="badge">
								{props.data.intHomeScore}
							</span>
						</h5>
						<h5 className="card-title">
							{props.data.strAwayTeam + " "}
							<span className="badge">
								{props.data.intAwayScore}
							</span>
						</h5>
						<h5 className="league">{props.data.strLeague}</h5>
						<h5 className="date">
							<span>📆</span>
							{" " +
								moment(props.data.dateEvent).format(
									"ddd, D MMM YYYY"
								)}
						</h5>
						<h5 className="hour">
							<span>🕑</span>
							{" " + moment(props.data.strTimestamp).format("LT")}
						</h5>
						<h5 className="location">
							<span>🏟️</span>
							{" " + props.data.strVenue}
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
