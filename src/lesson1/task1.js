import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output, terminal: true });

function getReversedString(str) {
  return str.split('').reverse().join('');
}

function main() {
  rl.question('Enter a string to reverse: ', (text) => {
    if (text === 'exit') return rl.close();
    return rl.write(`${getReversedString(text)}\n`);
  });
}

rl.on('line', main);

main();
