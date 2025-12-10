async function fetchRealTime() {
	const requestURL = "http://worldtimeapi.org/api/ip";
	const response = await fetch(requestURL);
	const timezone = await response.json();

	return "GMT" + timezone.utc_offset + " " + timezone.timezone;
}
function fetchTimeZones() {
	// const requestURL = "http://worldtimeapi.org/api/timezone";
	// const response = await fetch(requestURL);
	// const timezones = await response.json();
	// let date = new Date();
	// timezones.forEach((timezone) => {
	// 	let strTime = date.toLocaleString("en-US", { timeZone: `${timezone}` });
	// 	console.log(timezone, strTime);
	// });

	const timezones = Intl.supportedValuesOf("timeZone");

	let timezonelist = timezones.map((tz) => {
		const tzObject = new Intl.DateTimeFormat("en-GB", {
			timeZone: tz,
			timeZoneName: "longOffset",
		});
		const gmt = tzObject.format(new Date()).replace(/^.*GMT/, "");
		const [hour, minute] = gmt == "" ? [0, 0] : gmt.split(":");
		const value = parseInt(hour) + parseInt(minute) / 60;
		return {
			label: "GMT" + gmt + " " + tz,
			value: value,
		};
	});

	timezonelist = timezonelist.sort((a, b) => a.value - b.value);

	// timezonelist.map((tz) =>{
	// 	return{
	// 		value:0,
	// 		label:tz.gmt+" "+tz.name
	// 	}
	// })

	// fetchRealTime().then((result) => {
	// 	const defaultTime = timezonelist.find((tz) => tz.label == result);

	// 	timezonelist.unshift(defaultTime);
	// });

	return timezonelist;
}

export default fetchTimeZones;
