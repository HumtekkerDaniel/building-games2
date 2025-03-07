// Handle player movement
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        player.velocityX = -player.speed;
    } else if (keyCode === RIGHT_ARROW) {
        player.velocityX = player.speed;
    } else if (keyCode === 32 && player.canJump) {
        player.velocityY = player.jumpPower; // Allow jump only when standing on a surface
        player.canJump = false;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        player.velocityX = 0; // Stop movement
    }
}