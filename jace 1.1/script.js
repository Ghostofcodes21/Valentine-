document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const switchToSignup = document.querySelector(".switch-to-signup");
  const switchToLogin = document.querySelector(".switch-to-login");

  switchToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.add("active");
  });

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.remove("active");
  });
});