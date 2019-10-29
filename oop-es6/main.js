'use strict';

//Task 1

class Weapon {
    constructor(name, attack, durability, range, version) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.version = version;
        this.startDurability = durability;

    }

    takeDamage (damage) {
        if(damage === Infinity) {
            return this.durability = Infinity;
        } else if(damage > this.durability){
            return this.durability = 0;
        }
        this.durability -= damage;
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability >= this.startDurability / 100 * 30 ) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if(this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}



const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new Weapon('Длинный лук', 15, 3, 200,'Лук' );
const axe = new Weapon('Секира', 27, 1, 800, 'Меч');
const staffStorm = new Weapon('Посох Бури', 10, 3, 300, 'Посох');


//Task 2

class Arm extends Weapon {
    constructor() {
        super();
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
        this.startDurability = Infinity;
    }
}
class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
        this.startDurability = this.durability;
    }
}
class Sword extends Weapon {
    constructor() {
        super ();
        this.name = 'Меч';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
        this.startDurability = this.durability;
    }
}
class Knife extends Weapon {
    constructor() {
        super ();
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
        this.startDurability = this.durability;
    }
}
class Staff extends Weapon {
    constructor() {
        super ();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 20;
        this.startDurability = this.durability;
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.version = "Длинный лук";
        this.attack = 15;
        this.range = 4;
    }
}
class Axe extends Sword {
    constructor() {
        super();
        this.version = "Cекира";
        this.attack = 27;
        this.durability = 800;
        this.startDurability = this.durability;
    }
}
class StaffStorm extends Staff {
    constructor() {
        super();
        this.version = "Посох бури";
        this.attack = 10;
        this.range = 3;
    }
}