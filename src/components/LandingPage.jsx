import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Table from "./Table";
import React from "react";

function LandingPage() {
	const navigate = useNavigate();
	function handleClick() {
		navigate("/createEvent");
	}
	return (
		<>
			<div className="hero-section">
				<h1>When3Meet</h1>
				<div>Schedule time to meet</div>
				<button onClick={handleClick}>Create Event</button>
			</div>

			<div className="hero-table">
				<Table days={10} hours={8}></Table>
			</div>

			{/* <div className="section color">
				<div className="title">Select to see availability</div>
				<div className="sub_section">
					<img src={description} className="image" />
					<div className="filter">
						<div>Participants</div>
						<input type="checkbox" className="filter__checkbox" id="tag1" />
						<label for="tag1" className="filter__label">
							Hippo
						</label>

						<input type="checkbox" className="filter__checkbox" id="tag2" />
						<label for="tag2" className="filter__label">
							Lion
						</label>

						<input type="checkbox" className="filter__checkbox" id="tag3" />
						<label for="tag3" className="filter__label">
							Monkey
						</label>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default LandingPage;
