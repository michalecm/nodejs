import csv from 'csvtojson';
import fs from 'fs';
import {
  csvFilePath_task2 as csv1,
  csvFilePath_task3 as csv2,
  outputDirectory as od,
  outputFilePath_task2 as ofp1
} from './constants';
import { structureData } from './helpers';

async function main() {
  if (!fs.existsSync(od)) {
    fs.mkdirSync(od);
  }
  const csvProcessedRows = await csv().fromFile(csv1);

  const writer = fs.createWriteStream(ofp1, { flags: 'w' });
  csvProcessedRows.forEach((row) => writer.write(JSON.stringify(row) + '\n'));
  writer.close();
}

main();
