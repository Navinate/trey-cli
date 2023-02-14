#!/usr/bin/env node
const argv = require("yargs").alias("n", "name").argv;

let nameInput = argv.name != null ? argv.name : "person";
console.log(`Hello ${nameInput}! This is my first CLI`);
