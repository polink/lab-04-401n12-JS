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
    for(let i=0; i < buf1.length;i++) {
        workBuf.push(buf1.charCodeAt(i));
    }
    // push a newline into array; charcodeat 10 is newline
    workBuf.push(10);

    // for loop buf2
    for(let i=0; i < buf2.length;i++) {
        workBuf.push(buf2.charCodeAt(i));
    }
}

workingArray();
// blank buffer - algorithm for this, makes a blank array that is the length of workBuf + 1 space in blank spaces
let blankArr = [''];
function arrPrintr() {
    for (let i=0; i<workBuf.length; i++){
        blankArr.push(' ');
    }
    blankArr.push(' ')
}
let emptyThing = '';
// console.log(blankArr);
// would use blankArr, but something in translation changes the blank string
let blank = Buffer.from('                                                                                            ');
arrPrintr();
// buffer writer - takes content of workBuf and pushes it into buffer
let bufferWritr = buffer => {
    for(let x = 0; x<workBuf.length; x++){
        buffer[x] = workBuf[x];
    }
};

bufferWritr(blank);
// write to file loop.js
fs.writeFileSync('./files/loop.js', blank);

// ASSIGNMENT 2
// now make the Buffer printer read the pair-programming.txt and transform it by adding HTML tags
