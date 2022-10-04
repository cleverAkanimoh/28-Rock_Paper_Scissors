let userPoints = document.querySelector("#userPoints");
let compPoints = document.querySelector("#compPoints");

let choices = document.querySelectorAll(".choices");

let userResult = document.querySelector("#userResult");
let resultText = document.querySelector("#resultText");
let compResult = document.querySelector("#compResult");

let compWin = 0;
let userWin = 0;

choices.forEach((choose, UserChoose) => {
	choose.onclick = () => {

		userResult.innerHTML = `${choose.innerHTML}<h3>user</h3>`;

		// generate random number for computer turn
		let computerChoose = Math.floor(Math.random() * 3);

		if (computerChoose === 0) {
			compResult.innerHTML = `<i class="fas fa-hand-rock"></i>
                <h3>comp</h3>`
		} else if (computerChoose === 1) {
			compResult.innerHTML = `<i class="fas fa-hand-paper"></i>
                <h3>comp</h3>`
		} else if (computerChoose === 2) {
			compResult.innerHTML = `<i class="fas fa-hand-scissors"></i>
                <h3>comp</h3>`
		}

		// results
		// 0 = rock, 1 = paper, 2 = scissors

		if (UserChoose === computerChoose) {
			resultText.innerText = `Draw`;
		} else if (UserChoose === 0 && computerChoose === 1) {
			// computer wins
			compWin += 1;
			resultText.innerText = `Loss`;
		} else if (UserChoose === 1 && computerChoose === 2) {
			// computer wins
			compWin += 1;
			resultText.innerText = `Loss`;
		} else if (UserChoose === 2 && computerChoose === 0) {
			// user wins
			compWin += 1;
			resultText.innerText = `Loss`;
		} else  {
			// User Wins
			userWin += 1;
			resultText.innerText = `Win`;
		}

		userPoints.innerText = userWin;
		compPoints.innerText = compWin;
	}
})