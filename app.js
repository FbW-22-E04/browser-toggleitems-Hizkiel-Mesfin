// Selecting elements

const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list-items");
const btn = document.querySelector(".btn");
const selected = document.querySelector(".selected");

// Events

// showing list items
btn.addEventListener("click", () => {
  list.classList.toggle("hide");
  if (list.classList.contains("hide")) {
    btn.innerText = "Show destination";
    selected.style.visibility = "hidden";
    selected.style.opacity = "0";
  } else {
    btn.innerText = "Hide destination";
    listItems.forEach((el) => {
      el.style.backgroundColor = "aqua";
      el.style.color = "#000";
    });
  }
});

// Sele
listItems.forEach((li) => {
  li.addEventListener("click", () => {
    selected.innerText = `You selected ${li.textContent}`;
    selected.style.visibility = "visible";
    selected.style.opacity = "1";

    [...listItems].some((el) => {
      if (selected.textContent.includes(el.textContent)) {
        el.style.backgroundColor = "blue";
        el.style.color = "#fff";
      } else {
        el.style.backgroundColor = "aqua";
        el.style.color = "#000";
      }
    });
  });
});
