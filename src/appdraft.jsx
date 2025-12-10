import SelectableTable from "./components/SelectableTable";
import Table from "./components/Table";
import { useState } from "react";
import NewEventForm from "./components/neweventform";
import EventForm from "./components/FormPage";
import "./App.css";

function App() {
	const [formInput, setFormInput] = useState({
		eventName: "",
		startDate: "",
		endDate: "",
		timeSelected: false,
		startTime: 0,
		endTime: 0,
	});

	function handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		let value = target.type === "checkbox" ? target.checked : target.value;
		setFormInput((prev) => ({
			...prev,
			[name]: value,
		}));

		validateInput();
		updateTable();
		console.log(formInput);
	}

	function validateInput() {
		if (parseInt(formInput.endTime) < parseInt(formInput.startTime)) {
			console.log("time error");
		}

		if (
			new Date(formInput.endDate).getTime() <
			new Date(formInput.startDate).getTime()
		) {
			console.log("error date");
		}
	}

	function updateTable() {
		const days =
			formInput !== "" && formInput.startDate !== ""
				? (new Date(formInput.endDate).getTime() -
						new Date(formInput.startDate).getTime()) /
						(1000 * 60 * 60 * 24) +
				  1
				: 0;
		const hours = parseInt(formInput.endTime) - parseInt(formInput.startTime);
	}
	return (
		<>
			<div>Selectable Table</div>
			<EventForm
				formInput={formInput}
				handleInputChange={handleInputChange}
			></EventForm>
			{/* <NewEventForm
				formInput={formInput}
				setFormInput={setFormInput}
			></NewEventForm> */}
			{/* <SelectableTable
				rows={
					formInput.endTime > formInput.startTime
						? formInput.endTime - formInput.startTime
						: 1
				}
				cols={
					formInput.endDate
						? (formInput.endDate.getTime() - formInput.startDate.getTime()) /
								(1000 * 60 * 60 * 24) +
						  1
						: 1
				}
			></SelectableTable> */}

			{/* <SelectableTable rows={10} cols={10}></SelectableTable> */}

			<Table days={tableInput[0]} hours={tableInput[1]}></Table>

			{formInput !== "" && formInput.startDate !== ""
				? (new Date(formInput.endDate).getTime() -
						new Date(formInput.startDate).getTime()) /
						(1000 * 60 * 60 * 24) +
				  1
				: 0}

			{parseInt(formInput.endTime) - parseInt(formInput.startTime)}
			{/* {formInput.endDate
				? (formInput.endDate.getTime() - formInput.startDate.getTime()) /
						(1000 * 60 * 60 * 24) +
				  1
				: 1}
			{formInput.endTime > formInput.startTime
				? formInput.endTime - formInput.startTime
				: 0} */}
		</>
	);
}

export default App;
