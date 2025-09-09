// Audio context for sound effects
let audioContext;
let audioEnabled = false;

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        animateHealthBar();
        createParticles();
        initAudio();
    }, 1500);
});

// ================================
// LOGIKA THEME TOGGLE
// ================================
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector('i');

    // Cek tema tersimpan di localStorage atau preferensi sistem
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Fungsi untuk menerapkan tema
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.documentElement.classList.add('light-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        }
    };

    // Terapkan tema saat halaman dimuat
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Event listener untuk tombol toggle
    themeToggleBtn.addEventListener('click', () => {
        playSound('select'); // Memakai ulang sound effect yang ada
        const currentIsLight = document.documentElement.classList.contains('light-theme');
        applyTheme(currentIsLight ? 'dark' : 'light');
    });
}

// Initialize audio
function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        document.getElementById('audioToggle').addEventListener('click', toggleAudio);
    } catch (e) {
        console.log('Web Audio API is not supported in this browser');
        document.getElementById('audioToggle').style.display = 'none';
    }
}

// Toggle audio
function toggleAudio() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    audioEnabled = !audioEnabled;
    const icon = document.querySelector('#audioToggle i');
    
    if (audioEnabled) {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
        playSound('select');
        showToast('Audio enabled');
    } else {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
        showToast('Audio disabled');
    }
}

