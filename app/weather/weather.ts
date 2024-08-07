const GEOCODE_API_URL = "https://geocode.maps.co/search";

async function main(): Promise<number> {
	console.log(process.argv);

	if (process.argv.length !== 3) {
		console.error("usage: weather LOCATION");
		return 1;
	}

    // get location

	const location = process.argv[2];

    // convert location to lat/long

    // fetch weather data

    // display weather data

	return await Promise.resolve(0);
}

main().catch((err) => console.error(err));
