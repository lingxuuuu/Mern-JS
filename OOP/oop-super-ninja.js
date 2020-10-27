class Ninja {
    constructor(name){
        this.name= name;
        this.health=0;
        this.speed=3;
        this.strength=5;
    }
    sayName() {
        console.log('Your name is ' + this.name)
    }
    showStats() {
        console.log('Your name is ' + this.name);
        console.log('Your health is ' + this.health);
        console.log('Your speed is ' + this.speed);
        console.log('Your strength is ' + this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log( 'Your health is added to ' + this.health )
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log(' A wise message: "What one programmer can do in one month, two programmers can do in two months." ');
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSensei = new Sensei('Master Splinter')
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
