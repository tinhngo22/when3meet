import { useState } from "react";

function SelectableTable({ rows, cols }) {
	const [isSelecting, setIsSelecting] = useState(false);
	const [mouseDown, setMouseDown] = useState(false);
	const [selectedBox, setSelectedBox] = useState(new Set());
	function handleMouseDown(boxIndex) {
		setMouseDown(true);
		if (!selectedBox.has(boxIndex)) {
			setIsSelecting(true);
			const newSelected = new Set(selectedBox);
			newSelected.add(boxIndex);
			setSelectedBox(newSelected);
		} else {
			const newSelected = new Set(selectedBox);
			newSelected.delete(boxIndex);
			setSelectedBox(newSelected);
		}
	}

	function handleMouseEnter(boxIndex) {
		if (mouseDown && isSelecting) {
			//select the box i and all boxes between i and first selected box
			const newSelected = new Set(selectedBox);
			newSelected.add(boxIndex);
			setSelectedBox(newSelected);
		} else if (mouseDown) {
			const newSelected = new Set(selectedBox);
			newSelected.delete(boxIndex);
			setSelectedBox(newSelected);
		}
	}

	function handleMouseUp() {
		setMouseDown(false);
		setIsSelecting(false);
	}
	return (
		<div
			className="grid"
			style={{ "--cols": cols, "--rows": rows }}
			onMouseUp={handleMouseUp}
		>
			{[...Array(rows * cols).keys()].map((_, i) => {
				return (
					<div
						key={i}
						className={`box ${selectedBox.has(i) ? "selected" : ""}`}
						onMouseDown={() => handleMouseDown(i)}
						onMouseEnter={() => handleMouseEnter(i)}
					>
						{i + 1}
					</div>
				);
			})}
		</div>
	);
}

export default SelectableTable;
