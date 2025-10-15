kaboom({
	width: 1200,
	height: 600,
	background: [0, 100, 200],
});

setGravity(800);

loadSprite("tennisball", "tennis-ball-transparent-free-png.png");

scene("main", () => {
	const SEGMENTS = 200;
	const segmentWidth = width() / SEGMENTS;

	function waveY(x) {
		const baseY = height() - 320;
		const amplitude = 100;
		const wavelengthModulator = 1 + 0.5 * Math.sin(x * 0.003);
		const frequency = 0.01;
		const y = Math.sin((x * frequency) / wavelengthModulator);
		return baseY + y * amplitude;
	}
for (let i = 0; i < SEGMENTS; i++) {
	const x1 = i * segmentWidth;
	const x2 = (i + 1) * segmentWidth;
	const y1 = waveY(x1);
	const y2 = waveY(x2);

	const polyPoints = [
		vec2(x1, y1),
		vec2(x2, y2),
		vec2(x2, height()),
		vec2(x1, height()),
	];

	add([
		pos(0, 0),
		area({ shape: new Polygon(polyPoints) }),
		body({ isStatic: true }),
		drawPolygon({ pts: polyPoints }),
		color(255, 255, 255),
		"dune",
	]);
}
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
		body({
			restitution: 0,
			friction: 0.8,
		}),
		scale(1),
		anchor("center"),
		"tennisball",
	]);

	const ACCELERATION = 1600;
	const MAX_SPEED = 600;
	const THRUST_FORCE = 1000;

	player.onUpdate(() => {
		if (isKeyDown("space")) {
			if (player.isGrounded()) {
				player.vel.x = Math.min(player.vel.x + ACCELERATION * dt(), MAX_SPEED);
			} else {
				player.vel.y += THRUST_FORCE * dt();
			}
		} else {
			player.vel.x *= 0.99;
		}
	});
});

go("main");
