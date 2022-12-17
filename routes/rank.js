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

function createDataTobeSend(sortedData,track) {
	let rank = 1;
	let result = [];
	let b1 = 6;
	for (let i=0; i < sortedData.length; i++) {
		const data = sortedData[i];
		if (b1 !== data[track]) {
			if (b1 !== data[track]) {
				b1 = data[track];
			}
			rank++;
		}
		const jsonObject = {
			"rank": rank,
			"name": data[0],
			"track1_count": data[1],
			"track2_count": data[2],
			"total_count": data[1] + data[2],
		}
		result.push(jsonObject)
	}
	return result;
}

rankRouter.get("/track1", (req, res) => {
	database
		.readAll("ranks")
		.then(ranks => {
			ranks = mySortFunction(ranks, 1, 2);
			res.status(200).json(createDataTobeSend(ranks,1));
		})
		.catch(err => console.log(err));
})

rankRouter.get("/track2", (req, res) => {
	database
		.readAll("ranks")
		.then(ranks => {
			ranks = mySortFunction(ranks, 2, 1);
			res.status(200).json(createDataTobeSend(ranks,2));
		})
		.catch(err => console.log(err));
})

module.exports = rankRouter;
