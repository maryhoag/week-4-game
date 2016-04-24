//create array of player objects
	//health, attack( which += with each attack), counter
	//also name, photo, maybe sound effect?
	//while enemy, only counter and unchangeable
var wins;
var loses;
var user;
var opponent;
var attackPower;
var userHealthPoints;
var enemyHealth;

var rey = {name: "Rey", health: 20, attack: 3, counter: 4};
var kylo = {name: "Kylo", health: 22, attack:2, counter:3};
var finn = {name:"Finn", health:25, attack: 2, counter:3};
var phasma = {name: "Phasma", health:20, attack:3, counter:3};

//collect user pick for combatant
var game = {
	setCharacter: function () {
		$("#one").html(this);
		user = this.value;
		attackPower=value.attack;
		userHealthPoints=value.health;

		$("#healthOne").html(value.health);
	},

	setEnemy: function() {
		$("#two").html(this);
		opponent = this.value;
		enemyHealth=value.health;

		$("#healthTwo").html(value.health);
		console.log(opponent);

	},

	userAttack: function() {
		enemyHealth -= user.attack;
		attackPower += user.attack;
	},

	opponentAttack: function() {
		userHealthPoints -= opponent.counter;
	}

};



$(".image").on("click", function() {
	game.setCharacter();
	console.log(user);
	game.setEnemy();
	console.log(opponent);
});

//loop or function

	//player clicks attack button; defender loses health

	//counterattack; combatant loses health

	//first to hit zero health loses

//pick new defender



