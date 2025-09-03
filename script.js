let itemsToShow = 4;

const galleryItems = [
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    { type: 'image', src: 'temple1.png', alt: 'Image 1' },
    { type: 'image', src: 'temple2.png', alt: 'Image 2' },
    { type: 'image', src: 'logo.png', alt: 'Image 5' },
    // { type: 'video', src: 'video1.mp4', alt: 'Video 1' },
    // { type: 'image', src: 'gallery3.jpg', alt: 'Image 3' },
    // { type: 'image', src: 'gallery4.jpg', alt: 'Image 4' },
    // { type: 'video', src: 'video2.mp4', alt: 'Video 2' },
    // Add more items as needed
];

// ...existing code...
const membersList = [
    {
        name: "A. Harsha Rao",
        image: "images/members/hrao.png",
        details: "President<br>Contact: 9876543210"
    },
    {
        name: "P. Nagesh Rao",
        image: "images/members/pnrao.png",
        details: "Hon. President<br>Contact: 9123456780"
    },
    {
        name: "Ravi Rao",
        image: "images/members/ravirao.png",
        details: "Secretary<br>Contact: 9876543210"
    },
    {
        name: "Ashok Karanth",
        image: "images/members/ashok.png",
        details: "Treasurer<br>Contact: 9123456780"
    },
    {
        name: "Rohini Bairi",
        image: "images/members/rohini.png",
        details: "President Mahila Vedike<br>Contact: 9876543210"
    },
    {
        name: "Geeta Herela",
        image: "images/members/geetha.png",
        details: "Secretary Mahila Vedike<br>Contact: 9123456780"
    },
    {
        name: "Vidya Mayya",
        image: "images/members/vidya.png",
        details: "Treasurer Mahila Vedike<br>Contact: 9876543210"
    },
    {
        name: "Dinesh K. Rao",
        image: "images/members/dinesh.png",
        details: "Jt. Treasurer<br>Contact: 9123456780"
    },
    {
        name: "Raghavendra Navada",
        image: "images/members/raghavendra.png",
        details: "Member<br>Contact: 9876543210"
    },
    {
        name: "Vasudeva karanth",
        image: "images/members/vasudeva.png",
        details: "Member<br>Contact: 9123456780"
    },
    {
        name: "Ravi Karanth",
        image: "images/members/ravik.png",
        details: "Co-optd. Member<br>Contact: 9123456780"
    },
];

const magazinePDFs = [
    {
        name: "Koota Magazine",
        month: "January - March",
        year: "2025",
        file: "./images/magazine/Jan-Mar_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "April - June",
        year: "2025",
        file: "./images/magazine/Apr-Jun_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "July - September",
        year: "2025",
        file: "./images/magazine/Jul-Sep_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "January - March",
        year: "2025",
        file: "./images/magazine/Jan-Mar_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "April - June",
        year: "2025",
        file: "./images/magazine/Apr-Jun_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "July - September",
        year: "2025",
        file: "./images/magazine/Jul-Sep_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "January - March",
        year: "2025",
        file: "./images/magazine/Jan-Mar_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "April - June",
        year: "2025",
        file: "./images/magazine/Apr-Jun_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "July - September",
        year: "2025",
        file: "./images/magazine/Jul-Sep_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "January - March",
        year: "2025",
        file: "./images/magazine/Jan-Mar_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "April - June",
        year: "2025",
        file: "./images/magazine/Apr-Jun_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "July - September",
        year: "2025",
        file: "./images/magazine/Jul-Sep_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "January - March",
        year: "2025",
        file: "./images/magazine/Jan-Mar_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "April - June",
        year: "2025",
        file: "./images/magazine/Apr-Jun_2025.pdf"
    },
    {
        name: "Koota Magazine",
        month: "July - September",
        year: "2025",
        file: "./images/magazine/Jul-Sep_2025.pdf"
    }
];

// Render Magazine PDF cards
// ...existing code...
function renderMagazineList() {
    const container = document.getElementById('magazineList');
    container.innerHTML = '';
    magazinePDFs.forEach((pdf, idx) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        col.innerHTML = `
      <div class="magazine-card" tabindex="0">
        <div class="magazine-title">${pdf.name}</div>
        <div class="magazine-date">${pdf.month} ${pdf.year}</div>
        <div class="magazine-actions">
          <button class="magazine-action-btn" title="View" onclick="viewPDF('${pdf.file}', '${pdf.name} - ${pdf.month} ${pdf.year}')">
            <i class="bi bi-eye"></i>
          </button>
          <a class="magazine-action-btn" title="Download" href="${pdf.file}" download target="_blank" rel="noopener">
            <i class="bi bi-download"></i>
          </a>
        </div>
      </div>
    `;
        container.appendChild(col);
    });
}
// ...existing code...

