import * as Enemy from "./creature/enemy.js";
import * as Bandit from "./creature/bandit.js";
import * as Player from "./creature/player.js";

// testing here

let enemy1 = new Enemy.enemyConstructor();

console.log(enemy1.name);

enemy1.name = "joe";

console.log(enemy1.name);

console.log(enemy1.alive);

enemy1.alive = false;

console.log(enemy1.alive);

console.log(enemy1.defense);

console.log(".............................");

let bandit1 = new Bandit.banditConstructor();

console.log(bandit1.damageOut);

console.log(bandit1.alive);

console.log(".............................");

let player1 = new Player.playerConstructor();

console.log(player1.defense)

console.log(player1.name);

console.log(player1.alive);

player1.name = "joe";

console.log(player1.name)