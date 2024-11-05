let user = document.getElementById("user");
let section_2 = document.getElementById("section-2");

user.addEventListener("click", (e) => {
  e.preventDefault();
  section_2.style.display = "block";
  user.classList.add("active");
});
