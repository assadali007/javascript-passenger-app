

let countEl = document.getElementById("count-el")

let  saveEl = document.getElementById('save-el');

let count =0;

console.log("outer count",count);
function increment() {
    count  = count+1;
    countEl.textContent = count;

}
function save() {

    let number = count + " - ";
    saveEl.textContent += number;
    // when hit the button save  the increment value will be 0
    countEl.textContent = 0;
    count =0;

}

