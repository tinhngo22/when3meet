import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SelectableTable from "./SelectableTable";
import fetchTimeZones from "./FetchTimeZones";
import Table from "./Table";
import Select from "react-select";
function ResultsPage() {
	const options = fetchTimeZones();
	const location = useLocation();
	const formData = location.state; // Access the passed data

	if (!formData) {
		return <p>No data received</p>;
	}

	const cols =
		(new Date(formData.endDate).getTime() -
			new Date(formData.startDate).getTime()) /
			(1000 * 60 * 60 * 24) +
		1;
	const rows = formData.endTime - formData.startTime;
	console.log(typeof formData.startTime);
	return (
		<>
			<div className="title-container">
				<h2>{formData.eventName}</h2>
				<Select
					options={options}
					defaultValue={options[0]}
					className="select-box"
				/>
			</div>

			<div className="main-content">
				<div className="table-container">
					<div className="header-column" style={{ "--cols": cols }}>
						{Array(cols)
							.fill(null)
							.map((_, index) => {
								const date = new Date(formData.startDate);
								date.setDate(date.getDate() + index);
								return <div key={index}>{date.getDate()}</div>;
							})}
					</div>

					<div className="header-row" style={{ "--rows": rows }}>
						{Array(rows)
							.fill(null)
							.map((_, index) => {
								const time = parseInt(formData.startTime);
								return <div key={index}>{time + index + ":00"}</div>;
							})}
					</div>

					<Table days={cols} hours={rows}></Table>
				</div>
				<div className="participants-container">
					<h3>Participants</h3>
					<ul>
						<li>Hippo</li>
						<li>Lion</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ResultsPage;
