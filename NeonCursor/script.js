const canvas = document.getElementById("neonCanvas");
const ctx = canvas.getContext("2d");

// Canvas boyutlarını ayarla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fare pozisyonunu saklayacak nesne
const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
};

// Etkileşimli noktalar
const particles = [];
const particleCount = 100; // İz uzunluğu

// Renk gradyanları
const colors = ["#ff007f", "#00ffff", "#ffffff"];

// Partikül sınıfı
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.velocityX = (Math.random() - 0.5) * 2;
        this.velocityY = (Math.random() - 0.5) * 2;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Partikülleri fare pozisyonuna doğru çek
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        this.x += dx * 0.02;
        this.y += dy * 0.02;

        // Küçülme efekti
        this.size *= 0.95;
    }
}

// Partikülleri başlat
function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
    }
}

// Partikül efektini sürekli güncelle
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
        if (particle.size <= 0.2) {
            particles.splice(index, 1);
        } else {
            particle.update();
            particle.draw();
        }
    });

    // Yeni partikül ekle
    particles.push(new Particle(mouse.x, mouse.y));

    requestAnimationFrame(animate);
}

// Fare hareketlerini takip et
window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Canvas boyutlarını güncelle
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Başlat
initParticles();
animate();