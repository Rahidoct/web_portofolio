

// ========= DATA DUMMY (Properti + Produk Lain) =========
const properties = [
    // Properti
    { id: 1, name: "Rumah Modern di Delaware", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 20, status: "For sale", price: 3897810000, beds: 4, baths: 2, sqft: 1990, address: "6391 Elgin St. Celina, Delaware 10299", listedBy: "Turja Design Group, Inc.", agent: { name: "Brandon Levin", phone: "(480) 555-0103", avatar: "https://i.pravatar.cc/35?u=brandon" }, type: "house", location: { lat: 47.6205, lng: -122.3493 } },
    { id: 2, name: "Villa Klasik di San Jose", image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 12, status: "For sale", price: 1605810000, beds: 5, baths: 4, sqft: 2240, address: "2715 Ash Dr. San Jose, South Dakota", listedBy: "SENDAS Estate Group, Inc.", agent: { name: "Gustavo Calzoni", phone: "(808) 274-0111", avatar: "https://i.pravatar.cc/35?u=gustavo" }, type: "villa", location: { lat: 47.6097, lng: -122.3331 } },
    { id: 3, name: "Rumah Keluarga di New Mexico", image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 17, status: "For sale", price: 7781000000, beds: 4, baths: 3, sqft: 2500, address: "4140 Parker Rd, New Mexico 31134", listedBy: "Stark Real Estate", agent: { name: "Chance Dorwart", phone: "(209) 009-0104", avatar: "https://i.pravatar.cc/35?u=chance" }, type: "house", location: { lat: 47.6145, lng: -122.3119, selected: true } },
    { id: 4, name: "Guesthouse Nyaman di Hawaii", image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 15, status: "For rent", price: 24000000, beds: 2, baths: 1, sqft: 950, address: "1901 Thornridge Cir. Shiloh, Hawaii", listedBy: "Quantum Properties", agent: { name: "Craig Herwitz", phone: "(629) 172-0129", avatar: "https://i.pravatar.cc/35?u=craig" }, type: "guesthouse", location: { lat: 47.5952, lng: -122.3321 } },
    { id: 5, name: "Apartemen Modern di Inglewood", image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 25, status: "For sale", price: 6500000000, beds: 3, baths: 2, sqft: 1800, address: "8502 Preston Rd. Inglewood, Maine 98380", listedBy: "Horizon Realty", agent: { name: "Amina G.", phone: "(310) 555-0123", avatar: "https://i.pravatar.cc/35?u=amina" }, type: "apartment", location: { lat: 47.6250, lng: -122.3350 } },
    { id: 13, name: "Guesthouse Asri di Leesburg", image: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 9, status: "For rent", price: 32000000, beds: 3, baths: 2, sqft: 1400, address: "8584 W. Sherman Dr. Leesburg, VA 20175", listedBy: "Evergreen Estates", agent: { name: "James Sullivan", phone: "(503) 555-0155", avatar: "https://i.pravatar.cc/35?u=james" }, type: "guesthouse", location: { lat: 47.6111, lng: -122.3488 } },
    
    // Kendaraan
    { id: 16, name: "Toyota Avanza 2022", image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 10, status: "For sale", price: 210000000, details: { "Tahun": "2022", "Kilometer": "15,000", "Transmisi": "Manual" }, address: "Jakarta Selatan, Indonesia", listedBy: "Mobil Bekas Jaya", agent: { name: "Budi Santoso", phone: "(021) 555-0101", avatar: "https://i.pravatar.cc/35?u=budi" }, type: "kendaraan", location: { lat: 47.6032, lng: -122.3303 } },
    { id: 20, name: "Daihatsu Xenia 2023 (Sewa Harian)", image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 15, status: "For rent", price: 500000, details: { "Tipe": "Matic", "Kapasitas": "7 Penumpang" }, address: "Denpasar, Bali", listedBy: "Bali Rent Car", agent: { name: "Gede", phone: "(0361) 555-0105", avatar: "https://i.pravatar.cc/35?u=gede" }, type: "kendaraan", location: { lat: 47.6210, lng: -122.3150 } },
    
    // Elektronik
    { id: 17, name: "MacBook Pro 14 inch M1", image: "https://images.pexels.com/photos/434346/pexels-photo-434346.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 8, status: "For sale", price: 28500000, details: { "Chip": "Apple M1 Pro", "Memori": "16GB", "Storage": "512GB SSD" }, address: "Bandung, Jawa Barat", listedBy: "Digi Store", agent: { name: "Citra Lestari", phone: "(022) 555-0102", avatar: "https://i.pravatar.cc/35?u=citra" }, type: "elektronik", location: { lat: 47.6150, lng: -122.3420 } },
    { id: 21, name: "Laptop Dell XPS 15", image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600", photos: 7, status: "For sale", price: 15000000, details: { "Merek": "Dell", "Layar": "15 inch FHD", "Prosesor": "Intel Core i7" }, address: "Yogyakarta", listedBy: "Komputer Kita", agent: { name: "Rina", phone: "(0274) 555-0106", avatar: "https://i.pravatar.cc/35?u=rina" }, type: "elektronik", location: { lat: 47.6255, lng: -122.3255 } },
    
    // Fashion
    { id: 18, name: "Jaket Kulit Pria", image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 5, status: "For sale", price: 750000, details: { "Ukuran": "L", "Bahan": "Kulit Domba Asli", "Warna": "Coklat" }, address: "Surabaya, Jawa Timur", listedBy: "Fashion Trend", agent: { name: "Doni Firmansyah", phone: "(031) 555-0103", avatar: "https://i.pravatar.cc/35?u=doni" }, type: "fashion", location: { lat: 47.6080, lng: -122.3350 } },
    { id: 22, name: "Sepatu Nike Air Force 1", image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 9, status: "For sale", price: 450000, details: { "Merek": "Nike", "Ukuran": "42", "Warna": "Putih" }, address: "Semarang", listedBy: "Sneakers Hub", agent: { name: "Adi", phone: "(024) 555-0107", avatar: "https://i.pravatar.cc/35?u=adi" }, type: "fashion", location: { lat: 47.5980, lng: -122.3450 } },
    
    // Peralatan
    { id: 19, name: "Bor Listrik Cordless", image: "https://images.pexels.com/photos/1249567/pexels-photo-1249567.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 6, status: "For sale", price: 1200000, details: { "Merek": "Bosch", "Voltase": "18V", "Kondisi": "Baru" }, address: "Medan, Sumatera Utara", listedBy: "Toko Perkakas Maju", agent: { name: "Eka Wijaya", phone: "(061) 555-0104", avatar: "https://i.pravatar.cc/35?u=eka" }, type: "peralatan", location: { lat: 47.6115, lng: -122.3210 } },
    { id: 23, name: "Phillips Air Fryer HD9200", image: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=600", photos: 4, status: "For sale", price: 800000, details: { "Merek": "Phillips", "Tipe": "Air Fryer", "Kapasitas": "4.1 Liter" }, address: "Makassar", listedBy: "Dapur Modern", agent: { name: "Lina", phone: "(0411) 555-0108", avatar: "https://i.pravatar.cc/35?u=lina" }, type: "peralatan", location: { lat: 47.6020, lng: -122.3020 } }
];

// ========= DOM Elements =========
const gridContainer = document.getElementById("property-grid");
const propertyCountEl = document.getElementById("property-count");
const allNavTabs = document.querySelectorAll(".nav-tab");
const actionTabs = document.querySelectorAll('.action-tab'); // Ditambahkan
const viewToggleBtns = document.querySelectorAll('.view-btn');
const listingsSection = document.querySelector('.listings-section');
const mapContainer = document.querySelector('.map-container');
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');

let map;
let markers = [];
const propertyTypes = ['house', 'villa', 'apartment', 'guesthouse'];

// ========= MAP FUNCTIONS =========
function initMap() {
    map = L.map('map', { zoomControl: false }).setView([47.61, -122.33], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd', maxZoom: 20
    }).addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
}

function renderMapMarkers(props) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    props.forEach(property => {
        let priceText = `Rp${property.price.toLocaleString('id-ID')}`;
        if (property.status === 'For rent' && propertyTypes.includes(property.type)) {
            priceText += '/bulan';
        } else if (property.status === 'For rent') {
            priceText += '/hari';
        }

        const title = property.name || property.address;
        let detailsHTML = '';
        if (propertyTypes.includes(property.type)) {
            detailsHTML = `<span><i class="fas fa-bed"></i> ${property.beds}</span> <span><i class="fas fa-bath"></i> ${property.baths}</span> <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</span>`;
        } else if (property.details) {
                detailsHTML = Object.entries(property.details).slice(0, 3).map(([key, value]) => `<span>${value}</span>`).join(' ');
        }
        
        const dotIcon = L.divIcon({ className: 'map-marker-dot', iconSize: [14, 14], iconAnchor: [7, 7] });
        const marker = L.marker([property.location.lat, property.location.lng], { icon: dotIcon }).addTo(map);
        marker.bindTooltip(priceText, { permanent: true, direction: 'top', offset: [0, -10], className: 'price-tooltip' });
        const popupContent = `
            <div class="map-popup-card"> <div class="image-container"><img src="${property.image}" alt="${title}"></div> <div class="info"> <div class="header"> <p class="status"><span class="dot"></span> ${property.status}</p> <i class="far fa-heart heart-icon"></i> </div> <div> <h3 class="price">${priceText}</h3> <div class="details">${detailsHTML}</div> <p class="address">${title}</p> </div> </div> </div>
        `;
        marker.bindPopup(popupContent, { offset: L.point(0, -10) });
        if(property.selected) marker.openPopup();
        markers.push(marker);
    });
}

// ========= UI RENDERING FUNCTIONS =========
function renderProperties(props) {
    gridContainer.innerHTML = "";
    props.forEach(property => {
        const card = document.createElement("div");
        card.className = "property-card";
        let priceText = `Rp${property.price.toLocaleString('id-ID')}`;
        if (property.status === 'For rent' && propertyTypes.includes(property.type)) {
            priceText += '/bulan';
        } else if (property.status === 'For rent') {
            priceText += '/hari';
        }
        let detailsHTML = '';
        if (propertyTypes.includes(property.type)) {
            detailsHTML = `<div class="property-details"> <span><i class="fas fa-bed"></i> ${property.beds} bed</span> <span><i class="fas fa-bath"></i> ${property.baths} bath</span> <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</span> </div>`;
        } else if (property.details) {
            let detailItems = Object.entries(property.details).map(([key, value]) => `<span>${key}: <strong>${value}</strong></span>`).join('');
            detailsHTML = `<div class="property-details">${detailItems}</div>`;
        }
        const title = property.name || property.address;
        card.innerHTML = `
            <div class="card-image"> <img src="${property.image}" alt="${title}"> <div class="photo-count"><i class="fas fa-camera"></i> ${property.photos}</div> <div class="agent-overlay"> <div class="agent-info"> <div class="agent-avatar"><img src="${property.agent.avatar}" alt="${property.agent.name}"></div> <div class="agent-details"> <h4>${property.agent.name}</h4> <p>${property.agent.phone}</p> </div> </div> <i class="fas fa-check-circle"></i> </div> </div>
            <div class="card-content"> <div class="card-header"> <p class="property-status"><span class="dot"></span> ${property.status.replace('For sale', 'Dijual').replace('For rent', 'Disewa')}</p> <div class="card-actions"> <i class="far fa-bookmark"></i> <i class="far fa-heart"></i> </div> </div> <h3 class="property-price">${priceText}</h3> <p class="property-address">${title}</p> ${detailsHTML} <p class="listed-by">Dijual oleh ${property.listedBy}</p> </div>
        `;
        gridContainer.appendChild(card);
    });
    propertyCountEl.textContent = props.length;
}

// ========= FUNGSI FILTER UTAMA (DIPERBARUI) =========
function filterProperties() {
    // Dapatkan tab kategori dan aksi yang aktif
    const activeCategoryTab = document.querySelector(".nav-tabs .nav-tab.active, .mobile-nav .nav-tab.active");
    const activeActionTab = document.querySelector(".action-tab.active");
    
    let propertiesToDisplay = [];

    // 1. Filter berdasarkan Kategori Produk
    const category = activeCategoryTab.getAttribute("data-type");
    let categoryFiltered = [];
    if (category === 'properti') {
        categoryFiltered = properties.filter(p => propertyTypes.includes(p.type));
    } else {
        categoryFiltered = properties.filter(p => p.type === category);
    }

    // 2. Filter berdasarkan Aksi (Sewa/Beli/Jual)
    const action = activeActionTab.getAttribute("data-action");
    if (action === 'rent') {
        propertiesToDisplay = categoryFiltered.filter(p => p.status === 'For rent');
    } else { // 'buy' atau 'sell' akan menampilkan 'For sale'
        propertiesToDisplay = categoryFiltered.filter(p => p.status === 'For sale');
    }
    
    // Render hasil filter
    renderProperties(propertiesToDisplay);
    if (map) {
        renderMapMarkers(propertiesToDisplay);
    }
}

// ========= RESPONSIVE LAYOUT LOGIC =========
function updateLayout() {
    const activeView = document.querySelector('.view-btn.active')?.dataset.view;
    const screenWidth = window.innerWidth;
    if (screenWidth <= 992) {
    if (activeView === 'map') {
        mapContainer.classList.remove('hidden');
        listingsSection.classList.add('hidden');
        if(map) map.invalidateSize();
    } else {
        mapContainer.classList.add('hidden');
        listingsSection.classList.remove('hidden');
    }
    } else {
    mapContainer.classList.remove('hidden');
    listingsSection.classList.remove('hidden');
    if(map) map.invalidateSize();
    }
}

// ========= EVENT LISTENERS =========
allNavTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const clickedType = e.currentTarget.getAttribute("data-type");
        allNavTabs.forEach(t => t.classList.remove("active"));
        document.querySelectorAll(`.nav-tab[data-type="${clickedType}"]`).forEach(t => t.classList.add("active"));
        filterProperties();
        if (header.classList.contains('nav-open')) {
            header.classList.remove('nav-open');
        }
    });
});

// EVENT LISTENER UNTUK TAB AKSI (SEWA/BELI/JUAL) - DITAMBAHKAN
actionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.classList.contains('active')) return;
        actionTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterProperties(); // Panggil fungsi filter utama
    });
});

viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    if(btn.classList.contains('active')) return;
    viewToggleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateLayout();
    });
});

menuToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});

window.addEventListener('resize', updateLayout);

// ========= INITIALIZATION =========
document.addEventListener("DOMContentLoaded", () => {
    initMap();
    filterProperties(); // Panggil filter saat halaman dimuat
    updateLayout(); 
});