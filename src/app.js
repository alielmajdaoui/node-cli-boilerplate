// @flow
import color from 'chalk';
import readlineSync from 'readline-sync';

console.log(color.bgBlue('> ‘Node CLI Boilerplate’ Started!'));

const name = readlineSync.question(`> What's your name: `);

console.log(name);
