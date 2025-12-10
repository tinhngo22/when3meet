import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewEventForm({ formInput, setFormInput }) {
	function handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		let value = target.type === "checkbox" ? target.checked : target.value;
		if (name === "endTime" && value < formInput.startTime) {
			value = 0;
			console.log("error");
		}
		setFormInput((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleDateChange(date) {
		console.log(date);
		const [start, end] = date;
		//prev => ({}) means an arrow function that returns an object (obj is {})
		setFormInput((prev) => ({
			...prev,
			startDate: start,
			endDate: end,
		}));
	}
	return (
		<>
			<form>
				<label>
					Event name:
					<input
						name="eventName"
						value={formInput.eventName}
						onChange={handleInputChange}
					></input>
				</label>

				<label>
					Date:
					<DatePicker
						selectsRange
						selected={formInput.startDate} //similar to value prop
						startDate={formInput.startDate}
						endDate={formInput.endDate}
						onChange={handleDateChange}
					/>
				</label>

				<label>
					<input
						type="checkbox"
						onChange={handleInputChange}
						name="timeSelected"
						checked={formInput.timeSelected}
					></input>
					Time:
				</label>

				<select
					value={formInput.startTime}
					disabled={!formInput.timeSelected}
					name="startTime"
					onChange={handleInputChange}
				>
					{[...Array(24).keys()].map((i) => {
						return <option value={i} key={i}>{`${i}:00`}</option>;
					})}
				</select>

				<select
					value={formInput.endTime}
					disabled={!formInput.timeSelected}
					name="endTime"
					onChange={handleInputChange}
				>
					{[...Array(24).keys()].map((i) => {
						return <option value={i} key={i}>{`${i}:00`}</option>;
					})}
				</select>
			</form>
		</>
	);
}

export default NewEventForm;
