(function pyramidInit() {
    const pyramidController = new ScrollMagic.Controller();

    const brickAnimation = gsap.timeline();
     brickAnimation.fromTo("#bottom-bricks", {x: .5, y: 451.5}, {x: 91.5, y: 292.5, ease: Linear.easeNone})
     brickAnimation.fromTo("#top-brick", {x: 372.5, y: .5}, {x: 302.5, y: 119.5, ease: Linear.easeNone})

    const scene = new ScrollMagic.Scene({
            triggerElement: ".pyramid",
            duration: 150,
            offset: 100,
            reverse: true
        })
        .setTween(brickAnimation)
        .addTo(pyramidController);
    
})();