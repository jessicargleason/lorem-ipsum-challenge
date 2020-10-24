/* Setting up triggering of various CSS animations when they come into view */
(function animationsInit() {
var cssController = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: ".circles"})
        .setClassToggle(".circles", "in-view") // add class toggle
        .addTo(cssController);

    new ScrollMagic.Scene({triggerElement: ".connections-diagram"})
        .setClassToggle(".connections-diagram", "in-view") // add class toggle
        .addTo(cssController);
})();