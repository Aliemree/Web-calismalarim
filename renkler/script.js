// Renk üret butonuna eriş
const generateBtn = document.getElementById('generateBtn');

// Renk kodunun gösterileceği alan
const colorCode = document.getElementById('colorCode');

// Rastgele renk üretme fonksiyonu
function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    document.body.style.backgroundColor = randomColor; // Arka plan rengini değiştir
    colorCode.textContent = randomColor; // Renk kodunu göster
}

// Butona tıklandığında fonksiyonu çalıştır
generateBtn.addEventListener('click', generateRandomColor);