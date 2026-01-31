
// 获取canvas元素和上下文
const canvas = document.getElementById('animated-bg');
const ctx = canvas.getContext('2d');

// 设置canvas尺寸为窗口大小
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// 初始调整尺寸
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 粒子数组
let particles = [];

// 粒子类
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsla(${Math.random() * 60 + 150}, 100%, 70%, ${Math.random() * 0.5 + 0.2})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 边界检测
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // 添加发光效果
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
    }
}

// 创建粒子
function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// 连接粒子
function connectParticles() {
    const maxDistance = 100;

    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
                ctx.strokeStyle = `hsla(180, 100%, 70%, ${0.2 * (1 - distance / maxDistance)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

// 动画循环
function animate() {
    // 清除画布，使用半透明填充创建拖尾效果
    ctx.fillStyle = 'rgba(5, 25, 55, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制粒子
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // 连接粒子
    connectParticles();

    // 继续动画
    requestAnimationFrame(animate);
}

// 初始化并开始动画
initParticles();
animate();

// 窗口调整时重新初始化粒子
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

// 添加鼠标互动
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 鼠标附近的粒子被推开
    particles.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            particle.x -= dx * 0.02;
            particle.y -= dy * 0.02;
        }
    });
});

// 添加点击效果
canvas.addEventListener('click', (e) => {
    // 在点击位置创建爆炸效果
    for (let i = 0; i < 20; i++) {
        const particle = new Particle();
        particle.x = e.clientX;
        particle.y = e.clientY;
        particle.speedX = Math.random() * 4 - 2;
        particle.speedY = Math.random() * 4 - 2;
        particle.size = Math.random() * 4 + 1;
        particle.color = `hsla(${Math.random() * 60 + 180}, 100%, 70%, 0.8)`;
        particles.push(particle);
    }

    // 限制粒子数量
    if (particles.length > 500) {
        particles.splice(0, particles.length - 400);
    }
});