let questionsFormEl = document.getElementById("questionsForm");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");

let hyderabad = document.getElementById("cityHyderabad");
let chennai = document.getElementById("cityChennai");
let delhi = document.getElementById("cityDelhi");
let mumbai = document.getElementById("cityMumbai");

let capitalCity = "Delhi";
let selectedCity = null;

hyderabad.addEventListener("change", function(event){
    selectedCity = event.target.value;
});

chennai.addEventListener("change", function(event){
    selectedCity = event.target.value;
});

delhi.addEventListener("change", function(event){
    selectedCity = event.target.value;
});

mumbai.addEventListener("change", function(event){
    selectedCity = event.target.value;
});

questionsFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    if (selectedCity === null){
        resultMsgEl.textContent = "Please select the answer";
        resultMsgEl.style.color = "#D20103";
    }else if (selectedCity === capitalCity){
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "#7DDA58";
    }else {
        resultMsgEl.textContent = "Wrong Answer!";
        resultMsgEl.style.color = "#D20103";
    }
});