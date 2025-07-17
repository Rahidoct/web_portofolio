// Satu DOMContentLoaded untuk semua fungsi
document.addEventListener('DOMContentLoaded', function() {
    
    // =============== DIGITAL BACKGROUND ===============
    const container = document.createElement('body');
    container.className = 'digital-bg';
    document.body.appendChild(container);

    function createNumberStream() {
        const streamLength = 10 + Math.floor(Math.random() * 15);
        const startX = Math.random() * window.innerWidth;
        const endX = startX + (Math.random() * 40 - 20);
        const isUp = Math.random() > 0.5;
        
        for (let i = 0; i < streamLength; i++) {
            const number = document.createElement('body');
            number.className = 'digital-number';
            
            // Generate random number (0-9)
            number.textContent = Math.floor(Math.random() * 10);
            
            // Set position and animation
            number.style.setProperty('--start-x', `${startX}px`);
            number.style.setProperty('--end-x', `${endX}px`);
            
            if (isUp) {
                number.style.animation = `float-up ${5 + Math.random() * 5}s linear infinite`;
            } else {
                number.style.animation = `float-down ${5 + Math.random() * 5}s linear infinite`;
            }
            
            // Staggered delay for stream effect
            number.style.animationDelay = `${i * 0.1}s`;
            
            container.appendChild(number);
            
            // Cleanup
            setTimeout(() => {
                if (number.parentNode) {
                    number.remove();
                }
            }, 20000);
        }
    }

    // Initial creation
    for (let i = 0; i < 20; i++) {
        setTimeout(createNumberStream, i * 500);
    }

    // Continuous creation
    setInterval(createNumberStream, 1000);

    // =============== ACTIVE MENU ON SCROLL (SCROLLSPY) ===============
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.cyberpunk-nav .nav-link');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null, // Menggunakan viewport sebagai root
            rootMargin: '0px',
            threshold: 0.5 // Anggap section aktif jika 50% terlihat
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hapus class 'active' dari semua link
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Temukan link yang cocok dengan section yang terlihat
                    const targetId = entry.target.getAttribute('id');
                    const activeLink = document.querySelector(`.cyberpunk-nav .nav-link[href="#${targetId}"]`);
                    
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Amati setiap section
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // =============== DARK/LIGHT THEME TOGGLE ===============
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const currentTheme = localStorage.getItem('theme');

    // Fungsi untuk menerapkan tema
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (themeToggleIcon) themeToggleIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            document.body.classList.remove('dark-mode');
            if (themeToggleIcon) themeToggleIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
    };

    // Terapkan tema yang tersimpan saat halaman dimuat
    if (currentTheme) {
        applyTheme(currentTheme);
    }

    // Event listener untuk tombol toggle
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            let theme;
            // Cek tema saat ini dan ganti
            if (document.body.classList.contains('dark-mode')) {
                theme = 'light';
            } else {
                theme = 'dark';
            }
            // Terapkan tema baru dan simpan ke localStorage
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    }

    // =============== SCROLL TO TOP ===============
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =============== SCROLL-UP BUTTON LOGIC ===============
    const scrollUpButton = document.getElementById('scroll-up');

    if (scrollUpButton) {
        const scrollUp = () => {
            // Jika pengguna telah menggulir lebih dari 350px ke bawah
            if (window.scrollY >= 350) {
                scrollUpButton.classList.add('show-scroll');
            } else {
                scrollUpButton.classList.remove('show-scroll');
            }
        };
        
        // Tambahkan event listener saat menggulir halaman
        window.addEventListener('scroll', scrollUp);

        // Fungsi untuk kembali ke atas saat tombol diklik (opsional, karena href="#" sudah berfungsi)
        scrollUpButton.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah penambahan '#' di URL
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =============== TYPING EFFECT ===============
    const text = "Fullstack Developer · Mobile Developer · Money Management";
    const typingElement = document.getElementById("typing-text");
    
    if (typingElement) {
        let index = 0;
        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 80); // Kecepatan ketik (ms)
            }
        }
        // Mulai typing effect
        type();
    }

    // =============== EMAIL JS ===============
    // Inisialisasi EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("AqRtbEOQdTTA21lRG");
    }

    const contactForm = document.getElementById('contact-form');
    const contactName = document.getElementById('contact-name');
    const contactEmail = document.getElementById('contact-email');
    const contactProject = document.getElementById('contact-project');
    const contactMessage = document.getElementById('contact-message');

    // Debug: Cek apakah elemen ditemukan
    console.log('Form elements check:', {
        contactForm: !!contactForm,
        contactName: !!contactName,
        contactEmail: !!contactEmail,
        contactProject: !!contactProject,
        contactMessage: !!contactMessage,
        emailjs: typeof emailjs !== 'undefined'
    });

    const sendEmail = (e) => {
        e.preventDefault();
        
        console.log('Form submitted!');
        
        // Pastikan semua elemen ada
        if (!contactName || !contactEmail || !contactProject || !contactMessage) {
            console.error('Some form elements are missing!');
            return;
        }
        
        // Check if all fields have values
        if(contactName.value.trim() === '' || contactEmail.value.trim() === '' || contactProject.value.trim() === ''){
            console.log('Validation failed - empty fields');
            contactMessage.classList.remove('color-blue');
            contactMessage.classList.add('color-red');
            contactMessage.textContent = 'Write all the input fields 🤔';
        } else {
            console.log('Validation passed - sending email');
            
            // Cek EmailJS
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS is not loaded!');
                contactMessage.classList.remove('color-blue');
                contactMessage.classList.add('color-red');
                contactMessage.textContent = 'EmailJS library not loaded!';
                return;
            }
            
            // Show loading
            contactMessage.classList.remove('color-red');
            contactMessage.classList.add('color-blue');
            contactMessage.textContent = 'Sending message... ⏳';
            
            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_8vbllr8','template_povc7fs','#contact-form','AqRtbEOQdTTA21lRG')
                .then(() => {
                    console.log('Email sent successfully!');
                    // Show success message
                    contactMessage.classList.remove('color-red');
                    contactMessage.classList.add('color-blue');
                    contactMessage.textContent = 'Message sent, thanks.. 👌';

                    // Reset all form fields
                    contactName.value = '';
                    contactEmail.value = '';
                    contactProject.value = '';
                    
                    // Remove message after 5 seconds
                    setTimeout(() => {
                        contactMessage.textContent = '';
                        contactMessage.classList.remove('color-blue');
                    }, 5000);
                })
                .catch((error) => {
                    console.error('EmailJS Error Details:', error);
                    console.error('Error status:', error.status);
                    console.error('Error text:', error.text);
                    
                    // Show error message
                    contactMessage.classList.remove('color-blue');
                    contactMessage.classList.add('color-red');
                    
                    // Show specific error message
                    if (error.status === 400) {
                        contactMessage.textContent = 'Invalid template or service ID';
                    } else if (error.status === 401) {
                        contactMessage.textContent = 'Invalid public key';
                    } else if (error.status === 402) {
                        contactMessage.textContent = 'Email quota exceeded';
                    } else if (error.status === 403) {
                        contactMessage.textContent = 'Access denied';
                    } else {
                        contactMessage.textContent = `Error: ${error.text || 'Something went wrong'}`;
                    }
                });
        }    
    };

    // Attach event listener hanya jika form ada
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
        console.log('Event listener attached successfully');
    } else {
        console.error('Contact form not found!');
    }

    // =============== FOOTER YEAR ===============
    const tahunElement = document.getElementById('tahun');
    if (tahunElement) {
        tahunElement.innerHTML += new Date().getFullYear();
    }
});