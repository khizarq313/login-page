const userInput = document.querySelectorAll("input");

const getDataBtn = document.querySelector(".submitbutton");

const form = document.querySelector("form");

const loginSuccess = document.querySelector(".loginSuccess");

const loginFailed = document.querySelector(".loginFailed");

const overlay = document.querySelector(".overlay")

const successBtn = document.querySelector(".success-btn");

const failBtn = document.querySelector(".fail-btn");

const loginBox = document.querySelector(".login-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

function checkUserInput(userInput) {
    const userName = userInput[0].value;
    const userPassword = userInput[1].value;
    if (userName === "khizarq313" &&
    userPassword === "ronaldo07" ) {
    loginSuccess.classList.add("visible");
} else {
    loginFailed.classList.add("visible");
}
}

function getUserInputFn() {
    loginBox.classList.add("login-box-invisible")
    overlay.classList.add("visible");
    checkUserInput(userInput);
}

function closeResultWindow() {
    loginBox.classList.remove("login-box-invisible")
    overlay.classList.remove("visible")
    loginSuccess.classList.remove("visible");
    loginFailed.classList.remove("visible");
}

getDataBtn.addEventListener("click",getUserInputFn);

successBtn.addEventListener("click",closeResultWindow);

failBtn.addEventListener("click",closeResultWindow);

overlay.addEventListener("click",closeResultWindow)