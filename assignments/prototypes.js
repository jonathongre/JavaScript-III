/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    this.greeting = attributes.greeting;
    this.faction = attributes.faction;
}

function CharacterStats(stats) {
    this.healthPoints = stats.healthPoints;
    this.name = Humanoid.name;
    GameObject.call(this, stats)
}

function Humanoid(attr) {
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
    this.greeting = attr.greeting;
    CharacterStats.call(this, attr);
}

function Villain(attr) {
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
    this.greeting = attr.greeting;
    CharacterStats.call(this, attr);
}

Humanoid.prototype.greet = function () {
    return `${this.greeting}`;
}

Humanoid.prototype.takeDamage = function () {
    return `${this.name} took damage`;
}

Humanoid.prototype.destroy = function () {
    return `${this.name} was removed from the game.`
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    faction: 'hero',
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    greeting: 'Hello!'
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    faction: 'hero',
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
    greeting: 'Hello!'
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    faction: 'hero',
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
    greeting: 'Mára rë!'
});

const shaman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 6,
    },
    faction: 'villian',
    healthPoints: 20,
    name: 'Gul\'dan',
    team: 'Stormreaver Clan',
    weapons: [
      'Staff of Gul\'dan',
    ],
    language: 'Orcish',
    greeting: 'Aka\'Magosh!'
});

const witchDoctor = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 6,
    },
    faction: 'villian',
    healthPoints: 15,
    name: 'Zul\'jin',
    team: 'Zanzil',
    weapons: [
      'Spiritchaser Staff',
    ],
    language: 'Zandali',
    greeting: 'Honnah!'
});

const assassin = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 6,
    },
    faction: 'villian',
    healthPoints: 15,
    name: 'Gazlowe',
    team: 'Ratchet',
    weapons: [
      'Rocket Turret',
    ],
    language: 'Goblin',
    greeting: 'Snuz Zordas!'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(shaman.createdAt);
console.log(assassin.dimensions);
console.log(witchDoctor.healthPoints);
console.log(shaman.name);
console.log(witchDoctor.team);
console.log(shaman.weapons);
console.log(assassin.language);
console.log(assassin.greet());
console.log(shaman.takeDamage());
console.log(witchDoctor.destroy());

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
