#!/usr/bin/env node
var emoji = require('node-emoji')

// Server
module.exports.server = function (port = 0) {
    if(port === 0){
        console.log("-----------------------------------------------------------");
        console.log('\x1b[36m\t\t\tServer started \x1b[0m',emoji.random().emoji);
        console.log("-----------------------------------------------------------");

    } 
    
    else console.log('\x1b[36mServer started @ %d \x1b[0m',port);
};

module.exports.db = function (port = 0) {
    if(port === 0) console.log('\u001b[35mDatabase Connected',emoji.get('facepunch'));
    else console.log('\u001b[35mDatabase Connected \u001b[36m@%d',emoji.get('facepunch'),port);
}

// Loading
module.exports.loading = function (color = '') {
   var loader =  ['|', '/', '-', '\\']
   let count = 0,tem_count=0;
   while(count < 4){
       if(tem_count === 3) tem_count = 0; 
       else {
        console.log('\u001b[32m %s ',loader[tem_count]);
        tem_count++;
       }
       if(count === 10) break;
       count++;

    }  
};





const express = require('express');

exports.Color = (obj) => {
    // console.log(`\x1b[36m%s\x1b[0m`, obj);
    console.log('\x1b[36m%s\x1b[0m', obj);
}