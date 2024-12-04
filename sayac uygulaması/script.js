// HTML elemanlarına eriş
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Sayaç değeri
let count = 0;

// Arttırma butonuna tıklama işlemi
increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Azaltma butonuna tıklama işlemi
decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

// Sıfırlama butonuna tıklama işlemi
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// Sayacı güncelleme fonksiyonu
function updateCounter() {
    counter.textContent = count;
    // Renk değiştirme (isteğe bağlı)
    if (count > 0) {
        counter.style.color = '#28a745';
    } else if (count < 0) {
        counter.style.color = '#dc3545';
    } else {
        counter.style.color = '#007BFF';
    }
}