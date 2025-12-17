document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("homeSection");
    const loginSection = document.getElementById("loginSection");
    const loginIcon = document.getElementById("loginIcon");
    const homeBtn = document.getElementById("homeBtn");
    const yearHome = document.getElementById("yearHome");
    const yearLogin = document.getElementById("yearLogin");

    const currentYear = new Date().getFullYear();
    if (yearHome) yearHome.textContent = currentYear;
    if (yearLogin) yearLogin.textContent = currentYear;

    function showHome() {
        homeSection.classList.add("active");
        loginSection.classList.remove("active");
    }

    function showLogin() {
        loginSection.classList.add("active");
        homeSection.classList.remove("active");
    }

    if (loginIcon) {
        loginIcon.addEventListener("click", showLogin);
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", showHome);
    }
});
