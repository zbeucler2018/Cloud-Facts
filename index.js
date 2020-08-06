//const fs = require('fs');


function randomFact(type) {
	//let rawData = fs.readFileSync('data.json');
	//let info = JSON.parse(rawData);
	let info = [
				{
					"number": 0,
					"fact": "A cloud is a large group of tiny water droplets that we can see in the air.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 1,
					"fact": "Most clouds form in the troposphere but occasionally they are observed as high as the stratosphere or mesosphere.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 2,
					"fact": "Clouds can contain millions of tons of water.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 3,
					"fact": "Stratus clouds are flat and featureless, appearing as layered sheets.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 4,
					"fact": "Cumulus clouds are puffy, like cotton floating in the sky.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 5,
					"fact": "Cirrus clouds are thin and wispy, appearing high in the sky.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 6,
					"fact": "Fog is stratus type of cloud that appears very close to the ground.",
					"source": "https://www.sciencekids.co.nz/sciencefacts/weather/clouds.html",
					"date": "8/4/20"
				},
				{
					"number": 7,
					"fact": "In meteorology, the study of clouds is called nephology and a person who studies clouds is called a nephrologist.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 8,
					"fact": "Clouds form when warm air rises and cools down in the atmosphere. As the warm air cools, the water vapor in it turns into tiny water droplets or ice crystals. These tiny water droplets and/or ice crystals eventually form a cloud.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 9,
					"fact": "Clouds can travel at more than 100 mph (160 km/h) with the jet stream.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 10,
					"fact": "There are 10 common types of clouds you might see in the sky. They are altocumulus, altocumulus, circus, cirrocumulus, cirrostratus, cumulonimbus, cumulus, nimbostratus, stratocumulus and stratus.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 11,
					"fact": "Altocumulus clouds are found at an altitude of 6,500 to 20,000 feet (1981 to 6,100 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 12,
					"fact": "Circus clouds are found at an altitude of 16,500 to 45,000 feet (5,029 to 13,716 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 13,
					"fact": "Cirrocumulus clouds are found at an altitude of 20,000 to 40,000 feet (6,100 to 12,192 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 14,
					"fact": "Cirrostratus clouds are found at an altitude of 18,000 to 42,000 feet (5,486 to 12,801 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 15,
					"fact": "Cirrostratus clouds are what cause a halo you see around the sun.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 16,
					"fact": "Cumulus clouds are found at an altitude of less than 2,000 feet (610 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 17,
					"fact": "Cumulonimbus clouds are found at an altitude of 1,500 to 40,000 feet (458 to 12,192 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 18,
					"fact": "Cumulonimbus clouds can produce severe weather, such as hail, heavy rain, lightning, thunder and tornadoes.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 19,
					"fact": "Nimbostratus clouds are found at an altitude of less than 10,000 feet (3,048 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 20,
					"fact": "Stratocumulus clouds are found at an altitude of less than 6,500 feet (1,081 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 21,
					"fact": "Stratus clouds are found at an altitude of less than 6,000 feet (1,829 meters).",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 22,
					"fact": "Stratus clouds are sometimes responsible for producing fog like conditions when they get close to the ground.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 23,
					"fact": "A cloud is a meteorological term used to describe a visible collection of tiny water droplets, ice crystals and other particles suspended in the Earth’s upper atmosphere.",
					"source": "https://www.factsjustforkids.com/weather-facts/cloud-facts-for-kids.html",
					"date": "8/4/21"
				},
				{
					"number": 24,
					"fact": "Clouds appear white because the water droplets that make up the cloud are scattering light in all directions. As all of the colors of the light spectrum are being scattered at once, our eyes “see” the color white.",
					"source": "https://www.phenomena.org/weather/cloud/",
					"date": "8/4/21"
				},
				{
					"number": 25,
					"fact": "Some of the light from the Sun penetrates through to the bottom of clouds, where the water droplets are larger and scatter less light. This gives the bottoms of clouds a gray and darker appearance, while the tops are whiter and brighter.",
					"source": "https://www.phenomena.org/weather/cloud/",
					"date": "8/4/21"
				}

			];



	let rand = Math.floor(Math.random() * 25);
	
	switch (type) {
		case 1:
			console.log(info[rand]["fact"]);
			console.log(info[rand]["source"]);
			console.log(info[rand]["date"]);
			break;
		default:
			console.log(info[rand]["fact"]);

	}
	

}


module.exports = randomFact;
//randomFact(1);