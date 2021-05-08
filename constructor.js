// Housekeeper constructor function
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress!");
    }
}
let newHouseKeeper = new HouseKeeper(12, "Jane", ["laying beds, extra services"], clean());
console.log(newHouseKeeper.clean());

// BellBoy constructor function
/*
function BoyBell (name, age, languages) {
    this.name = name;
    this.age = age;
    this.languages = languages;
    this.moveSuitcase = function () {
        alert("May I take your suitacase?");
        carrySuitcase();
        move();
    };
}

let bellBoy = new BoyBell("John", 22, ["Spanish", "Mandarin"]); */