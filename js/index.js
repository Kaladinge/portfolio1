const buttons = document.querySelectorAll("button");

const changes = document.querySelectorAll(".project-block .changes");

const span = document.querySelectorAll(".project-block .changes span");
console.log(span);

buttons.forEach(function(button, item) {
    console.log(changes[item]);
    console.log(item);

    button.onclick = function showText() {
        
            changes[item].classList.toggle("show");
            console.log("oi!");
            console.log(changes[item]);

    window.onclick = function(event) {
    if (!event.target.matches(".text-button")) {
        if (changes[item].classList.contains('show')) {
            changes[item].classList.remove('show');
        }
    }
}
       
        

        
        

    }

    
    
});