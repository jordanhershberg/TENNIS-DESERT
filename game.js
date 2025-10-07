// A starter template for side-scrolling games like our platformer
kaboom({
 width: 1200,
 height: 600,
 background: [0, 100, 200],
});

setGravity(800);

// Load a player sprite
loadSprite("tennisball", "tennis-ball-transparent-free-png.png");

scene("main", ({ level } = { level: 0 }) => {

add([
    // A circle is a great way to make a smooth, round hill!
    circle(100),
    // Position it so it's partially buried, creating a dune shape
    pos(100, height() - 150),
    // Give it a sandy color
    color(255, 200, 100),
    area(),
    body({ isStatic: true }), // Make sure it's solid!
]);
add([
    // A circle is a great way to make a smooth, round hill!
    circle(100),
    // Position it so it's partially buried, creating a dune shape
    pos(300, height() - 150),
    // Give it a sandy color
    color(255, 200, 100),
    area(),
    body({ isStatic: true }), // Make sure it's solid!
]);

// --- The Player Character ---
    const player = add([
    sprite("tennisball"),
    pos(100, 200),
    area({ scale: 1}),
    body(),
    "tennisball"
    ]);

    // --- Movement Controls ---

    onKeyPress("space", () => {
    if (player.isGrounded()) {
        

    };
    });
    });

go("main");
