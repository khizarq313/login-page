const signupPage = document.querySelector(".signup-page");
const loginPage = document.querySelector(".login-page");
const signupNavBtn = document.querySelector(".signup-nav-btn");
const loginNavBtn = document.querySelector(".login-nav-btn");
const wrapper = document.querySelector(".wrapper");

const openSignupPage = () => {
    loginPage.classList.add("slideDown");
    signupPage.classList.add("slideDown");
    loginPage.classList.remove("slideUp");
    signupPage.classList.remove("slideUp");
    document.title = "Sign up";
}

const openLoginPage = () => {
    signupPage.classList.add("slideUp");
    loginPage.classList.add("slideUp");
    loginPage.classList.remove("slideDown");
    signupPage.classList.remove("slideDown");
    document.title = "Log in";
}

signupNavBtn.addEventListener("click", openSignupPage);
loginNavBtn.addEventListener("click", openLoginPage);