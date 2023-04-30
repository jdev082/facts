function getRandomFact() {
    fetch('https://a.jdev.eu.org/fact/specify/count/random/1')
        .then(res => res.json())
        .then(data => {
            const fact = data[0];
            document.getElementById("fact").innerHTML = fact;
        });
    /*fetch('https://api.jdev082.repl.co/fact/hourly')
        .then(res => res.json())
        .then(data => {
            const { fact } = data;
            document.getElementById("factHourly").innerText = 'disabled';
        });*/
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
