// js functions pre ES2015:
function myFunction(){
    //instructions
    return 10
}

//js functions post ES2015
const myArrowFunction = () => {
    //instructions
    return 10
}

//Implicit returns 
const implicitReturn = (a,b) => a+b;

// console.log(implicitReturn(5,6))

// this keyword context

const car = {
    model: 'E36',
    manif: 'BMW',
    carName: function(){
        console.log(this)
        return this.model + ' ' + this.manif
    }
}

console.log(car.carName())