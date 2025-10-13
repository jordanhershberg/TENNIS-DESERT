// A starter template for side-scrolling games like our platformer
kaboom({
 width: 1200,
 height: 600,
 background: [0, 100, 200],
});

//setGravity(800);

// Load a player sprite
loadSprite("tennisball", "tennis-ball-transparent-free-png.png");

scene("main", ({ level } = { level: 0 }) => {

// Dune 1: Approximated circular hitbox
const DUNE_SIDES = 20;
const DUNE_RADIUS = 100;
const dunePoints1 = [];
for (let i = 0; i < DUNE_SIDES; i++) {
    const angle = (2 * Math.PI * i) / DUNE_SIDES;
    dunePoints1.push(vec2(Math.cos(angle) * DUNE_RADIUS, Math.sin(angle) * DUNE_RADIUS));
}

add([
    circle(DUNE_RADIUS),
    pos(100, height() - 150),
    color(255, 200, 100),
    area({ shape: new Polygon(dunePoints1) }),
    body({ isStatic: true }),
]);

// Dune 2: Approximated circular hitbox
const dunePoints2 = [];
for (let i = 0; i < DUNE_SIDES; i++) {
    const angle = (2 * Math.PI * i) / DUNE_SIDES;
    dunePoints2.push(vec2(Math.cos(angle) * DUNE_RADIUS, Math.sin(angle) * DUNE_RADIUS));
}

add([
    wave(-3,3,5,Math.sin),
    circle(DUNE_RADIUS),
    pos(300, height() - 150),
    color(255, 200, 100),
    area({ shape: new Polygon(dunePoints2) }),
    body({ isStatic: true }),
]);

// --- The Player Character ---
    const player = add([
    sprite("tennisball"),
    pos(100, 200),
    area({ scale: 0.8}),
    body(),
    "tennisball"
    ]);

    // --- Movement Controls ---

// These are constants we can tweak to change the feel of the game
const ACCELERATION = 400;
const FALL_SPEED = 600;

// onUpdate() runs on every single frame
player.onUpdate(() => {
    // Check if the space key is currently being held down
    if (isKeyDown("space")) {
        // If the player is on the ground, accelerate them to the right
        if (player.isGrounded()) {
            player.move(ACCELERATION, 0);
        }
    }
});

// onKeyRelease() runs once when the space key is let go
onKeyRelease("space", () => {
    // If the player is in the air when the key is released, push them down
    if (!player.isGrounded()) {
        player.move(0, FALL_SPEED);
    }
});

    });

go("main");