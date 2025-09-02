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

const membersList = [
    {
        name: "Ramesh Saligrama",
        image: "logo.png", // Place this image in your project folder
        details: "President<br>Contact: 9876543210"
    },
    {
        name: "Suresh Rao",
        image: "logo.png", // Place this image in your project folder
        details: "Secretary<br>Contact: 9123456780"
    },
    {
        name: "Ramesh Saligrama",
        image: "logo.png", // Place this image in your project folder
        details: "President<br>Contact: 9876543210"
    },
    {
        name: "Suresh Rao",
        image: "logo.png", // Place this image in your project folder
        details: "Secretary<br>Contact: 9123456780"
    },
    {
        name: "Ramesh Saligrama",
        image: "logo.png", // Place this image in your project folder
        details: "President<br>Contact: 9876543210"
    },
    {
        name: "Suresh Rao",
        image: "logo.png", // Place this image in your project folder
        details: "Secretary<br>Contact: 9123456780"
    },
    {
        name: "Ramesh Saligrama",
        image: "logo.png", // Place this image in your project folder
        details: "President<br>Contact: 9876543210"
    },
    {
        name: "Suresh Rao",
        image: "logo.png", // Place this image in your project folder
        details: "Secretary<br>Contact: 9123456780"
    },
    {
        name: "Ramesh Saligrama",
        image: "logo.png", // Place this image in your project folder
        details: "President<br>Contact: 9876543210"
    },
    {
        name: "Suresh Rao",
        image: "logo.png", // Place this image in your project folder
        details: "Secretary<br>Contact: 9123456780"
    },
    // Add more members as needed
];
let itemsToShow = 4;

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