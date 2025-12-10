async function fetchRealTime() {
	const requestURL = "http://worldtimeapi.org/api/ip";
	const response = await fetch(requestURL);
	const timezone = await response.json();

	return "GMT" + timezone.utc_offset + " " + timezone.timezone;
}

export default fetchRealTime;
