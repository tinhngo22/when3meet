import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./components/FormPage";
import ResultsPage from "./components/ResultsPage";
import LandingPage from "./components/LandingPage";
import "./App.css";

// App Setup
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/createEvent" element={<FormPage />} />
				<Route path="/results" element={<ResultsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
