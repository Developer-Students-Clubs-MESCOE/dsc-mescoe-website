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

rankRouter.get("/track1", (req, res, next) => {
    database
        .readAll("ranks")
        .then(ranks => {
            console.log(ranks);
            ranks = mySortFunction(ranks, 4, 6);
            res.status(200).json(ranks.slice(50));
        })
        .catch(err => console.log(err));
})

rankRouter.get("/track2", (req, res, next) => {
    database
        .readAll("ranks")
        .then(ranks => {
            console.log(ranks);
            ranks = mySortFunction(ranks, 6, 4);
            res.status(200).json(ranks.slice(50));
        })
        .catch(err => console.log(err));
})

module.exports = rankRouter;
