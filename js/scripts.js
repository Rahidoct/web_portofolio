document.addEventListener('DOMContentLoaded', function() {

    const digitalRainEffect = {
        canvas: null,
        ctx: null,
        columns: 0,
        rainDrops: [],
        fontSize: 16,
        currentBgFade: '',
        currentTextColor: '',

        init: function() {
            this.canvas = document.getElementById('digital-rain-canvas');
            if (!this.canvas) return;

            this.ctx = this.canvas.getContext('2d');
            this.setupDimensions();
            this.setupRainDrops();
            this.updateColors();
            
            setInterval(() => this.draw(), 40);

            window.addEventListener('resize', () => {
                this.setupDimensions();
                this.setupRainDrops();
                // Perbarui warna juga saat resize jika tema OS berubah
                this.updateColors(); 
            });
        },

        setupDimensions: function() {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.columns = Math.floor(this.canvas.width / this.fontSize);
        },

        setupRainDrops: function() {
            this.rainDrops = [];
            for (let i = 0; i < this.columns; i++) {
                const goingDown = Math.random() > 0.5;
                this.rainDrops[i] = {
                    y: goingDown ? 1 : Math.floor(this.canvas.height / this.fontSize),
                    direction: goingDown ? 1 : -1
                };
            }
        },

        updateColors: function() {
            const rootStyles = getComputedStyle(document.documentElement);
            this.currentBgFade = rootStyles.getPropertyValue('--canvas-bg-fade').trim();
            this.currentTextColor = rootStyles.getPropertyValue('--canvas-text-color').trim();
        },

        draw: function() {
            this.ctx.fillStyle = this.currentBgFade;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = this.currentTextColor;
            this.ctx.font = this.fontSize + 'px monospace';

            for (let i = 0; i < this.rainDrops.length; i++) {
                const drop = this.rainDrops[i];
                if (!drop) continue;

                const text = '01'.charAt(Math.floor(Math.random() * 2));
                this.ctx.fillText(text, i * this.fontSize, drop.y * this.fontSize);
                drop.y += drop.direction;

                const isOffScreen = (drop.direction === 1 && drop.y * this.fontSize > this.canvas.height) ||
                                    (drop.direction === -1 && drop.y * this.fontSize < 0);

                if (isOffScreen && Math.random() > 0.98) {
                    const goingDown = Math.random() > 0.5;
                    drop.direction = goingDown ? 1 : -1;
                    drop.y = goingDown ? 1 : Math.floor(this.canvas.height / this.fontSize);
                }
            }
        }
    };

    digitalRainEffect.init();

    // =============== DARK/LIGHT THEME TOGGLE ===============
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    
    // Fungsi untuk menerapkan tema berdasarkan class di <html>
    const applyTheme = (theme) => {
        const htmlEl = document.documentElement;
        if (theme === 'dark') {
            htmlEl.classList.add('dark-mode');
            if (themeToggleIcon) themeToggleIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            htmlEl.classList.remove('dark-mode');
            if (themeToggleIcon) themeToggleIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
        // Perintahkan kanvas untuk memperbarui warnanya
        if (digitalRainEffect.canvas) {
            digitalRainEffect.updateColors();
        }
    };
    
    // Periksa tema yang tersimpan di localStorage
    const savedTheme = localStorage.getItem('theme');
    // Periksa tema preferensi OS
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Prioritas: localStorage > Preferensi OS > Default (terang)
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light'); // Default
    }

    // Event listener untuk tombol
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const htmlEl = document.documentElement;
            const newTheme = htmlEl.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ... Sisa kode Anda ...
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.cyberpunk-nav .nav-link');
    if (sections.length > 0 && navLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    const targetId = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.cyberpunk-nav .nav-link[href="#${targetId}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.5 });
        sections.forEach(section => observer.observe(section));
    }
    
    const scrollUpButton = document.getElementById('scroll-up');
    if (scrollUpButton) {
        let scrollTimeout;
        const throttledScrollUp = () => {
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                scrollUpButton.classList.toggle('show-scroll', window.scrollY >= 350);
                scrollTimeout = null;
            }, 150);
        };
        window.addEventListener('scroll', throttledScrollUp);
        scrollUpButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        const text = "Fullstack Developer · Mobile Developer · Money Management";
        let index = 0;
        (function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index++);
                setTimeout(type, 80);
            }
        })();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const contactMessage = document.getElementById('contact-message');
            const contactName = document.getElementById('contact-name');
            const contactEmail = document.getElementById('contact-email');
            const contactProject = document.getElementById('contact-project');
            
            if (!contactName.value.trim() || !contactEmail.value.trim() || !contactProject.value.trim()) {
                contactMessage.classList.remove('color-blue');
                contactMessage.classList.add('color-red');
                contactMessage.textContent = 'Write all the input fields 🤔';
                return;
            }
            if (typeof emailjs === 'undefined') {
                contactMessage.classList.remove('color-blue');
                contactMessage.classList.add('color-red');
                contactMessage.textContent = 'Email service is currently unavailable.';
                return;
            }
            contactMessage.classList.remove('color-red');
            contactMessage.classList.add('color-blue');
            contactMessage.textContent = 'Sending message... ⏳';
            emailjs.sendForm('service_8vbllr8', 'template_povc7fs', this, 'AqRtbEOQdTTA21lRG')
                .then(() => {
                    contactMessage.textContent = 'Message sent, thanks.. 👌';
                    this.reset();
                    setTimeout(() => contactMessage.textContent = '', 5000);
                }, (error) => {
                    contactMessage.textContent = `Error: ${error.text || 'Something went wrong'}`;
                });
        });
    }
    
    const tahunElement = document.getElementById('tahun');
    if (tahunElement) {
        const currentYear = new Date().getFullYear();
        if (!tahunElement.textContent.includes(currentYear)) {
             tahunElement.innerHTML += currentYear;
        }
    }
});