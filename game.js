// A starter template for side-scrolling games like our platformer
kaboom({
 width: 1200,
 height: 600,
 background: [0, 100, 200],
});

setGravity(800);

// Load a player sprite
loadSprite("tennisball", "");

scene("main", ({ level } = { level: 0 }) => {

add([
    // A circle is a great way to make a smooth, round hill!
    circle(100),
    // Position it so it's partially buried, creating a dune shape
    pos(500, height() - 100),
    // Give it a sandy color
    color(255, 200, 100),
    area(),
    body({ isStatic: true }), // Make sure it's solid!
]);

// --- The Player Character ---
    const player = add([
    sprite("tennisball"),
    pos(100, 200),
    area({ scale: 0.0005 }),
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
    });
    });

go("main");
