import { useState } from "react";

function Table({ days, hours }) {
	const [isSelecting, setIsSelecting] = useState(false);
	const [mouseDown, setMouseDown] = useState(false);
	const [selectedBox, setSelectedBox] = useState(
		Array(days)
			.fill(null)
			.map(() => Array(hours).fill(false))
	);

	const [firstSelected, setFirstSelected] = useState([]);
	function handleMouseDown([day, hour]) {
		setMouseDown(true);
		if (!selectedBox[day][hour]) {
			setIsSelecting(true);
			const newSelected = [...selectedBox.map((row) => [...row])];
			newSelected[day][hour] = true;
			setSelectedBox(newSelected);
		} else {
			setIsSelecting(false);
			const newSelected = [...selectedBox.map((row) => [...row])];
			newSelected[day][hour] = false;
			setSelectedBox(newSelected);
		}
		setFirstSelected([day, hour]);
	}

	function handleMouseEnter([day, hour]) {
		const [firstSelectedDay, firstSelectHour] = firstSelected;
		const minDay = Math.min(day, firstSelectedDay);
		const maxDay = Math.max(day, firstSelectedDay);
		const minHour = Math.min(hour, firstSelectHour);
		const maxHour = Math.max(hour, firstSelectHour);
		const newSelected = [...selectedBox.map((row) => [...row])];

		for (let i = minDay; i <= maxDay; i++) {
			for (let j = minHour; j <= maxHour; j++) {
				newSelected[i][j] = isSelecting;
				console.log("working");
			}
		}
		// if (mouseDown && isSelecting) {
		// 	//select the box i and all boxes between i and first selected box
		// 	const newSelected =  [...selectedBox.map((row) => [...row])];
		// 	newSelected.add(boxIndex);
		// 	setSelectedBox(newSelected);
		// } else if (mouseDown) {
		// 	const newSelected = new Set(selectedBox);
		// 	newSelected.delete(boxIndex);
		// 	setSelectedBox(newSelected);
		// }
		setSelectedBox(newSelected);
	}

	function handleMouseLeave() {
		setMouseDown(false);
		setIsSelecting(false);
	}
	return (
		<div
			className="grid"
			style={{ "--cols": days, "--rows": hours }}
			onMouseUp={handleMouseLeave}
			onMouseLeave={handleMouseLeave}
		>
			{/* {selectedBox.map((day) => {
				day.map((_, hour) => {
					return (
						<div
							key={`${day}-${hour}`}
							className={`box ${
								selectedBox[day][hour] == true ? "selected" : ""
							}`}
							onMouseDown={() => handleMouseDown([day, hour])}
							onMouseEnter={() => handleMouseEnter([day, hour])}
						>
							{`${day}-${hour}`}
						</div>
					);
				});

				
			})} */}

			{selectedBox.map((day, dayIndex) =>
				day.map((hour, hourIndex) => (
					<div
						key={`${dayIndex}-${hourIndex}`}
						className={`box ${hour ? "selected" : ""}`}
						onMouseDown={() => handleMouseDown([dayIndex, hourIndex])}
						onMouseEnter={() => {
							if (mouseDown) {
								handleMouseEnter([dayIndex, hourIndex]);
							}
						}}
					></div>
				))
			)}
		</div>
	);
}

export default Table;
