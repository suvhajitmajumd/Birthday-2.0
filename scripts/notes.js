let unlockDate = new Date("Dec 05, 2025 00:00:00").getTime();

let timer = setInterval(function() {
    let now = new Date().getTime();
    let remaining = unlockDate - now;

    if (remaining <= 0) {
        clearInterval(timer);
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("noteContent").style.display = "block";
        return;
    }

    let d = Math.floor(remaining / (1000 * 60 * 60 * 24));
    let h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((remaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        d + "d " + h + "h " + m + "m " + s + "s ";

}, 1000);