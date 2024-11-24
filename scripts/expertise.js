const hamburger = document.querySelector(".hamburger");
const social_media_menu = document.getElementById("social-media-menu");
const social_media_links = document.getElementById("social-media-links");
const change_language = document.querySelector("change-language");

hamburger.addEventListener("click", () => {
  if (social_media_menu.classList.contains("activate")) {
    social_media_menu.classList.remove("activate");
    hamburger.classList.remove("activate");
    social_media_links.classList.remove("activate");
    change_language.classList.remove("activate")

  } else {
    social_media_menu.classList.add("activate");
    hamburger.classList.add("activate");
    setTimeout(() => {
      social_media_links.classList.add("activate");
      change_language.classList.add("activate")
    }, 300);
  }
});


const expertise_list_item = document.querySelector(".expertise-list-item");
const drop_down = document.querySelector(".drop-down");
const expertise_drop_down = document.querySelector(".expertise-drop-down");
const main = document.querySelector(".main")
var list_out = true;
var container_out = true;

expertise_list_item.addEventListener("mouseover", () => {
  drop_down.classList.add("active");
  expertise_drop_down.classList.add("active");
  list_out = false;
});

expertise_list_item.addEventListener("mouseout", () => {
  if (container_out && list_out) {
    drop_down.classList.remove("active");
    expertise_drop_down.classList.remove("active");
  }
});

expertise_list_item.addEventListener("mouseout", () => {
  setTimeout(() => {
    list_out = true;
  }, 200);
});

expertise_drop_down.addEventListener("mouseover", () => {
  drop_down.classList.add("active");
  expertise_drop_down.classList.add("active");
  container_out = false;
});

main.addEventListener("mouseover", () => {
  if (container_out && list_out) {
    drop_down.classList.remove("active");
    expertise_drop_down.classList.remove("active");
  }
});

expertise_drop_down.addEventListener("mouseout", () => {
  container_out = true;
  if (container_out && list_out) {
    drop_down.classList.remove("active");
    expertise_drop_down.classList.remove("active");
  }
});

expertise_drop_down.addEventListener("mouseout", () => {
  setTimeout(() => {
    container_out = true;
  }, 200);
});
