// Elements
const daysOfWeek = document.querySelectorAll('.days-of-week span');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');

// Days and Months Data
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// Zero Padding Function
function zeroPadding(num) {
    return num < 10 ? '0' + num : num;
}

// Update Clock Function
function clock() {
    const now = new Date();
    const day = now.getDay();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Update Time
    hoursEl.textContent = zeroPadding(hours);
    minutesEl.textContent = zeroPadding(minutes);
    secondsEl.textContent = zeroPadding(seconds);
    ampmEl.textContent = ampm;

    // Update Date
    yearEl.textContent = year;
    monthEl.textContent = months[month];
    dayEl.textContent = zeroPadding(date);

    // Update Active Day
    daysOfWeek.forEach(dayEl => dayEl.classList.remove('active'));
    daysOfWeek[day].classList.add('active');
}

// Run Clock Every Second
setInterval(clock, 1000);
clock();