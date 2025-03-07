class Monster {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size +25; // Increase the size by 50%
        this.alive = true; // Monster disappears when stomped
    }

    display() {
        if (this.alive) {
            image(monsterImg, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }
    }

    checkCollision(player) {
        if (this.alive) {
            let playerBottom = player.y + player.height;
            let playerTop = player.y;
            let playerLeft = player.x;
            let playerRight = player.x + player.width;

            let monsterTop = this.y - this.size / 2;
            let monsterBottom = this.y + this.size / 2;
            let monsterLeft = this.x - this.size / 2;
            let monsterRight = this.x + this.size / 2;

            // Check if player is above the monster and falls onto it
            if (
                playerBottom >= monsterTop && // Player lands on monster
                playerTop < monsterBottom && // Player is not inside the monster
                playerRight > monsterLeft && // Player overlaps horizontally
                playerLeft < monsterRight
            ) {
                player.velocityY = player.jumpPower; // Bounce the player up
                drawGamePage.score += 1;
                this.alive = false; // Remove the monster
                dareSound.play();
            }
        }
    }
}
class RareMonster {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.alive = true;
        this.soundPlayed = false; // Flag to check if the sound has been played
    }

    display() {
        if (this.alive) {
            image(rareMonsterImg, this.x - this.size / 2, this.y - this.size / 2, 150, this.size);
            if (!this.soundPlayed) {
                rareMonsterSound.play();
                this.soundPlayed = true;
            }
        }
    }

    checkCollision(player) {
        if (this.alive) {
            let playerBottom = player.y + player.height;
            let playerTop = player.y;
            let playerLeft = player.x;
            let playerRight = player.x + player.width;

            let monsterTop = this.y - this.size / 2;
            let monsterBottom = this.y + this.size / 2;
            let monsterLeft = this.x - this.size / 2;
            let monsterRight = this.x + this.size / 2;

            // Check if player is above the monster and falls onto it
            if (
                playerBottom >= monsterTop && // Player lands on monster
                playerTop < monsterBottom && // Player is not inside the monster
                playerRight > monsterLeft && // Player overlaps horizontally
                playerLeft < monsterRight
            ) {
                player.velocityY = player.jumpPower; // Bounce the player up
                drawGamePage.score += 5; // Increase score by 5 for rare monster
                this.alive = false; // Remove the monster
                rareMonsterSound.stop(); // Stop the rare monster sound
                dareSound.play();
            }
        }
    }
}