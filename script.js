function getRandomFact() {
    fetch('https://api.jaydendev.repl.co/fact')
        .then(res => res.json())
        .then(data => {
            const { fact } = data;
            document.getElementById("fact").innerHTML = fact;
        });
}

function toggleLoading() {
    setTimeout(function() {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("loading-text").classList.add("hidden");
        document.getElementById("content").classList.remove("hidden");
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    toggleLoading()
    getRandomFact();
});

setInterval(function() {
    document.getElementById("content").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("loading-text").classList.remove("hidden");
    setTimeout(function() {
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("loading-text").classList.add("hidden");
        getRandomFact();
    }, 100);
}, 5000);