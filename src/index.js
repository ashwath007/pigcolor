#!/usr/bin/env node

const express = require('express');
// const { BgRed } = require("./assets/colors");
console.log('\x1b[36m%s\x1b[0m', "Welcome to pigcolor");

exports.Color = (obj) => {
    // console.log(`\x1b[36m%s\x1b[0m`, obj);
    console.log('\x1b[36m%s\x1b[0m', obj);
}