window.onload = yahtzeeGame;

function yahtzeeGame () {

	var upperSecAccumulator = 0;
	var yahtzeeScore = 50;
	var totalElm = getElm("totalScore");
	var match;
	var tempMatch;
	var rolls = 0;
	var held = [false, false, false, false, false];
	var dice = [getElm("0"), getElm("1"), getElm("2"), getElm("3"), getElm("4")];

	function getElm (id) {

		return document.getElementById(id);
	};

	function parseInnerHTML () { //Use: Element.parseInnerHTML(); defaults "-" to 0.

		if(this.innerHTML === "-") return 0;
		else return Number(this.innerHTML);
	};

	function total (value) {

		totalElm.innerHTML = Number(totalElm.innerHTML) + value;
	};

	//Dice roll and hold start

	function updateHeld (id) {

		for(var i = 0; i<5; i++) {

			held[i] = getElm("hold" + i).checked;
		}
	};

	function roll () {

		if(rolls < 3) {

			for(var i = 0; i<5; i++) {

				if(held[i] === false || rolls === 0) {

					dice[i].innerHTML = Math.floor(Math.random() * 6) + 1;
				}
			}
			rolls++;
		}
	};

	function rollReset () {

		rolls = 0;

		for(var i = 0; i<5; i++) {

			dice[i].innerHTML = 0;
		}
	};

	function disable (name) {

		var elm = getElm(name);
		elm.classList.add("strike");
		elm.classList.remove("cell");
		elm.onclick = undefined;
	};
	for(var i = 0; i<5; i++) {

		getElm("hold" + i).onclick = updateHeld;
	}

	function cellScore (name, value) {

		getElm(name + "Score").innerHTML = value;
		rollReset();
		disable(name);
		total(value);
	};

	function sumDice() {

		var accumulator = 0;

		for(var i = 0; i<5; i++) {

			accumulator = accumulator + Number(dice[i].innerHTML);
		}

		return accumulator;
	};

	getElm("roll").onclick = roll;

	//End dice
	//Upper section start
	
	function upperSecScore (value) { //Sums up dice containing value.

		var accumulator = 0;

		for(var i = 0; i<5; i++) {

			if(Number(dice[i].innerHTML) === value) {

				accumulator = accumulator + value;
			}
		}

		return accumulator;
	};

	function upperSec (name, value) {

		function func1 () {

			if(rolls > 0) {

				var upperScore = upperSecScore(value)
				upperSecAccumulator = upperSecAccumulator + upperScore;
				cellScore(name, upperScore);
				checkUpperBonus();
			}
		};
		return func1;
	};

	getElm("ones").onclick = upperSec("ones", 1);
	getElm("twos").onclick = upperSec("twos", 2);
	getElm("threes").onclick = upperSec("threes", 3);
	getElm("fours").onclick = upperSec("fours", 4);
	getElm("fives").onclick = upperSec("fives", 5);
	getElm("sixes").onclick = upperSec("sixes", 6);

	//Upper section end
	//kind lower section start

	function kindScore (value, kindVal) { //Used in 3 or 4 in a kind, full house, and yahtzee. Checks for kindVal numbers (or higher) equal to value.

		var numbersOfAKind = 0;

		for(var i = 0; i<5; i++) {

			if(Number(dice[i].innerHTML) === value) {

				numbersOfAKind = numbersOfAKind + 1;
			}
		}

		if(numbersOfAKind >= kindVal) {

			return sumDice();

		} else {

			return undefined;
		}
	};

	function kind (kindVal) {

		function func2 () {

			var score = 0;

			for(var i = 1; i<7; i++) {

				score = kindScore(i, kindVal)

				if(score) {

					if(kindVal === 3) {

						cellScore("threeOfAKind", score);

					} else {

						cellScore("fourOfAKind", score);
					}
				}
			}
		};

		return func2;
	};

	getElm("threeOfAKind").onclick = kind(3);
	getElm("fourOfAKind").onclick = kind(4);

	function yahtzee () {

		if(rolls > 0) {

			for(var i = 1, tempMatch = undefined, match = undefined; i<7; i++) {

				tempMatch = kindScore(i, 5);
				if(tempMatch !== undefined) match = true;
			}

			if(match) {

				cellScore("yahtzee", yahtzeeScore);
				yahtzeeScore = 100;
				yahtzeeExtend();
			}
		}
	};

	getElm("yahtzee").onclick = yahtzee;

	//Yahtzee lower section end
	//Upper section bonus start

	function checkUpperBonus () {

		if(upperSecAccumulator > 62) cellScore("upperSecBonus", 35);
	};


	function yahtzeeExtend () {

		//Remove current Yahtzee cell functionality

		getElm("yahtzee").removeAttribute("id");
		getElm("yahtzeeScore").removeAttribute("id");

		//Create new Yahtzee cell elements

		var newYahtzeeRow = document.createElement("tr");
		var newYahtzeeData1 = document.createElement("td");
		var newYahtzeeData2 = document.createElement("td");

		//Attribute new Yahtzee cell elements

		newYahtzeeData1.innerHTML = "Yahtzee";
		newYahtzeeData2.innerHTML = "-";
		newYahtzeeData1.setAttribute("id", "yahtzee");
		newYahtzeeData1.setAttribute("class", "cell");
		newYahtzeeData1.onclick = yahtzee;
		newYahtzeeData2.setAttribute("id", "yahtzeeScore");

		//Add new Yahtzee cell elements to Yahtzee table

		newYahtzeeRow.appendChild(newYahtzeeData1);
		newYahtzeeRow.appendChild(newYahtzeeData2);
		getElm("yahtzeeTable").appendChild(newYahtzeeRow);
	};

	//Yahtzee bonus end
};
