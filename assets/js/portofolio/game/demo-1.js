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

// Initialize audio
function initAudio() {
    try {
        audioContext = new(window.AudioContext || window.webkitAudioContext)();
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

    switch (type) {
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
    }
}

// Hamburger Menu Logic
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
if (navTabs && inventoryContainer) {
    navTabs.addEventListener('click', function(e) {
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
    if (!particlesContainer) return;
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
        particle.style.cssText = `width: ${size}px; height: ${size}px; left: ${posX}vw; top: ${posY}vh; background: ${color}; animation-delay: ${delay}s; animation-duration: ${duration}s;`;
        particlesContainer.appendChild(particle);
    }
}

// Health Bar Animation
function animateHealthBar() {
    const healthBar = document.querySelector('.health-fill');
    if (!healthBar) return;
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
        slot.style.display = (slot.classList.contains('slot-locked') || slotType === category) ? 'flex' : 'none';
    });
}

// ================================
// MODAL & DONATION LOGIC 
// ================================
let initialModalContentHTML = '';
let donateLink = '';

function closeModal() {
    const infoModal = document.getElementById('infoModal');
    if (!infoModal.classList.contains('active')) return;

    playSound('hover');
    infoModal.classList.remove('active');

    setTimeout(() => {
        infoModal.classList.remove('skill-card-view');
        const modalContentWrapper = document.getElementById('modalContentWrapper');
        if (modalContentWrapper) {
            modalContentWrapper.innerHTML = initialModalContentHTML;
        }
    }, 300);
}

function closeDonateModal() {
    playSound('hover');
    document.getElementById('donateModal').classList.remove('active');
}

function showModalFromTemplate(templateId) {
    const template = document.getElementById(templateId);
    if (!template) {
        console.error(`Template with id ${templateId} not found.`);
        return;
    }
    playSound('select');

    const modalContentWrapper = document.getElementById('modalContentWrapper');
    const templateContent = template.content.cloneNode(true);

    modalContentWrapper.innerHTML = '';
    modalContentWrapper.appendChild(templateContent);

    const infoModal = document.getElementById('infoModal');
    infoModal.classList.add('active');
    infoModal.classList.remove('skill-card-view');
}

function showSkillCard(slotElement) {
    const template = document.getElementById('template-skill-card');
    if (!template) return;
    playSound('select');

    const cardContent = template.content.cloneNode(true);
    const data = slotElement.dataset;

    const cardData = {
        name: slotElement.querySelector('.slot-title').textContent,
        icon: slotElement.querySelector('.slot-icon').innerHTML,
        level: data.level || 'N/A',
        proficiency: data.proficiency || '0',
        usage: data.usage || '0',
        description: slotElement.querySelector('.tooltip').textContent
    };

    cardContent.querySelector('.skill-card-name').textContent = cardData.name;
    cardContent.querySelector('.skill-card-sprite').innerHTML = cardData.icon;
    cardContent.querySelector('.skill-card-level-badge').textContent = cardData.level;
    cardContent.querySelector('.skill-card-description-text').textContent = cardData.description;
    cardContent.querySelector('.proficiency-fill + .skill-card-stat-text').textContent = `${cardData.proficiency}%`;
    cardContent.querySelector('.usage-fill + .skill-card-stat-text').textContent = `${cardData.usage}%`;

    const infoModal = document.getElementById('infoModal');
    const modalContentWrapper = document.getElementById('modalContentWrapper');

    modalContentWrapper.innerHTML = '';
    modalContentWrapper.appendChild(cardContent);

    infoModal.classList.add('skill-card-view', 'active');

    setTimeout(() => {
        const modalInDom = document.querySelector('#infoModal.active');
        if (modalInDom) {
            modalInDom.querySelector('.proficiency-fill').style.width = `${cardData.proficiency}%`;
            modalInDom.querySelector('.usage-fill').style.width = `${cardData.usage}%`;
        }
    }, 200);
}

function showDonateModal(e) {
    if (e) e.preventDefault();
    document.getElementById('donateModal').classList.add('active');
    document.getElementById('donateDetails').style.display = 'none';
    playSound('select');
}

function selectDonation(type) {
    const donateDetails = document.getElementById('donateDetails');
    const donateMessage = document.getElementById('donateMessage');
    const donateLinkBtn = document.getElementById('donateLinkBtn');

    const donationMap = {
        'paypal': { link: 'https://paypal.me/rahidoct', text: 'Anda akan diarahkan ke PayPal.' },
        'trakteer': { link: 'https://trakteer.id/rahidoct', text: 'Anda akan diarahkan ke Trakteer.' },
        'saweria': { link: 'https://saweria.co/rahidoct', text: 'Anda akan diarahkan ke Saweria.' }
    };

    if (donationMap[type]) {
        donateLink = donationMap[type].link;
        donateMessage.textContent = `Terima kasih! ${donationMap[type].text}`;
        donateLinkBtn.onclick = () => window.open(donateLink, '_blank');
        donateDetails.style.display = 'block';
        playSound('select');
    }
}

// ================================
// EVENT LISTENERS (DOM Ready)
// ================================
document.addEventListener('DOMContentLoaded', function() {

    const modalContentWrapper = document.getElementById('modalContentWrapper');
    if (modalContentWrapper) {
        initialModalContentHTML = modalContentWrapper.innerHTML;
    }

    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        const applyTheme = (theme) => {
            document.documentElement.classList.toggle('light-theme', theme === 'light');
            themeIcon.classList.toggle('fa-moon', theme === 'light');
            themeIcon.classList.toggle('fa-sun', theme !== 'light');
            localStorage.setItem('theme', theme);
        };

        applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
        themeToggleBtn.addEventListener('click', () => {
            playSound('select');
            const currentTheme = document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
            applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    document.querySelectorAll('.inventory-slot:not(.slot-locked), .equipment-slot').forEach(slot => {
        slot.addEventListener('mouseenter', () => playSound('hover'));
    });

    // =========================================================
    // EVENT DELEGATION for the entire document
    document.addEventListener('click', (e) => {
        // Kita menggunakan e.target.closest() untuk menemukan elemen yang kita inginkan
        const inventorySlot = e.target.closest('.inventory-slot');
        const equipmentSlot = e.target.closest('.equipment-slot');
        const donationOption = e.target.closest('.donate-option');

        if (inventorySlot && !inventorySlot.classList.contains('slot-locked')) {
            const type = inventorySlot.dataset.type;
            if (type === 'portfolio') {
                showModalFromTemplate(`template-project-${inventorySlot.dataset.projectType}`);
            } else if (type === 'skills' || type === 'experience') {
                showSkillCard(inventorySlot);
            }
        }

        if (equipmentSlot) {
            showModalFromTemplate(`template-info-${equipmentSlot.dataset.infoType}`);
        }

        if (donationOption) {
            selectDonation(donationOption.dataset.donationType);
        }
    });

    document.getElementById('infoModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    document.getElementById('donateModal').addEventListener('click', function(e) {
        if (e.target === this) closeDonateModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeDonateModal();
        }
    });

    filterInventory('portfolio');
});