#!/usr/bin/env node

const { BgRed } = require("./assets/colors");

export const color = (obj) => {
    console.log('\x1b[36m%s\x1b[0m', obj);
    // console.log('\x1b[36m%s\x1b[0m', 'I am cyan'); 
}