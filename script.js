// Konfeti animasyonu için JavaScript kodu
function replay() {
    // Konfeti animasyonunu başlat
    startConfetti();
    setTimeout(stopConfetti, 3000); // 3 saniye sonra durdur
}

// Dilek tutma mesajı
function makeAWish() {
    alert('Dileğini tutmayı unutma!');
}

// Konfeti efektini oluştur
const confettiCanvas = document.getElementById('confetti-canvas');
const confettiContext = confettiCanvas.getContext('2d');

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettiParticles = [];
const colors = ['#ff6347', '#ffa500', '#ffd700', '#32cd32', '#1e90ff', '#6a5acd'];

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 5 + 2
        });
    }
}

function drawConfetti() {
    confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles.forEach(p => {
        confettiContext.fillStyle = p.color;
        confettiContext.fillRect(p.x, p.y, p.size, p.size);
    });
}

function updateConfetti() {
    confettiParticles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y > confettiCanvas.height) {
            p.y = -p.size;
            p.x = Math.random() * confettiCanvas.width;
        }
    });
}

let confettiInterval;

function startConfetti() {
    createConfetti();
    confettiInterval = setInterval(() => {
        drawConfetti();
        updateConfetti();
    }, 16);
}

function stopConfetti() {
    clearInterval(confettiInterval);
    confettiParticles = [];
    confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

// Konfeti animasyonu için daha önceki kod burada kalacak

// Dilek kutusunu açma
function openWishBox() {
    document.getElementById('wish-box').classList.remove('hidden');
}

// Dilek kutusunu kapatma
function closeWishBox() {
    document.getElementById('wish-box').classList.add('hidden');
}

// Dileği kaydet ve göster
function saveWish() {
    const wishInput = document.getElementById('wish-input').value;
    if (wishInput.trim() !== "") {
        const wishDisplay = document.getElementById('wish-display');
        wishDisplay.textContent = `Dileğin: "${wishInput}"`;
        wishDisplay.style.display = 'block';
        document.getElementById('wish-input').value = ""; // Metin kutusunu temizle
    } else {
        alert("Lütfen bir dilek yaz!");
    }
}
// Mumları üfleme
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => flame.classList.add('hidden'));
}

// Mumları yakma
function lightCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => flame.classList.remove('hidden'));
}

// Dilek kutusunu açma
function openWishBox() {
    document.getElementById('wish-box').classList.remove('hidden');
}

// Dilek kutusunu kapatma
function closeWishBox() {
    document.getElementById('wish-box').classList.add('hidden');
}

// Dileği kaydet ve göster
function saveWish() {
    const wishInput = document.getElementById('wish-input').value;
    if (wishInput.trim() !== "") {
        const wishDisplay = document.getElementById('wish-display');
        wishDisplay.textContent = `Dileğin: "${wishInput}"`;
        wishDisplay.style.display = 'block';
        document.getElementById('wish-input').value = ""; // Metin kutusunu temizle
    } else {
        alert("Lütfen bir dilek yaz!");
    }
}

// Konfeti animasyonları aynı kalıyor
// Kullanıcı cihazını tespit et
const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

