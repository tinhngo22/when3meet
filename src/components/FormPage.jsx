import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import Select from "react-select";
import fetchTimeZones from "./FetchTimeZones";

function FormPage() {
	const navigate = useNavigate();
	const options = fetchTimeZones();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			eventName: e.target.eventName.value,
			startDate: e.target.startDate.value,
			endDate: e.target.endDate.value,
			startTime: e.target.startTime.value,
			endTime: e.target.endTime.value,
		};

		// Navigate and pass data via state
		navigate("/results", { state: formData });
	};

	return (
		<div className="form-page">
			<h2>Create Event</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Event name:
					<input name="eventName" type="text" required></input>
				</label>

				<label>
					Start Date:
					<input type="date" name="startDate"></input>
				</label>

				<label>
					End Date:
					<input type="date" name="endDate"></input>
				</label>

				<label>
					Start Time:
					<select name="startTime">
						{[...Array(24).keys()].map((i) => {
							return <option value={i} key={i}>{`${i}:00`}</option>;
						})}
					</select>
				</label>

				<label>
					End Time:
					<select name="endTime">
						{[...Array(24).keys()].map((i) => {
							return <option value={i} key={i}>{`${i}:00`}</option>;
						})}
					</select>
				</label>
				<label>
					Select timezone:
					<Select
						options={options}
						className="roundbox"
						defaultValue={options[0]}
					/>
				</label>
				<button type="submit" className="roundbox">
					Submit
				</button>
			</form>
		</div>
	);
}

export default FormPage;

// function EventForm({ formInput, handleInputChange }) {
// 	return (
// 		<>
// 			<form>
// 				<label>
// 					Event name:
// 					<input
// 						name="eventName"
// 						value={formInput.eventName}
// 						onChange={handleInputChange}
// 					></input>
// 				</label>

// 				<label>
// 					Start Date:
// 					<input
// 						type="date"
// 						value={formInput.startDate}
// 						name="startDate"
// 						onChange={handleInputChange}
// 					></input>
// 				</label>

// 				<label>
// 					End Date:
// 					<input
// 						type="date"
// 						value={formInput.endDate}
// 						name="endDate"
// 						onChange={handleInputChange}
// 					></input>
// 				</label>

// 				<label>
// 					<input
// 						type="checkbox"
// 						checked={formInput.timeSelected}
// 						name="timeSelected"
// 						onChange={handleInputChange}
// 					></input>
// 					Time:
// 				</label>

// 				<select
// 					value={formInput.startTime}
// 					disabled={!formInput.timeSelected}
// 					name="startTime"
// 					onChange={handleInputChange}
// 				>
// 					{[...Array(24).keys()].map((i) => {
// 						return <option value={i} key={i}>{`${i}:00`}</option>;
// 					})}
// 				</select>

// 				<select
// 					value={formInput.endTime}
// 					disabled={!formInput.timeSelected}
// 					name="endTime"
// 					onChange={handleInputChange}
// 				>
// 					{[...Array(24).keys()].map((i) => {
// 						return <option value={i} key={i}>{`${i}:00`}</option>;
// 					})}
// 				</select>
// 			</form>
// 		</>
// 	);
// }

// export default EventForm;
