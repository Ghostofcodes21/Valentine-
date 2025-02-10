document.getElementById("yes-btn").addEventListener("click", function() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("love-message").style.display = "block";
  document.getElementById("teddy-container").style.display = "block";
});

document.getElementById("no-btn").addEventListener("click", function() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("sad-message").style.display = "block";
});