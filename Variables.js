'use strict'
// var, const, let
// var supports hoisting and let and const do not 

var a = 10;

// instructions

// let a;
// console.log(a)

const myConst = {
    name: 'ensa',
    lastName: 'fes'
}

const mysecondConst = [1,2,3,45,6,7]

mysecondConst.push(1,2,3,4)

myConst.year = 2020

console.log(mysecondConst)

//block
//let and const has a block scope visibility 
{

}

//fucntion
// var has a functional scope visibility
function f(){
    var myvar = 'variable'
}