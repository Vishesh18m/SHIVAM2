
for (let i = 0; i < 300; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    document.body.appendChild(star);
}

// Shooting stars
function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = Math.random() * 40 + "vh";
    star.style.left = Math.random() * 60 + "vw";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

setInterval(createShootingStar, 4000);
// Typing text
const text = "Dear Minakshi,\nLook up — even the stars are celebrating you tonight ✨\nYou’re the wish I’d never stop making 🌠\nEvery light in the sky whispers your name softly 💞\nHappy Birthday once again ❤ — From Shivam 💖";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(type, 60);
    }
}
setTimeout(type, 2500);

// Falling hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.background = hsl(`${Math.random() * 360}, 100%, 80%`);
    heart.style.animation = fall(`${4 + Math.random() * 4}s linear forwards`);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 500);

// Fireworks
function createFirework() {
    const fireworkCount = 12;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight / 2;
    for (let i = 0; i < fireworkCount; i++) {
        const firework = document.createElement('div');
        firework.style.position = 'absolute';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.width = '5px';
        firework.style.height = '5px';
        const color = hsl(`${Math.random() * 360}, 100%, 70%`);
        firework.style.background = color;
        firework.style.borderRadius = '50%';
        firework.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
        document.body.appendChild(firework);

        let angle = (i / fireworkCount) * 2 * Math.PI;
        const interval = setInterval(() => {
            firework.style.transform = translate(`${Math.cos(angle) * 50}px, ${Math.sin(angle) * 50}px`);
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            firework.remove();
        }, 1000);
    }
}
setInterval(createFirework, 1500);
