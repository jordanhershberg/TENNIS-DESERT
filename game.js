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

    const LEVELS = [
        [
            "                       ",
            "                       ",
            "                       ",
            "                       ",
            "                       ",
            "                       ",
            "=======================",
        ]
        ];

    const currentLevel = level;

// --- The Player Character ---
    const player = add([
    sprite("tennisball"),
    pos(100, 200),
    area({ scale: 0.0005 }),
    body(),
    "tennisball"
    ]);

        const levelConf = {
        tileWidth: 47,
        tileHeight: 47,
        tiles: {
            " ": () => [],
            "=": () => [
                rect(47, 47),
                color(0, 200, 0),
                area(),
                body({ isStatic: true }),
                "platform",
            ],
        }
    };

    addLevel(LEVELS[currentLevel], levelConf);
    
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
