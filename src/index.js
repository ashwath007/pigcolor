#!/usr/bin/env node

var emoji = require('node-emoji');
const Box = require('cli-box');
var figlet = require('figlet');
var inquirer = require('inquirer');
// Server
module.exports.server = function(port = 0) {
    if (port === 0) {
        console.log("-----------------------------------------------------------");
        console.log('\x1b[36m\t\t\tServer started \x1b[0m', emoji.random().emoji);
        console.log("-----------------------------------------------------------");
    } else {
        console.log("-----------------------------------------------------------");
        console.log('\x1b[36m\t\t\tServer started @ %d \x1b[0m', port, emoji.random().emoji);
        console.log("-----------------------------------------------------------");
    }
};

module.exports.db = function(port = 0) {
    if (port === 0) console.log('\u001b[35mDatabase Connected', emoji.get('facepunch'));
    else console.log('\u001b[35mDatabase Connected \u001b[36m@%d', port, emoji.get('facepunch'));
}

module.exports.lbox = (txt) => {
    // console.log(emoji.get('pig'),'\u001b[38;5;174m',txt,emoji.get('pig'));
    var b3 = Box("100x4", `\u001b[38;5;174m\n${txt}`);
    console.log(b3);
}

module.exports.box = (txt) => {
    // console.log(emoji.get('pig'),'\u001b[38;5;174m',txt,emoji.get('pig'));
    var b3 = Box("50x4", `\u001b[38;5;174m\n${txt}`);
    console.log(b3);
}