class ShootingGame {
    #pOneWinCount = 0;
    #pTwoWinCount = 0;
    #pOneHealth = 100;
    #pTwoHealth = 100;
    numberOfGames = 0;
    roundsPerGame = 0;
    constructor (roundsPerGame = 5) {
        this.roundsPerGame = roundsPerGame;
    }
    /**
     * Player's power
     */
    #playerOnePower() {
        return Math.random() * 5;
    }

    #playerTwoPower() {
        return Math.random() * 5;
    }
    /**
     * Initiates 5 rounds of attack,
     * reduces health of each player
     * and updates the score per round
     */
    #attack() {
        let player = { one: 0, two: 0 };

        for (let i = 0; i < this.roundsPerGame; i++) {
            this.#pTwoHealth -= this.#playerOnePower();
            this.#pOneHealth -= this.#playerTwoPower();
            if (this.#playerOnePower() > this.#playerTwoPower()) {
                player.one++;
            } else {
                player.two++;
            }
        }
        // console.log(player)
        this.#updatePlayerWinCount(player);
    }
    /**
     * Updates player win count
     * @param player as object which contains score of both player
     * @returns void
     */
    #updatePlayerWinCount(player) {
        if (player.one > player.two && this.#pOneHealth > 0) {
            this.#pOneWinCount++;
        } else {
            if (this.#pTwoHealth > 0) {
                this.#pTwoWinCount++;
            }
        }
    }

    /**
     * Player one health status
     * @params none
     * @returns number
     */
    get playerOneHealth(){
        return this.#pOneHealth;
    }

    /**
     * Player two health status
     * @params none
     * @returns number
     */
    get playerTwoHealth(){
        return this.#pTwoHealth;
    }

    /**
     * Checks health status for both players
     * @param none
     * @returns string | null
     */
    #healthStatus() {
        if (this.#pOneHealth <= 0) {
            return "1";
        } else if (this.#pTwoHealth <= 0) {
            return "2";
        } else {
            return null;
        }
    }

    #currentGameRound() {
        document.getElementById(
            "gameCount"
        ).innerHTML = `Game ${this.numberOfGames}`;
    }

    /**
     * Displays score
     * @param none
     * @returns void
     */
    #displayScore() {
        document.getElementById("pOne").innerHTML = this.#pOneWinCount;
        document.getElementById("pTwo").innerHTML = this.#pTwoWinCount;
    }

    /**
     * Displays the winner name
     * @param player name is accepted in string
     * @returns void
     */
    #theWinnerIs(player) {
        document.getElementById("result").innerHTML = `${player} Won the match!`;
    }

    /**
     * Returns winning player number
     * @param none
     * @returns void
     */
    #number() {
        if (this.#pOneWinCount > 2) {
            return 1;
        } else if (this.#pTwoWinCount > 2) {
            return 2;
        }
    }

    /**
     * Decides winner after checking health status
     * @param none
     * @returns void
     */
    #winnerIsDecided() {
        // if health status is not returning any player
        if (!this.#healthStatus()) {
            if (this.#number()) {
                return this.#number();
            } else {
                this.#attack();
                this.#displayScore();
            }
        } else {
            if (this.#healthStatus() === "1") {
                this.#theWinnerIs("Player1");
            } else if (this.#healthStatus() === "2") {
                this.#theWinnerIs("Player2");
            }
        }
    }

    /**
     * Displays score, win counts and current game
     * @param none
     * @returns void
     */
    updateWinStatus() {
        if (!this.#winnerIsDecided()) {
            this.numberOfGames++;
            this.#currentGameRound();
            if(this.#pOneWinCount > 1 || this.#pTwoWinCount > 1){
                if (this.#number()) this.#theWinnerIs(`Player${this.#number()}`);
            }
        } else {
            this.#theWinnerIs(`Player${this.#number()}`);
        }
    }
}

let shootingGame = new ShootingGame();
shootingGame.numberOfGames = 13;

let i = 0;



for(;i<=3;i++){  // 0 -> 1 // 1 -> 2 // 2 -> 3 // 3-> 4
    console.log(++i); // 1 -> 2 // 2 -> 3// 3 -> 4
    i--; // 1 // 2 // 3 
} 

// 1 // 2 //  3 // 4
