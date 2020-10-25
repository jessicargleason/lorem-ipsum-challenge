(function pyramidInit() {
    const pyramidController = new ScrollMagic.Controller();

    //Transition moving bricks from their starting (separated) transform coordinates to their ending (connected) coordinates
    const brickAnimation = gsap.timeline();
     brickAnimation.fromTo("#bottom-bricks", {x: .5, y: 451.5}, {x: 91.5, y: 292.5, ease: Linear.easeNone})
     brickAnimation.fromTo("#top-brick", {x: 372.5, y: .5}, {x: 302.5, y: 119.5, ease: Linear.easeNone})

    //Starting the offset distance above the triggerElement, the animation will take the duration (in scrolled pixels) to complete
    const scene = new ScrollMagic.Scene({
            triggerElement: ".pyramid",
            duration: 150,
            offset: 100,
            reverse: true
        })
        .setTween(brickAnimation)
        .addTo(pyramidController);
    
})();