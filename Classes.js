// inheritance pre es2015 

const human = {
    breathing: true,
    greating(){
        return 'salam'
    }
}

const programmer = {
    sleep: false,
    __proto__: human
}

// console.log(programmer.greating())

// classes post es2015

class Person {
    constructor(name){
        this.name = name
    }

    static staticHello = () => 'static salam'

    hello(){
        return `hello my name is ${this.name}`
    }

    set name(value){
        this.name = name
    }

    get name(){
        return this.name
    }
}

const p = new Person('abdellah')

// console.log(p.hello())

class Coder extends Person {
    hello(){
        return super.hello() +' ' +'i do Code'
    }
}

const cd = new Coder('nameee')

// console.log(cd.hello())

console.log(Person.staticHello())