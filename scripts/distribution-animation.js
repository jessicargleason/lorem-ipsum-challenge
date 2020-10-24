(function distributionInit() {
    const yellowLines = document.getElementById("yellow-lines");
    const blackLines = document.getElementById("black-lines");
    const blueLines = document.getElementById("blue-lines");

    function animateLines(collection) {
        const lines = collection.getElementsByTagName("path");
        //create a greensock timeline that repeats forever
        const tl = gsap.timeline({repeat: -1, repeatDelay: 2});

        //add each individual line to the timeline
        for (line of lines) {
            tl.to(line, {duration: .01, opacity: 1});
        };
    }
    animateLines(blueLines);
    animateLines(blackLines);
    animateLines(yellowLines);
})();