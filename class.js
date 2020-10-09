
//factory function
const elfObject = {
    attack(){
        return 'attack with ' + this.weapon
    }
}
function createElf(name, weapon){
    let newElf = Object.create(elfObject)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf
}

const peter = createElf('Peter', 'stones')
//console.log(peter.attack())

//Constructor Function
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon
}

Elf.prototype.build = function(){
    let self = this
    function building(){
        return self.name + ' builds a house';
    }
    return building()
}
const peter1 = new Elf('Peter', 'stones')
//console.log(peter1.attack());
//console.log(peter1.build());

//ES6 class
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return 'attack with ' + this.weapon
    }
}

class Elf3 extends Character {
    constructor(name, weapon,type){
        super(name, weapon);
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
        
    }
    makeFort(){
        return 'strongest fort in the world made';
    }
    
}
const elf3 = new Elf3('peter', 'stones', 'house')
console.log(elf3);
const shrek = new Ogre('Sherk', 'club', 'green')
console.log(shrek.makeFort())


//new binding this

function Person(name, age) {
    this.name = name;
    this.age = age;

}

const person1 = new Person('Xavier', 55)

// implicit binding

const person = {
    name: 'Kare',
    age: 40,
    hi(){
        console.log('hi'  + this.name)
    }
}

//explicit binding
/*
const person3 = {
    name: 'kara',
    age: 40,
    hi: function() {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}
*/
// arrow function


//call()
const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2){
        return this.health += num1 + num2;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

wizard.heal.call(archer, 50, 30)
wizard.heal.apply(archer, [50, 30])
const healArcher = wizard.heal.bind(archer, 50, 30);
healArcher();