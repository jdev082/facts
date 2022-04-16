let phrases = [
    "Trypophobia is the fear of closely-packed holes.",
    "The fear of being punched is called punch phobia.",
    "Australia is wider than the moon. The moon sits at 3400km in diameter, while Australia’s diameter from east to west is almost 4000km.",
    "'Mellifluous' is a sound that is pleasingly smooth and musical to hear.",
    "Human teeth are the only part of the body that cannot heal themselves. Teeth are coated in enamel which is not a living tissue.",
    "It's illegal to own just one guinea pig in Switzerland. It's considered animal abuse because they're social beings and get lonely.",
    "The Ancient Romans used to drop a piece of toast into their wine for good health - hence why we 'raise a toast'.",
    "There’s only one letter that doesn’t appear in any American state name. There's a Z in Arizona and an X in Texas, but no Q in any of them.",
    "There's a fruit that tastes like chocolate pudding. Can we get in on this? Apparently, there's a fruit native to Central and South America called black sapote that tastes like chocolate and sweet custard.",
    "The average person walks the equivalent of three times around the world in their lifetime.",
    "Pigeons can tell the difference between Picasso and Monet. What?! A 1995 study shows that the birds can differentiate between the two artists.",
    "gobo might have been the mascot for scratch",
    "the scratch team owns the domain scratch.team",
    'this is the third "did you know" message i have written',
    "there was a small window of time where you could backpack scratchblocks from the forums",
    'ocular was originally called "Jeffalo Post Viewer"',
    "according to all known laws of aviation there is no way a bee should be able to fly",
    "only cool people have an ocular statuses?",
    'the word "notch" was originally "oche" but people misheard it when others said "an oche"',
    "the scratch team can see your gender",
    'you cannot sign up to scratch with the name "qnb02mclepghwic9"',
    "scratch projects are never deleted unless specifically you ask the scratch team to",
    "scrath has a bug bounty program",
    "it is currently 9:51 while i write this",
    "scratch owns the domain scratch.pizza",
    "scratch owns the domain scratch.love",
    "We are experiencing a disruption with email delivery. If you are not receiving emails from us, please try after 8am EST.",
    "backpack.scratch.mit.edu has a funny ghost",
    "download.scratch.mit.edu says Scratch On!",
    "downloads.scratch.mit.edu has a one of a kind error page",
    "downloads.scratch.ly just says No",
    "projects.scratch.mit.edu has an easter egg in the HTTP response headers",
    "during scratch 2's development there was a built in scrolling system for projects",
    "scratch has a discussion forum",
    "archbtw uses arch btw",
    'scratch has some code for an unused "disable studio notifications" button',
    "each of gobo's friends names come from the metric prefix for powers of 10",
    "today is probably someone's birthday on scratch",
    "ocular",
    "ocular is currently loading",
    "the first scratch project was id 104, everything with a lower id was added later",
    "jeffalo's real name is not actually jeff or anything similar",
    "this isnt a did you know message",
    "i am running out of trivia",
    "i want you to see za-chary's 5000 Followers Podcast",
    "the scratch wiki has a wacky domain name",
    "the scratch team's admin panel may have at some point had a template specifically for fnaf project alerts",
    "jeffalo did not write this message",
    "scratchdb might stand for scratch donut buffet",
    "jeffalo starts with a letter",
    "ocular statuses are displayed on a variety of websites",
    "any scratch url starting https://scratch.mit.edu/go leads to a 403",
    'you can no longer sign up to scratch with the name "jeffalo"',
    "when scratchdb is down, ocular may not work",
    "you are reading this, or maybe not",
    "the",
    "ocular uses vue",
    "no",
    "the word ocular has three vowels and three consonants",
    "you can't spell ocular without u",
    "the word ocular is related to vision",
    "ocular's API is in a separate repository from the rest of ocular",
    "there is a svelte version of ocular that is currently unreleased",
    "i wrote this at 2:22 PM",
    "ocular is at least a year old",
    "ocular's privacy policy is something you should read",
    "there are a few people contributing to ocular's open source code",
    '"coural" is an anagram of "ocular"',
    "ocular works on obscure platforms, such as watchOS",
]

function getRandomFact() {
    return phrases[Math.floor(Math.random() * phrases.length)];
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
    document.getElementById("fact").innerHTML = getRandomFact();
});

setInterval(function() {
    document.getElementById("content").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("loading-text").classList.remove("hidden");
    setTimeout(function() {
        document.getElementById("content").classList.remove("hidden");
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("loading-text").classList.add("hidden");
    }, 100);
    document.getElementById("fact").innerHTML = getRandomFact();
}, 5000);