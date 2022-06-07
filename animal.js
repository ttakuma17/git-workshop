class Animal {
	static activityMultipiler = 1.2;

	constructor(name, weightKg, heightM, isPredeator, speedKph) {
		this.name = name;
		this.weightKg = weightKg;
		this.heightM = heightM;
		this.isPredeator = isPredeator;
		this.speedKph = speedKph;
	}

	getBmi() {
		return Math.floor(this.weightKg / (this.heightM * this.heightM) * 100) / 100
	}

	getDailyCalories() {
		return Math.floor((70 * Math.pow(this.weightKg, 0.75)) * Animal.activityMultipiler * 100) / 100;
	}

	isDangerous() {
		return this.isPredeator || this.heightM >= 1.7 || this.speedKph >= 35;
	}

}

let rabbit = new Animal("rabbit", 10, 0.3, false, 20);
console.log(rabbit.getBmi());
console.log(rabbit.isDangerous());

let snake = new Animal("snake", 30, 1, true, 30);
console.log(snake.isDangerous());
console.log(snake.getDailyCalories());

let elephant = new Animal("elephant", 300, 3, false, 5);
console.log(elephant.getBmi());
console.log(elephant.getDailyCalories());

let gazelle = new Animal("gazelle", 50, 1.5, false, 100);
console.log(gazelle.getDailyCalories());
console.log(gazelle.isDangerous());

// クラス内の定数の使い方が理解できていなかったので修正
// const activityMultipiler = 1.2; -> 呼び出し時は　クラス名.定数
