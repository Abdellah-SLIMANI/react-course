# Classes
In 2015 the ECMAScript 6 (ES6) standard introduced classes.

JavaScript has a quite uncommon way to implement inheritance: prototypical inheritance. Prototypal inheritance, while in my opinion great, is unlike most other popular programming language’s implementation of inheritance, which is class-based.

People coming from Java or Python or other languages had a hard time understanding the intricacies of prototypal inheritance, so the ECMAScript committee decided to sprinkle syntactic sugar on top of prototypical inheritance so that it resembles how class-based inheritance works in other popular implementations.

This is important: JavaScript under the hood is still the same, and you can access an object prototype in the usual way.

## A class definition
This is how a class looks.

class Person {
  constructor(name) {
    this.name = name
  }
  
  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}
A class has an identifier, which we can use to create new objects using new ClassIdentifier().

When the object is initialized, the constructor method is called, with any parameters passed.

A class also has as many methods as it needs. In this case hello is a method and can be called on all objects derived from this class:

const flavio = new Person('Flavio')
flavio.hello()

## Class inheritance
A class can extend another class, and objects initialized using that class inherit all the methods of both classes.

If the inherited class has a method with the same name as one of the classes higher in the hierarchy, the closest method takes precedence:

class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}

const flavio = new Programmer('Flavio')
flavio.hello()
(the above program prints “Hello, I am Flavio. I am a programmer.”)

Classes do not have explicit class variable declarations, but you must initialize any variable in the constructor.

Inside a class, you can reference the parent class calling super().

## Static methods
Normally methods are defined on the instance, not on the class.

Static methods are executed on the class instead:

class Person {
  static genericHello() {
    return 'Hello'
  }
}

Person.genericHello() //Hello

## Private methods
JavaScript does not have a built-in way to define private or protected methods.

There are workarounds, but I won’t describe them here.

## Getters and setters
You can add methods prefixed with get or set to create a getter and setter, which are two different pieces of code that are executed based on what you are doing: accessing the variable, or modifying its value.

class Person {
  constructor(name) {
    this.name = name
  }
  
  set name(value) {
    this.name = value
  }
  
  get name() {
    return this.name
  }
}
If you only have a getter, the property cannot be set, and any attempt at doing so will be ignored:

class Person {
  constructor(name) {
    this.name = name
  }
  
  get name() {
    return this.name
  }
}
If you only have a setter, you can change the value but not access it from the outside:

class Person {
  constructor(name) {
    this.name = name
  }
  
  set name(value) {
    this.name = value
  }
}
