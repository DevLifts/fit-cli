#!/usr/bin/env node
const fs = require("fs");

const intialDB = `{
  "onerm": {
    "bench press": 0,
    "squat": 0,
    "deadlift": 0,
    "overhead press": 0,
    "bent over row": 0
  },
  "sleep": {}
}`;

fs.writeFileSync(__dirname + "/../localDB.json", intialDB);
