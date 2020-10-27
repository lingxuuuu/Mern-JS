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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();