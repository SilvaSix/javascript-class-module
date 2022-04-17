import * as Enemy from "./enemy.js";

// testing here

let enemy1 = new Enemy.enemyConstructor();

console.log(enemy1.name);

enemy1.name = "joe";

console.log(enemy1.name);

console.log(enemy1.alive);

enemy1.alive = false;

console.log(enemy1.alive);

console.log(enemy1.defense);



