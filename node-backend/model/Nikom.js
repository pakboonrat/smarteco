const { stringify } = require("@angular/compiler/src/util");
const { Module } = require("module");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Nikom = new Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstname: {
        type: String
    },
    surname:{
        type: String
    },
    email:{
        type: String
    },
    tel:{
        type: String
    }
},{
    collection:'nikoms'
})

Module.exports = mongoose.model('Nikom',Nikom);
