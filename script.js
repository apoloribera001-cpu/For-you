function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "007@Mary") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("cover").style.display = "flex";
  } else {
    document.getElementById("error").innerText = "Senha errada 😅";
  }
}

const cover = document.getElementById("cover");
const book = document.getElementById("book");
const music = document.getElementById("music");

cover.onclick = () => {
  cover.style.display = "none";
  book.style.display = "block";
  music.play();
};

let pages = document.querySelectorAll(".page");
let current = 0;

document.getElementById("next").onclick = () => {
  pages[current].classList.remove("active");
  current++;

  if (current >= pages.length) current = 0;

  pages[current].classList.add("active");
};

/* salvar páginas */
document.querySelectorAll(".edit").forEach((el, i) => {
  el.innerHTML = localStorage.getItem("page" + i) || "";

  el.addEventListener("input", () => {
    localStorage.setItem("page" + i, el.innerHTML);
  });
});
