kaboom({
    width: 1200,
    height: 600,
    background: [0, 100, 200],
});

setGravity(800);

loadSprite("tennisball", "tennis-ball-transparent-free-png.png");

// --- Simple Sine Wave Function ---
function waveY(x) {
    const WAVE_Y = height() - 320;
    const BASE_FREQ = 5;
    const AMP = 120;
    return WAVE_Y + Math.sin((x / width()) * Math.PI * 2 * BASE_FREQ) * AMP;
}

// --- Generate Polygonal Hitbox for the Wave (just the curve) ---
const WAVE_POINTS = 1200;
const waveCurve = [];
for (let i = 0; i < WAVE_POINTS; i++) {
    const x = (i / (WAVE_POINTS - 1)) * width();
    const y = waveY(x);
    waveCurve.push(vec2(x, y));
}

// Close the polygon at the bottom corners
waveCurve.push(vec2(width(), height()));
waveCurve.push(vec2(0, height()));

// --- Draw the Wave ---
add([
    pos(0, 0),
    color(255, 255, 255),
    drawPolygon({ pts: waveCurve }),
    area({ shape: new Polygon(waveCurve) }),
    body({ isStatic: true }),
    "dune"
]);

// --- Draw the Wave Curve as a Line ---
for (let i = 1; i < waveCurve.length - 2; i++) {
    add([
        pos(waveCurve[i - 1].x, waveCurve[i - 1].y),
        color(255, 0, 0),
        rect(Math.max(2, waveCurve[i].x - waveCurve[i - 1].x), 2),
        "wave_line"
    ]);
}

// --- Tennis Ball ---
const BALL_SIDES = 40;
const BALL_RADIUS = 28;
const ballPoints = [];
for (let i = 0; i < BALL_SIDES; i++) {
    const angle = (2 * Math.PI * i) / BALL_SIDES;
    ballPoints.push(vec2(Math.cos(angle) * BALL_RADIUS, Math.sin(angle) * BALL_RADIUS));
}

const player = add([
    sprite("tennisball"),
    pos(300, 100),
    area({ shape: new Polygon(ballPoints) }),
    body(),
    "tennisball"
]);

// --- Movement Controls ---
const ACCELERATION = 1600;
const FALL_SPEED = 600;
let velocity = vec2(0, 0);

player.onUpdate(() => {
    if (isKeyDown("space") && player.isColliding("dune")) {
        velocity.x = Math.min(velocity.x + ACCELERATION * dt(), 600);
        velocity.y = 0;
    } else {
        velocity.x *= 0.995;
        velocity.y += FALL_SPEED * dt();
    }
    player.move(velocity.x, velocity.y);
});

go("main");