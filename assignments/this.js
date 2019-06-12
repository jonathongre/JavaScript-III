/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/global object binding: when global, "this" is the window/console.
 * 2. Implicit Binding: when a function is called with a dot, the object before the dot is "this".
 * 3. New binding: When a constructor function is used, "this" refers to the object created by the constructor function
 * 4. Explicit binding: When a "call" or "apply" method is used, "this" is explicitly defined 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function yourName(name) {
    console.log('Hello ' + this + '!')
}

yourName('Eric')
// Principle 2

// code example for Implicit Binding
const myGreeting = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`)
        //        console.log(this)
    }
}
myGreeting.sayHello('Eric')
// Principle 3

// code example for New Binding
function greetPerson(firstPerson) {
    this.greeting = 'Hello';
    this.firstPerson = firstPerson;
    this.greet = function () {
        console.log(this.greeting + ' ' + this.firstPerson)
        //        console.log(this)
    }
}

const eric = new greetPerson('Silas')
const silas = new greetPerson('Dad')


eric.greet()
silas.greet()

// Principle 4

// code example for Explicit Binding
const myCharacter = {
    name: 'Usahtiel',
    race: 'Blood Elf',
    class: 'Warlock',
    server: 'Nordrassil',
    guild: 'Rêînçårnäted'
}

const favRaids = ['Icecrown Citadel', 'Seige of Orgrimmar', 'Hellfire Citadel']

function myWowMain(raid1, raid2, raid3) {
    return `Hi! My main is ${this.name}, She is a ${this.race} ${this.class}. I play on the ${this.server} server. I am a member of the guild ${this.guild}. My favorite raids are ${raid1}, ${raid2} and ${raid3}.`
}

console.log(myWowMain.apply(myCharacter, favRaids))
