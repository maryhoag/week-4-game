//create array of player objects
	//health, attack( which += with each attack), counter
	//also name, photo, maybe sound effect?
	//while enemy, only counter and unchangeable

	//to do

var protagChosen = false;
var wins;
var loses;
var user = null;
var opponent;
var attackPower;
var userHealthPoints;
var enemyHealth;

var rey = {name: "Rey", health: 20, attack: 3, counter: 4};
var kylo = {name: "Kylo", health: 22, attack: 2, counter: 3};
var finn = {name:"Finn", health: 25, attack: 2, counter: 3};
var phasma = {name: "Phasma", health: 20, attack: 3, counter: 3};

//collect user pick for combatant
var game = {
	setCharacter: function (user) {
		console.log(user);
		//attackPower = user.attack;
		//userHealthPoints = user.health;
		//add another row and another div underneath and then add the name and healt
		protagChosen == true;
		console.log(attackPower);
	},

	setEnemy: function(user) {
		enemyHealth = opponent.health;

		$("#healthTwo").html(value.health);
		console.log(opponent);

	},

	userAttack: function() {
		enemyHealth -= user.attack;
		attackPower += user.attack;
		$("healthOne").html(enemyHealth);
	},

	opponentAttack: function() {
		userHealthPoints -= opponent.counter;
		$("#healthTwo").html(userHealthPoints);
	}

};

//this isn't working either
$(".won").append("three");


//this doesn't work
//corrected syntex for jquery
$(".image").click(function() {
	$("#protag").html(this);
	$("#protag").addClass("img-responsive center-block");
	console.log(this.data);
	if(protagChosen == false) {
		user = this.id;
		console.log(user);
		game.setCharacter();
	} else {
		opponent = this.value;
		game.setEnemy();

	}
	
});
//but this does
$(".btn-danger").click(function() {
	userAttack();
	opponent();
});


//loop or function

	//player clicks attack button; defender loses health

	//counterattack; combatant loses health

	//first to hit zero health loses

//pick new defender



