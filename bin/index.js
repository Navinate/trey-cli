#!/usr/bin/env node
import chalk from "chalk";
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
const yargs = _yargs(hideBin(process.argv));

(async () => {
  const argv = await yargs.alias("n", "name").argv;

  let nameInput = argv.name != null ? argv.name : "person";
  console.clear();
  console.log(chalk.blue.bgRed.bold(`Hello ${nameInput}! This is my first CLI`));
})();
