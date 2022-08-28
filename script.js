const userInput = document.querySelectorAll("input");

const getDataBtn = document.querySelector(".submitbutton");

const form = document.querySelector("form");

const loginSuccess = document.querySelector(".loginSuccess");

const loginFailed = document.querySelector(".loginFailed");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function getUserInputFn() {
    const userName = userInput[0].value;
    const userPassword = userInput[1].value;
    if (userName === "khizarq313" &&
        userPassword === "ronaldo07" ) {
        loginSuccess.classList.toggle("resultVisible");
    } else {
        loginFailed.classList.toggle("resultVisible");
    }
}

getDataBtn.addEventListener("click",getUserInputFn);