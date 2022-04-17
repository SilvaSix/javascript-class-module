export class enemyConstructor {
    constructor() {
        this._name = "nameHere"; //add random name function here
        this._hitPoints = 100;
        this._accuracy = 100;
        this._defense = 100;
        this._damageOut = 10;
        this._energy = 100;
        this._alive = true; 
    } 
    
    set name(value) { if (value != null) {this._name = value;}}
    get name() { return this._name; }

    set hitPoints(value) {if(Number.isInteger){this._hitPoints = value;}}
    get hitPoints() {return this._hitPoints;}
    
    set energyPoints(value) {if(Number.isInteger){this._energyPoints = value;}}
    get energyPoints() {return this._energyPoints;}  

    set accuracy(value){if(Number.isInteger){this._accuracy = value;}}
    get accuracy() {return this._accuracy;}

    set defense(value) {if (Number.isInteger) {this._defense = value}}
    get defense() {return this._defense}

    set damageOut(value) {if (Number.isInteger) {this._damageOut = value}}
    get damageOut() {return this._damageOut}

    set alive(value) {if (typeof value == "boolean") {this._alive = value}}
    get alive() {return this._alive}

}