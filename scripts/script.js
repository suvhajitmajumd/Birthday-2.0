// -------------------- COUNTDOWN --------------------
const unlockDate = new Date("2025-12-05T00:00:00"); // Live countdown date

function updateCountdown() {
    const now = new Date();
    const diff = unlockDate - now;

    if (diff <= 0) {
        document.getElementById("lockedState").style.display = "none";
        document.getElementById("unlockedState").style.display = "block";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `Unlocks in: ${d}d ${h}h ${m}m ${s}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// -------------------- GALLERIES --------------------

// Gallery arrays
const galleries = {
    cuteYou: [
        { src: "pics/Cute You/pic1.jpg", caption: captionsCuteYou[0] },
        { src: "pics/Cute You/pic2.jpg", caption: captionsCuteYou[1] },
        { src: "pics/Cute You/pic3.jpg", caption: captionsCuteYou[2] },
        { src: "pics/Cute You/pic4.jpg", caption: captionsCuteYou[3] },
        { src: "pics/Cute You/pic5.jpg", caption: captionsCuteYou[4] }
    ],
    milestone: [
        { src: "pics/mile/Mpic1.jpg", caption: captionsMilestone[0] },
        { src: "pics/mile/Mpic2.jpg", caption: captionsMilestone[1] },
        { src: "pics/mile/Mpic3.jpg", caption: captionsMilestone[2] },
        { src: "pics/mile/Mpic4.jpg", caption: captionsMilestone[3] }
    ],
    twoK25: [
        { src: "pics/2k25/2k25_1.jpg", caption: captions2k25[0] },
        { src: "pics/2k25/2k25_2.jpg", caption: captions2k25[1] },
        { src: "pics/2k25/2k25_3.jpg", caption: captions2k25[2] },
        { src: "pics/2k25/2k25_4.jpg", caption: captions2k25[3] }
    ]
};

// Current gallery state
let currentGallery = galleries.cuteYou;
let currentIndex = 0;

// -------------------- OPEN / UPDATE GALLERY --------------------
function openGallery(type) {
    currentGallery = galleries[type];
    currentIndex = 0;
    updateGallery();
    document.getElementById("photoViewer").style.display = "flex";

    // // Special behavior for Milestone: slow shuffle
    // if (type === "milestone") {
    //     startMilestoneShuffle();
    // } else {
    //     stopMilestoneShuffle();
    // }
}

function updateGallery() {
    const photo = currentGallery[currentIndex];
    const img = document.getElementById("galleryImg");
    img.src = photo.src;
    document.getElementById("galleryCaption").innerText = photo.caption;

    // Fix container size to avoid resizing
    img.onload = function() {
        const card = document.getElementById("photoCard");
        card.style.width = img.naturalWidth > 600 ? "90%" : img.naturalWidth + "px";
        card.style.height = img.naturalHeight > 400 ? "auto" : img.naturalHeight + "px";
    }
}

// -------------------- NAVIGATION --------------------
function nextPhoto() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateGallery();
}
function prevPhoto() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateGallery();
}
function closeGallery() {
    document.getElementById("photoViewer").style.display = "none";
    stopMilestoneShuffle();
}

// -------------------- TOUCH SWIPE SUPPORT --------------------

// -------------------- MILESTONE MANUAL MODE ONLY --------------------
function startMilestoneShuffle() {
    // ❗ DO NOTHING — DISABLE AUTO SHUFFLE
}

function stopMilestoneShuffle() {
    // ❗ DO NOTHING — NO INTERVAL TO CLEAR
}

// -------------------- LOVE ERUPTION ON PAGE LOAD --------------------
function loveEruption() {
    const overlay = document.createElement("div");
    overlay.className = "love-explosion";
    document.body.appendChild(overlay);

    const hearts = ["❤️","💗","💖","💕","💘","💞"];
    const count = 50; // number of hearts

    for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + "%"; // horizontal spread
        heart.style.fontSize = (12 + Math.random()*36) + "px"; // varied sizes
        heart.style.animationDelay = (Math.random() * 0.5) + "s"; // stagger
        overlay.appendChild(heart);
    }

    // Remove overlay after 3.5s
    setTimeout(() => {
        overlay.remove();
    }, 3500);
}

// Trigger on page load
window.addEventListener("load", loveEruption);


// Trigger on page load
window.addEventListener("load", loveEruption);


// Trigger on page load
window.addEventListener("load", loveExplosion);


// Trigger multiple bubbles on page load
window.addEventListener("load", () => {
    for (let i = 0; i < 12; i++) {
        setTimeout(createLoveBubble, i * 300); // spread them out
    }
});