// Play sound effect
function playSound(type) {
    if (!audioEnabled || !audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'select':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'hover':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(391.99, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'confirm':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
    }
}

// PENAMBAHAN: Logika untuk Hamburger Menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const inventoryContainer = document.querySelector('.inventory-container');
const navTabs = document.querySelector('.nav-tabs');

if (hamburgerBtn && inventoryContainer) {
    hamburgerBtn.addEventListener('click', function() {
        inventoryContainer.classList.toggle('nav-active');
        this.classList.toggle('open');
        playSound('select');
    });
}

// Menutup menu saat salah satu link navigasi diklik (penting untuk UX mobile)
if (navTabs && inventoryContainer) {
    navTabs.addEventListener('click', function(e) {
        // Cek jika yang diklik adalah .nav-tab dan menu sedang aktif
        if (e.target.classList.contains('nav-tab') && inventoryContainer.classList.contains('nav-active')) {
            inventoryContainer.classList.remove('nav-active');
            hamburgerBtn.classList.remove('open');
        }
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        const color = `rgba(${Math.floor(Math.random() * 56) + 100}, ${Math.floor(Math.random() * 86) + 130}, ${Math.floor(Math.random() * 206) + 50}, ${Math.random() * 0.5 + 0.3})`;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.top = `${posY}vh`;
        particle.style.background = color;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Health Bar Animation
function animateHealthBar() {
    const healthBar = document.querySelector('.health-fill');
    const width = healthBar.getAttribute('data-width');
    setTimeout(() => {
        healthBar.style.width = width;
    }, 500);
}

// Navigation
function showSection(sectionName, clickedTab) {
    playSound('select');
    
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');

    const homeSection = document.getElementById('home-section');
    const contactSection = document.getElementById('contact-section');
    const inventoryGrid = document.getElementById('inventoryGrid');
    
    homeSection.classList.remove('active');
    contactSection.classList.remove('active');
    inventoryGrid.style.display = 'none';

    if (sectionName === 'home') {
        homeSection.classList.add('active');
    } else if (sectionName === 'contact') {
        contactSection.classList.add('active');
    } else {
        inventoryGrid.style.display = 'grid';
        filterInventory(sectionName);
    }
}

// Filter inventory items
function filterInventory(category) {
    const slots = document.querySelectorAll('#inventoryGrid .inventory-slot');
    
    slots.forEach(slot => {
        const slotType = slot.getAttribute('data-type');
        if (slot.classList.contains('slot-locked') || slotType === category) {
            slot.style.display = 'flex';
        } else {
            slot.style.display = 'none';
        }
    });
}

// Show info in modal
function showInfo(type) {
    playSound('select');
    const infoMap = {
        'education': { title: 'EDUCATION & CERTIFICATIONS', content: '<ul><li>S1 Informatika - Universitas Teknologi</li><li>AWS Certified Developer</li><li>Google Cloud Professional</li></ul>' },
        'experience': { title: 'WORK EXPERIENCE', content: '<ul><li>4+ Years Development Experience</li><li>50+ Completed Projects</li><li>Agile/Scrum Methodology</li></ul>' },
        'achievements': { title: 'ACHIEVEMENTS & AWARDS', content: '<ul><li>Best Developer Award 2023</li><li>Hackathon Winner</li><li>Open Source Contributor</li></ul>' },
        'hobbies': { title: 'HOBBIES & INTERESTS', content: '<ul><li>Game Development</li><li>Photography</li><li>Tech Blogging</li></ul>' },
        'specialty': { title: 'MAIN SPECIALIZATION', content: '<ul><li>Full Stack Development</li><li>Cloud Architecture</li><li>Performance Optimization</li></ul>' }
    };
    
    if (infoMap[type]) {
        document.getElementById('modalTitle').innerHTML = infoMap[type].title;
        document.getElementById('modalBody').innerHTML = infoMap[type].content;
        document.getElementById('infoModal').classList.add('active');
    }
}

// Close modal
function closeModal() {
    playSound('hover');
    document.getElementById('infoModal').classList.remove('active');
}

// ================================
// FUNGSI DONASI
// ================================
function showDonateModal(e) {
    if (e) e.preventDefault();
    document.getElementById('donateModal').classList.add('active');
    document.getElementById('donateDetails').style.display = 'none';
    playSound('select');
}

function closeDonateModal() {
    document.getElementById('donateModal').classList.remove('active');
    playSound('select');
}

function selectDonation(type) {
    const donateDetails = document.getElementById('donateDetails');
    const donateMessage = document.getElementById('donateMessage');
    
    switch(type) {
        case 'paypal':
            donateLink = 'https://paypal.me/rahidoct';
            donateMessage.textContent = 'Terima kasih! Anda akan diarahkan ke PayPal untuk melanjutkan donasi.';
            break;
        case 'trakteer':
            donateLink = 'https://trakteer.id/rahidoct';
            donateMessage.textContent = 'Terima kasih! Anda akan diarahkan ke Trakteer untuk melanjutkan donasi.';
            break;
        case 'saweria':
            donateLink = 'https://saweria.co/rahidoct';
            donateMessage.textContent = 'Terima kasih! Anda akan diarahkan ke Saweria untuk melanjutkan donasi.';
            break;
    }
    
    donateDetails.style.display = 'block';
    playSound('select');
}

// Show project details in modal
function showProjectDetails(projectType) {
    playSound('select');
    const projectMap = {
        'landing': { title: 'LANDING PAGE', content: '<p>Membuat halaman muka yang menarik secara visual dengan fokus pada konversi dan pengalaman pengguna.</p><ul><li>Desain Responsif</li><li>Animasi Halus</li><li>Optimasi Kecepatan</li></ul>' },
        'ecommerce': { title: 'E-COMMERCE PLATFORM', content: '<p>Solusi e-commerce lengkap dengan React, Node.js, dan MongoDB.</p><ul><li>Otentikasi Pengguna</li><li>Integrasi Gerbang Pembayaran</li><li>Dasbor Admin</li></ul>' },
        'admin': { title: 'ADMIN PANEL', content: '<p>Panel admin yang kuat untuk manajemen data, pengguna, dan konten.</p><ul><li>Visualisasi Data</li><li>Manajemen CRUD</li><li>Hak Akses Pengguna</li></ul>' },
        'pos': { title: 'POINT OF SALE (POS)', content: '<p>Aplikasi kasir berbasis web untuk manajemen penjualan, inventaris, dan laporan.</p><ul><li>Transaksi Real-time</li><li>Manajemen Stok</li><li>Laporan Penjualan</li></ul>' },
        'portfolio': { title: 'WEBSITE PORTFOLIO', content: '<p>Portofolio interaktif dengan UI yang terinspirasi dari game.</p><ul><li>Animasi Kustom</li><li>Desain Responsif</li><li>SEO Friendly</li></ul>' },
        'api': { title: 'API SERVER', content: '<p>Server RESTful API berkinerja tinggi menggunakan Express.js.</p><ul><li>Otentikasi Berbasis JWT</li><li>Operasi CRUD</li><li>Dokumentasi API Rinci</li></ul>' }
    };
    
    if (projectMap[projectType]) {
        document.getElementById('modalTitle').innerHTML = projectMap[projectType].title;
        document.getElementById('modalBody').innerHTML = projectMap[projectType].content;
        document.getElementById('infoModal').classList.add('active');
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const tabs = Array.from(document.querySelectorAll('.nav-tab'));
    const currentActive = document.querySelector('.nav-tab.active');
    const currentIndex = tabs.indexOf(currentActive);
    
    if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
        tabs[currentIndex + 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        tabs[currentIndex - 1].click();
    } else if (e.key === 'Escape') {
        closeModal();
    }
});

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.inventory-slot:not(.slot-locked)').forEach(slot => {
        slot.addEventListener('mouseenter', () => playSound('hover'));
    });
    
    document.querySelectorAll('.inventory-slot[data-type="skills"], .inventory-slot[data-type="experience"]').forEach(slot => {
        slot.addEventListener('click', function() {
            playSound('select');

            const title = this.querySelector('.slot-title').textContent;
            const tooltip = this.querySelector('.tooltip')?.textContent || 'No description available';
            document.getElementById('modalTitle').innerHTML = title.toUpperCase();
            document.getElementById('modalBody').innerHTML = `<p>${tooltip}</p>`;
            document.getElementById('infoModal').classList.add('active');
        });
    });
});

// Close modal on outside click
document.getElementById('infoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});