(function brickStacksInit() {
    const buttons = document.getElementsByClassName("js-rotator-button");

    const rotate = function() {
        const thisStackId = this.getAttribute("data-stackId");
        const thisStack = document.getElementById(thisStackId);

        //add CSS class that triggers the stacking animation
        thisStack.classList.add("is-selected");

        //Close all but the clicked one

        for (let button of buttons) {
            button.setAttribute("aria-expanded","false");
        }

        //Open the clicked one

        this.setAttribute("aria-expanded","true");
    }

    for (let button of buttons) {
        button.addEventListener("click",rotate);
    }
    
}());