class Platform {
	constructor(tempX, tempY, tempSizeX, tempSizeY) {
		this.x = tempX;
		this.y = tempY;
		this.vx = -2;
		this.sizeX = tempSizeX;
		this.sizeY = 40;
	}


    display() {
        image(cloudImg, this.x, this.y, this.sizeX, this.sizeY); // Draw the cloud platform
    }
  // Function to check collision with the player
  checkCollision(player) {
	if (
		player.y + player.height > this.y && // Player's feet are below platform's top
		player.y + player.height - player.velocityY <= this.y && // Was above the platform last frame
		player.x + player.width > this.x && // Player is within platform width (right side)
		player.x < this.x + this.sizeX // Player is within platform width (left side)
	) {
		player.y = this.y - player.height; // Snap player on top of the platform
		player.velocityY = 0; // Stop falling
		player.canJump = true; // Reset jump
	}
}
}