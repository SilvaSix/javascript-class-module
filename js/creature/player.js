export class playerConstructor {
    constructor(name = "Mr. player", hitPoints = 100, energyPoints = 100, 
        accuracy = 100, defense = 100, damageOut = 100, alive = true){   
            this._name = name;
            this._hitPoints = hitPoints;
            this._energyPoints = energyPoints;
            this._accuracy = accuracy;
            this._defense = defense;
            this._damageOut = damageOut;
            this._alive = alive; 
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