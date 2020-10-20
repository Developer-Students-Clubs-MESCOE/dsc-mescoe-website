const express = require("express");
const database = require("../db/Database");
const rankRouter = express.Router();

function mySortFunction(data, mainNum, secNum) {
	return data.sort((a, b) => {
		if(a[mainNum] > b[mainNum]) {
			return -1;
		}
		if(a[secNum] > b[secNum] && a[mainNum] === b[mainNum]) {
			return -1;
		}
		if (a[0] < b[0] && a[secNum] === b[secNum] && a[mainNum] === b[mainNum]) {
			return  -1;
		}
		return 1;
	})
}

function createDataTobeSend(sortedData) {
	let rank = 0;
	let result = [];
	let b1 = 6;
	let b2 = 6;
	for (let i=0; i < sortedData.length; i++) {
		const data = sortedData[i];
		const track1 = data[5].split('|');
		const track2 = data[7].split('|');
		if (b1 !== data[4] || b2 !== data[6]) {
			if (b1 !== data[4]) {
				b1 = data[4];
			}
			if (b2 !== data[6]) {
				b2 = data[6];
			}
			rank++;
		}
		const jsonObject = {
			"rank": rank,
			"name": data[0],
			"qwiklabs_profile": data[3],
			"track1_count": data[4],
			"track2_count": data[6],
			"total_count": data[4] + data[6],
			"latest_track1": track1[track1.length - 1],
			"latest_track2": track2[track2.length - 1],
		}
		result.push(jsonObject)
	}
	return result;
}

rankRouter.get("/track1", (req, res) => {
	database
		.readAll("ranks")
		.then(ranks => {
			ranks = mySortFunction(ranks, 4, 6);
			res.status(200).json(createDataTobeSend(ranks));
		})
		.catch(err => console.log(err));
})

rankRouter.get("/track2", (req, res) => {
	database
		.readAll("ranks")
		.then(ranks => {
			ranks = mySortFunction(ranks, 6, 4);
			res.status(200).json(createDataTobeSend(ranks));
		})
		.catch(err => console.log(err));
})

module.exports = rankRouter;
