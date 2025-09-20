
const inventoryData = {
    portfolio: [
        { id: 'ecommerce', rarity: 'epic', icon: '🛒', title: 'E-Commerce', desc: 'Platform Toko Online Lengkap', projects: [
            { id: 'cos', title: 'E-Commerce', subtitle: 'Cirebon Online Store', desc: 'Platform marketplace lokal untuk mendukung UMKM lokal di Cirebon, dengan fitur multi-vendor dan pembayaran terintegrasi.', tech: 'React, Node.js, Express, MongoDB', liveDemoUrl: '#', codeUrl: '#' },
            { id: 'middleway', title: 'Marketplace', subtitle: 'Middle Way', desc: 'Platform yang menjadi jalan tengah antara penjual dan pembeli. Untuk menemukan properti dan produk impian dengan menghadirkan solusi yang adil dan transparan, sehingga kedua pihak dapat berinteraksi dengan lebih mudah dan saling menguntungkan.', tech: 'Vue.js, Firebase, Stripe API', liveDemoUrl: '#' }
        ]},
        { id: 'landing', rarity: 'rare', icon: '🌐', title: 'Landing Page', desc: 'Halaman Muka Responsif & Menarik', projects: [
            { id: 'hotel', title: 'Hotel', subtitle: 'Cirebon Hotel', desc: 'Landing page elegan untuk promosi dan pemesanan kamar hotel, dilengkapi galeri foto dan animasi transisi yang halus.', tech: 'HTML, CSS, GSAP', liveDemoUrl: '#' },
            { id: 'klinik', title: 'Klinik', subtitle: 'Klinik Aulia Hasanah Medika', desc: 'Website informatif untuk klinik, menampilkan layanan, jadwal dokter, dan artikel kesehatan dalam desain yang profesional.', tech: 'HTML, Bootstrap, PHP', liveDemoUrl: '#', codeUrl: '#' },
            { id: 'puskesmas', title: 'Puskesmas', subtitle: 'Puskesmas Bunder', desc: 'Portal web untuk puskesmas yang menyediakan informasi layanan, alur pendaftaran, dan berita kesehatan kepada masyarakat.', tech: 'HTML, TailwindCSS, JavaScript', codeUrl: '#' }
        ]},
        { id: 'webapp', rarity: 'legendary', icon: '📠', title: 'Web Application', desc: 'Aplikasi Bisnis Berbasis Web', projects: [
            { id: 'pos', title: 'Point of Sale', subtitle: 'Toko Athaya', desc: 'Aplikasi kasir (POS) berbasis web untuk manajemen penjualan, inventaris, dan laporan secara real-time. Dibangun untuk kecepatan dan kemudahan penggunaan.', tech: 'React, Express, Socket.IO', codeUrl: '#' },
            { id: 'admin-panel', title: 'Admin Panel', subtitle: 'Rekam Medik Elektronik', desc: 'Panel admin yang kuat dan intuitif untuk manajemen data, pengguna, dan konten, dilengkapi dengan visualisasi data interaktif.', tech: 'Vue.js, Laravel, MySQL', liveDemoUrl: '#' },
        ]},
        { id: 'others', rarity: 'uncommon', icon: '⚡', title: 'Lainnya', desc: 'Proyek Backend dan Portofolio', projects: [
            { id: 'api', title: 'API Server', subtitle: 'REST API Cepat & Aman', desc: 'Server RESTful API berkinerja tinggi, dilengkapi dengan otentikasi JWT dan dokumentasi API yang rinci.', tech: 'Node.js, Express, JWT', codeUrl: '#' },
            { id: 'portfolio-web', title: 'Personal Portfolio', subtitle: 'Website Portofolio Kreatif', desc: 'Portofolio interaktif dengan UI yang terinspirasi dari game (situs ini) untuk menampilkan proyek dan keahlian secara unik.', tech: 'HTML, CSS, Vanilla JavaScript', liveDemoUrl: '#', codeUrl: '#' }
        ]}
    ],
    skills: [
        { id: 'html', rarity: 'common', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />', title: 'HTML', level: 'Expert', proficiency: 95, usage: 98, desc: 'Bahasa markup standar untuk membuat halaman web.' },
        { id: 'css', rarity: 'common', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />', title: 'CSS', level: 'Expert', proficiency: 90, usage: 98, desc: 'Bahasa stylesheet untuk mendesain halaman web.' },
        { id: 'js', rarity: 'uncommon', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />', title: 'JavaScript', level: 'Advanced', proficiency: 85, usage: 95, desc: 'Bahasa pemrograman untuk interaktivitas web.' },
        { id: 'react', rarity: 'epic', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />', title: 'React', level: 'Advanced', proficiency: 88, usage: 80, desc: 'Pustaka JavaScript untuk membangun antarmuka pengguna.' },
        { id: 'node', rarity: 'rare', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="Node.js" />', title: 'Node.js', level: 'Advanced', proficiency: 82, usage: 75, desc: 'Lingkungan runtime JavaScript sisi server.' },
        { id: 'php', rarity: 'uncommon', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" width="36" height="36" alt="PHP" />', title: 'PHP', level: 'Intermediate', proficiency: 75, usage: 60, desc: 'Bahasa skrip sisi server untuk pengembangan web.' },
        { id: 'laravel', rarity: 'epic', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg" width="36" height="36" alt="Laravel" />', title: 'Laravel', level: 'Advanced', proficiency: 85, usage: 70, desc: 'Framework aplikasi web PHP yang elegan.' },
        { id: 'python', rarity: 'rare', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" />', title: 'Python', level: 'Intermediate', proficiency: 78, usage: 50, desc: 'Bahasa pemrograman serbaguna untuk backend, skrip, dan analisis data.' },
        { id: 'mysql', rarity: 'uncommon', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" />', title: 'MySQL', level: 'Advanced', proficiency: 85, usage: 75, desc: 'Sistem manajemen basis data relasional untuk menyimpan dan mengelola data.' },
        { id: 'git', rarity: 'common', icon: '<img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" />', title: 'Git', level: 'Expert', proficiency: 90, usage: 100, desc: 'Sistem kontrol versi terdistribusi untuk melacak perubahan kode.' }
    ],
    experience: [
        { id: 'fullstack', rarity: 'legendary', icon: '🚀', title: 'Fullstack', level: '4 Thn', proficiency: 90, usage: 95, desc: 'Pengembangan aplikasi end-to-end (Frontend & Backend).' },
        { id: 'mobile', rarity: 'epic', icon: '📱', title: 'Mobile Dev', level: '2 Thn', proficiency: 80, usage: 60, desc: 'Membangun aplikasi untuk perangkat seluler Android dan iOS.' },
        { id: 'ml', rarity: 'rare', icon: '🧠', title: 'Machine Learning', level: '1 Thn', proficiency: 65, usage: 30, desc: 'Implementasi model AI dasar dan integrasi API cerdas.' },
        { id: 'tweaking', rarity: 'rare', icon: '🤖', title: 'Android Tweaking', level: 'Hobi', proficiency: 75, usage: 20, desc: 'Modifikasi dan optimasi sistem operasi Android.' },
        { id: 'money-management', rarity: 'uncommon', icon: '💰', title: 'Money Management', level: 'Hobi', proficiency: 80, usage: 100, desc: 'Mengelola keuangan pribadi dan alokasi aset untuk tujuan jangka panjang.' },
        { id: 'investor', rarity: 'uncommon', icon: '📊', title: 'Investor Ritel', level: 'Hobi', proficiency: 70, usage: 40, desc: 'Analisis dan investasi di pasar saham dan aset digital secara mandiri.' }
    ],
};

const infoData = {
    education: { title: 'Education', body: '<ul><li>S1 - Teknik Informatika - STMIK IKMI Cirebon</li><li>Teknik Gambar Bangunan - SMKN 1 Jamblang</li></ul>' },
    experience: { title: 'Work Experience', body: '<ul><li>4+ Years Development Experience</li><li>50+ Completed Projects</li><li>Agile/Scrum Methodology</li></ul>' },
    achievements: { title: 'Achievements & Awards', body: '<ul><li>Best Developer Award 2023</li><li>Hackathon Winner</li><li>Open Source Contributor</li></ul>' },
    hobbies: { title: 'Hobbies & Interests', body: '<ul><li>Game Development</li><li>Photography</li><li>Tech Blogging</li></ul>' },
    specialty: { title: 'Main Specialization', body: '<ul><li>Full Stack Development</li><li>Cloud Architecture</li><li>Performance Optimization</li></ul>' }
};

const profileStats = [
    { key: 'CODENAME', value: 'Rahidoct' },
    { key: 'CLASS', value: 'Full-Stack Developer, Mobile Developer, Machine Learning Developer' },
    { key: 'STATUS', value: 'Available for Mission' },
    { key: 'LOCATION', value: 'Cirebon, Indonesia' },
    { key: 'SPECIALTY', value: 'Immersive & Futuristic Interfaces' }
];

let audioContext;
let audioEnabled = false;

document.addEventListener('DOMContentLoaded', () => {
    populateInventory();
    setupEventListeners();
    showSection('home', document.querySelector('.nav-tab'));
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        animateHealthBar();
        createParticles();
        initAudio();
    }, 1500);
});

function typewriter(element, text, callback) {
    let i = 0;
    element.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    element.appendChild(cursor);

    function type() {
        if (i < text.length) {
            cursor.before(text.charAt(i));
            i++;
            setTimeout(type, 35);
        } else {
            cursor.remove();
            if (callback) callback();
        }
    }
    type();
}

function animateProfileStats() {
    const list = document.getElementById('profile-stats-list');
    if (!list || list.hasAttribute('data-animated')) return; 

    list.innerHTML = '';
    list.setAttribute('data-animated', 'true');

    profileStats.forEach((stat, index) => {
        const listItem = document.createElement('li');
        const keySpan = document.createElement('span');
        keySpan.className = 'stat-key';
        keySpan.textContent = `${stat.key}:`;
        const valueSpan = document.createElement('span');
        valueSpan.className = 'stat-value';
        listItem.appendChild(keySpan);
        listItem.appendChild(valueSpan);
        list.appendChild(listItem);

        setTimeout(() => {
            listItem.classList.add('visible');
            setTimeout(() => {
                typewriter(valueSpan, stat.value);
            }, 500);
        }, index * 600);
    });
}

function populateInventory() {
    const grid = document.getElementById('inventoryGrid');
    if (!grid) return;
    let gridHTML = '';
    const createSlotHTML = (item, type) => `
        <button class="inventory-slot slot-rarity-${item.rarity}" data-type="${type}" data-id="${item.id}">
            <div class="slot-icon">${item.icon}</div>
            <div class="slot-title">${item.title}</div>
            <div class="tooltip">${item.desc || item.title}</div>
        </button>`;
    
    ['portfolio', 'skills', 'experience'].forEach(type => {
        inventoryData[type]?.forEach(item => gridHTML += createSlotHTML(item, type));
    });
    for(let i=0; i<4; i++) gridHTML += '<div class="inventory-slot slot-locked"><div class="slot-icon">🔒</div></div>';
    grid.innerHTML = gridHTML;
}

function setupEventListeners() {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const applyTheme = (theme) => {
        document.documentElement.classList.toggle('light-theme', theme === 'light');
        themeIcon.classList.toggle('fa-moon', theme === 'light');
        themeIcon.classList.toggle('fa-sun', theme !== 'light');
        localStorage.setItem('theme', theme);
    };
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    themeToggleBtn.addEventListener('click', () => {
        playSound('select');
        applyTheme(document.documentElement.classList.contains('light-theme') ? 'dark' : 'light');
    });

    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => showSection(e.currentTarget.textContent.toLowerCase(), e.currentTarget));
    });

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const inventoryContainer = document.querySelector('.inventory-container');
    hamburgerBtn.addEventListener('click', () => {
        inventoryContainer.classList.toggle('nav-active');
        hamburgerBtn.classList.toggle('open');
        playSound('select');
    });
    
    document.addEventListener('click', (e) => {
        const inventorySlot = e.target.closest('.inventory-slot:not(.slot-locked)');
        const equipmentSlot = e.target.closest('.equipment-slot');
        const donationOption = e.target.closest('.donate-option');
        const connectionPort = e.target.closest('.connection-port[data-copy]');

        if (inventorySlot) {
            const { type, id } = inventorySlot.dataset;
            if (type === 'portfolio') showProjectCard(id, 0);
            else if (type === 'skills' || type === 'experience') showSkillCard(inventorySlot);
        } else if (equipmentSlot) {
            showInfoModal(equipmentSlot.dataset.infoType);
        } else if (donationOption) {
            selectDonation(donationOption.dataset.donationType);
        } else if (connectionPort) {
            e.preventDefault();
            const textToCopy = connectionPort.dataset.copy;
            const type = connectionPort.dataset.type;
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`${type} copied to clipboard!`);
                playSound('select');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                showToast('Failed to copy!');
            });
        }
    });

    document.querySelectorAll('.inventory-slot:not(.slot-locked), .equipment-slot, .nav-tab, .donate-option, .connection-port').forEach(el => {
        el.addEventListener('mouseenter', () => playSound('hover'));
    });

    document.getElementById('infoModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
    document.getElementById('donateModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeDonateModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeDonateModal(); }});
}

function showSection(sectionName, clickedTab) {
    playSound('select');
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    if(clickedTab) clickedTab.classList.add('active');

    document.querySelectorAll('.content-section').forEach(section => section.classList.toggle('active', section.id === `${sectionName}-section`));
    
    const inventoryGrid = document.getElementById('inventoryGrid');
    const isInventoryVisible = ['portfolio', 'skills', 'experience'].includes(sectionName);
    inventoryGrid.style.display = isInventoryVisible ? 'grid' : 'none';
    
    if(isInventoryVisible) {
        document.querySelectorAll('#inventoryGrid .inventory-slot').forEach(slot => {
            slot.style.display = (slot.dataset.type === sectionName || slot.classList.contains('slot-locked')) ? 'flex' : 'none';
        });
    }

    if (sectionName === 'home') {
        setTimeout(animateProfileStats, 100); 
    }

    const inventoryContainer = document.querySelector('.inventory-container');
    if (inventoryContainer.classList.contains('nav-active')) {
        inventoryContainer.classList.remove('nav-active');
        document.getElementById('hamburger-btn').classList.remove('open');
    }
}

function showInfoModal(type) {
    const data = infoData[type];
    if (!data) return;
    playSound('select');

    const modal = document.getElementById('infoModal');
    const wrapper = document.getElementById('modalContentWrapper');
    const template = document.getElementById('template-info-modal');
    
    wrapper.innerHTML = '';
    wrapper.appendChild(template.content.cloneNode(true));

    wrapper.querySelector('#infoModalTitle').textContent = data.title;
    wrapper.querySelector('#infoModalBody').innerHTML = data.body;
    
    modal.classList.remove('card-view');
    modal.classList.add('active');
}

function showProjectCard(categoryId, projectIndex) {
    const category = inventoryData.portfolio.find(cat => cat.id === categoryId);
    if (!category || !category.projects || !category.projects[projectIndex]) return;

    playSound('select');
    const project = category.projects[projectIndex];
    
    const modal = document.getElementById('infoModal');
    const wrapper = document.getElementById('modalContentWrapper');
    const template = document.getElementById('template-project-card');
    
    wrapper.innerHTML = '';
    wrapper.appendChild(template.content.cloneNode(true));

    const projectCard = wrapper.querySelector('.project-card');
    projectCard.dataset.rarity = category.rarity;

    wrapper.querySelector('.project-card-name').textContent = project.title;
    wrapper.querySelector('.project-card-portrait').innerHTML = `${category.icon}<div class="project-card-category-badge">${category.title}</div>`;
    wrapper.querySelector('.project-card-subtitle').textContent = project.subtitle;
    
    const techContainer = wrapper.querySelector('.project-card-tech span');
    techContainer.innerHTML = ''; 
    const technologies = project.tech.split(',').map(t => t.trim());
    technologies.forEach(techName => {
        if (techName) {
            const badge = document.createElement('span');
            badge.className = 'tech-badge';
            badge.textContent = techName;
            techContainer.appendChild(badge);
        }
    });

    wrapper.querySelector('.project-card-description-text').textContent = project.desc;

    const actionsContainer = wrapper.querySelector('.project-card-actions');
    actionsContainer.innerHTML = ''; 
    if (project.liveDemoUrl && project.liveDemoUrl !=='#') {
        actionsContainer.innerHTML += `<a href="${project.liveDemoUrl}" target="_blank" rel="noopener noreferrer" class="project-action-btn"><i class="fas fa-eye"></i> Live Demo</a>`;
    }
    if (project.codeUrl && project.codeUrl !== '#') {
        actionsContainer.innerHTML += `<a href="${project.codeUrl}" target="_blank" rel="noopener noreferrer" class="project-action-btn"><i class="fas fa-code"></i> View Code</a>`;
    }

    const prevButton = wrapper.querySelector('.prev-project');
    const nextButton = wrapper.querySelector('.next-project');
    
    prevButton.style.display = category.projects.length > 1 ? 'block' : 'none';
    nextButton.style.display = category.projects.length > 1 ? 'block' : 'none';

    prevButton.disabled = projectIndex === 0;
    nextButton.disabled = projectIndex === category.projects.length - 1;

    prevButton.onclick = () => showProjectCard(categoryId, projectIndex - 1);
    nextButton.onclick = () => showProjectCard(categoryId, projectIndex + 1);
    
    modal.classList.add('card-view', 'active');
}

function showSkillCard(slotElement) {
    const { type, id } = slotElement.dataset;
    const itemData = inventoryData[type]?.find(d => d.id === id);
    if (!itemData) return;
    playSound('select');

    const modal = document.getElementById('infoModal');
    const wrapper = document.getElementById('modalContentWrapper');
    const template = document.getElementById('template-skill-card');
    wrapper.innerHTML = '';
    wrapper.appendChild(template.content.cloneNode(true));

    const skillCard = wrapper.querySelector('.skill-card');
    skillCard.dataset.rarity = itemData.rarity;

    wrapper.querySelector('.skill-card-name').textContent = itemData.title;
    wrapper.querySelector('.skill-card-sprite').innerHTML = itemData.icon;
    wrapper.querySelector('.skill-card-level-badge').textContent = itemData.level;
    wrapper.querySelector('.skill-card-description-text').textContent = itemData.desc;
    wrapper.querySelector('.proficiency-fill + .skill-card-stat-text').textContent = `${itemData.proficiency}%`;
    wrapper.querySelector('.usage-fill + .skill-card-stat-text').textContent = `${itemData.usage}%`;

    modal.classList.add('card-view', 'active');

    setTimeout(() => {
        wrapper.querySelector('.proficiency-fill').style.width = `${itemData.proficiency}%`;
        wrapper.querySelector('.usage-fill').style.width = `${itemData.usage}%`;
    }, 50);
}

function closeModal() {
    playSound('hover');
    const modal = document.getElementById('infoModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.remove('card-view');
        document.getElementById('modalContentWrapper').innerHTML = '';
    }, 300);
}

function showDonateModal(e) {
    e.preventDefault();
    playSound('select');
    document.getElementById('donateModal').classList.add('active');
    document.getElementById('donateDetails').style.display = 'none';
}

function closeDonateModal() {
    playSound('hover');
    document.getElementById('donateModal').classList.remove('active');
}

function selectDonation(type) {
    playSound('select');
    const map = {
        'paypal': { link: 'https://paypal.me/rahidoct', text: 'Anda akan diarahkan ke PayPal.' },
        'trakteer': { link: 'https://trakteer.id/rahidoct', text: 'Anda akan diarahkan ke Trakteer.' },
        'saweria': { link: 'https://saweria.co/rahidoct', text: 'Anda akan diarahkan ke Saweria.' }
    };
    if (map[type]) {
        document.getElementById('donateMessage').textContent = `Terima kasih! ${map[type].text}`;
        document.getElementById('donateLinkBtn').onclick = () => window.open(map[type].link, '_blank');
        document.getElementById('donateDetails').style.display = 'block';
    }
}

function initAudio() {
    try {
        audioContext = new(window.AudioContext || window.webkitAudioContext)();
        document.getElementById('audioToggle').addEventListener('click', toggleAudio);
    } catch (e) { document.getElementById('audioToggle').style.display = 'none'; }
}
function toggleAudio() {
    if (audioContext.state === 'suspended') audioContext.resume();
    audioEnabled = !audioEnabled;
    const icon = document.querySelector('#audioToggle i');
    icon.classList.toggle('fa-volume-mute', !audioEnabled);
    icon.classList.toggle('fa-volume-up', audioEnabled);
    if(audioEnabled) playSound('select');
    showToast(`Audio ${audioEnabled ? 'enabled' : 'disabled'}`);
}

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
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'hover':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(391.99, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('#toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    let particlesHTML = '';
    for (let i = 0; i < 30; i++) {
        const size = Math.random() * 4 + 1;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        const style = `width:${size}px; height:${size}px; left:${Math.random()*100}vw; top:${Math.random()*100}vh; background: var(--text-accent); animation-delay:${delay}s; animation-duration:${duration}s;`;
        particlesHTML += `<div class="particle" style="${style}"></div>`;
    }
    container.innerHTML = particlesHTML;
}
function animateHealthBar() {
    const bar = document.querySelector('.health-fill');
    if(bar) setTimeout(() => bar.style.width = bar.dataset.width, 500);
}