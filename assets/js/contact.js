(function () {
  emailjs.init("user_RkRbANUjYB7TFd8KEUIBY");
})();

window.onload = function () {
  document
    .querySelector(".php-email-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_qm56szc", "template_ojczm9p", this).then(
        function () {
          document.querySelector(".loading").style.display = "none";
          document.querySelector(".sent-message").style.display = "block";
          document.querySelector(".error").style.display = "none";
        },
        function (error) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".sent-message").style.display = "none";
          document.querySelector(".loading").style.display = "none";
        }
      );
    });
};