// View PDF in Modal
window.viewPDF = function (file, title) {
    document.getElementById('pdfViewer').src = file;
    document.getElementById('pdfModalLabel').textContent = title;
    const modal = new bootstrap.Modal(document.getElementById('pdfModal'));
    modal.show();
};

// Show Magazine section when nav clicked
document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        document.querySelectorAll('.nav-section').forEach(sec => sec.style.display = 'none');
        document.getElementById(sectionId).style.display = '';
        if (sectionId === 'magazine') renderMagazineList();
    });
});

// ...existing code...

function renderMembers() {
    const membersRow = document.getElementById('membersRow');
    if (!membersRow) return;
    membersRow.innerHTML = '';
    membersList.forEach(member => {
        membersRow.innerHTML += `
      <div class="col-12 col-md-6">
        <div class="member-card">
          <img src="${member.image}" alt="${member.name}" class="member-img">
          <div class="member-name">${member.name}</div>
          <div class="member-details">${member.details}</div>
        </div>
      </div>
    `;
    });
}

function renderGallery() {
    const galleryRow = document.getElementById('galleryRow');
    galleryRow.innerHTML = '';
    galleryItems.slice(0, itemsToShow).forEach(item => {
        let content = '';
        if (item.type === 'image') {
            content = `<img src="${item.src}" alt="${item.alt}" class="img-fluid rounded gallery-img">`;
        } else if (item.type === 'video') {
            content = `<video controls class="img-fluid rounded gallery-img"><source src="${item.src}" type="video/mp4">${item.alt}</video>`;
        }
        galleryRow.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
          <div class="card-body p-2">
            ${content}
          </div>
        </div>
      </div>
    `;
    });
    document.getElementById('showMoreBtn').style.display = itemsToShow < galleryItems.length ? 'inline-block' : 'none';
}

document.getElementById('showMoreBtn').addEventListener('click', () => {
    itemsToShow += 4;
    renderGallery();
});

function playBackgroundMusic() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        audio.play().catch(() => {
            // Show a play button if autoplay fails
            let btn = document.getElementById('musicPlayBtn');
            if (!btn) {
                btn = document.createElement('button');
                btn.id = 'musicPlayBtn';
                btn.textContent = 'Play Music';
                btn.className = 'btn btn-primary position-fixed bottom-0 end-0 m-3';
                btn.onclick = () => {
                    audio.play();
                    btn.remove();
                };
                document.body.appendChild(btn);
            }
        });
    }
}

// Section navigation logic
document.querySelectorAll('.nav-link[data-section]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        document.querySelectorAll('.nav-section').forEach(sec => {
            sec.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';

        // Optional: highlight active link
        document.querySelectorAll('.nav-link[data-section]').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        if (sectionId === 'home') {
            playBackgroundMusic();
        } else {
            const audio = document.getElementById('bgMusic');
            if (audio) audio.pause();
        }
    });
});

// Show Home section by default on page load
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-section').forEach(sec => {
        sec.style.display = 'none';
    });
    document.getElementById('home').style.display = 'block';

    // Optional: highlight Home link
    document.querySelectorAll('.nav-link[data-section]').forEach(l => l.classList.remove('active'));
    // document.querySelectorAll('.nav-link[data-section="home"]')[0].classList.add('active');
    // ...existing code...
    document.querySelectorAll('.nav-link[data-section="home"]').forEach(l => l.classList.add('active'));
    // ...existing code...
    playBackgroundMusic();
    renderMembers();
    renderGallery();
});



// ...existing code...



// // Play music when Home is shown by default
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.nav-section').forEach(sec => {
//         sec.style.display = 'none';
//     });
//     document.getElementById('home').style.display = 'block';

//     document.querySelectorAll('.nav-link[data-section]').forEach(l => l.classList.remove('active'));
//     document.querySelectorAll('.nav-link[data-section="home"]').forEach(l => l.classList.add('active'));

//     playBackgroundMusic();
// });

// // Play music when Home is selected
// document.querySelectorAll('.nav-link[data-section]').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const sectionId = this.getAttribute('data-section');
//         document.querySelectorAll('.nav-section').forEach(sec => {
//             sec.style.display = 'none';
//         });
//         document.getElementById(sectionId).style.display = 'block';

//         document.querySelectorAll('.nav-link[data-section]').forEach(l => l.classList.remove('active'));
//         this.classList.add('active');

//         if (sectionId === 'home') {
//             playBackgroundMusic();
//         } else {
//             const audio = document.getElementById('bgMusic');
//             if (audio) audio.pause();
//         }
//     });
// });