import csv from 'csvtojson';
import fs from 'fs';
import {
  csvFilePathTask2 as csv1,
  outputDirectory as od,
  outputFilePathTask2 as ofp1,
} from '../constants';

async function main() {
  if (!fs.existsSync(od)) {
    fs.mkdirSync(od);
  }
  const csvProcessedRows = await csv().fromFile(csv1);

  const writer = fs.createWriteStream(ofp1, { flags: 'w' });
  csvProcessedRows.forEach(row => writer.write(`${JSON.stringify(row)}\n`));
  writer.close();
}

main();
