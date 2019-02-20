'use strict';

const fs = require('fs');

// OK to use an empty Buffer.from()


// ASSIGNMENT 1
// create a Buffer printer that makes code character by character
// make two code blocks w/ strings.
// one for array, one for array.forEach command
const workBuf = [];
const buf1 = `const array = ['Jimmy','Baughb','Larry']`;
const buf2 = 'array.forEach(x=>console.log(x))';
// create a function that creates the array, character by character w/ charcodeat, pushes into workingArray
function workingArray() {
    // for loop buf1
    // push a newline into array
    // for loop buf2
};

// charcodeat 10 is newline

//write to file loop.js
fs.writeFileSync('./file/loop.js', workBuf);

// ASSIGNMENT 2
// now make the Buffer printer read the pair-programming.txt and transform it by adding HTML tags
