// A starter template for side-scrolling games like our platformer
kaboom({
 width: 1200,
 height: 600,
 background: [0, 100, 200],
});

setGravity(800);

// Load a player sprite
loadSprite("tennisball", "https://static.vecteezy.com/system/resources/previews/013/362/731/non_2x/tennis-ball-transparent-free-png.png");

scene("main", ({ level } = { level: 0 }) => {


// --- The Player Character ---
const player = add([
 sprite("tennisball"),
 pos(100, 200),
 area({ scale: 0.5 }),
 body(),
 "tennisball"
]);

// --- The World ---
add([
 rect(width(), 48),
 pos(0, height() - 48),
 area(),
 body({ isStatic: true }),
]);

// --- Movement Controls ---

onKeyPress("space", () => {
 if (player.isGrounded()) {
 };
 (play)
});
});

go("main")
