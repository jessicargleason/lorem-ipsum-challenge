//bare bones accordion functionality
(function accordionInit() {
    const buttons = document.getElementsByClassName("js-accordion-button");
    const toggle = function() {
        if (this.getAttribute("aria-expanded") === "true") {
            this.setAttribute("aria-expanded","false");
        } else {
            this.setAttribute("aria-expanded","true");
        }
    }
    for (let button of buttons) {
        button.addEventListener("click",toggle);
    }
}());