'use strict';

//Task 1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = durability
    }

    takeDamage (damage) {
        if(damage > this.durability){
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

class LuxWeapon {
    constructor(name, version, attack, range, durability) {
        this.name = name;
        this.version = version;
        this.attack = attack;
        this.range = range;
        this.durability = durability;
    }
}

const hand = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);
const longBow = new LuxWeapon('Длинный лук', 'Лук', 15, 3, 200);
const axe = new LuxWeapon('Секира', 'Меч', 27, 1, 800);
const staffStorm = new LuxWeapon('Посох Бури', 'Посох', 10, 3, 300);


//Task 2

class Hand extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}
class Bow extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}
class Sword extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}
class Knife extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}
class Staff extends Weapon {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
    }
}

class LongBow extends Bow {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
        this.version = version;
    }
}
class Axe extends Sword {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
        this.version = version;
    }
}
class StaffStorm extends Staff {
    constructor(name, attack, durability, range) {
        super(name, attack, durability, range);
        this.version = version;
    }
}