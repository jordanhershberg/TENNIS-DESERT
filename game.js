// A starter template for side-scrolling games like our platformer
kaboom({
 width: 1200,
 height: 600,
 background: [0, 100, 200],
});

setGravity(800);

// Load a player sprite
loadSprite("tennisball", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fsport-tennis-ball&psig=AOvVaw33YvkCViTEeL55v9zJ9GSf&ust=1759512792359000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjtyYmGhpADFQAAAAAdAAAAABAV");

scene("main", ({ level } = { level: 0 }) => {

// --- The Player Character ---
const player = add([
 sprite("tennisball"),
 pos(100, 100),
 area({ scale: 0.7 }),
 body(),
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
 player.move(650, 0);
 }
});
});
go("main")
