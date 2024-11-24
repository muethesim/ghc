const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    if (content.classList.contains("expanded")) {
      content.style.maxHeight = null;
      content.classList.remove("expanded");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("expanded");

      collapsibleHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherContent = otherHeader.nextElementSibling;
          otherContent.style.maxHeight = null;
          otherContent.classList.remove("expanded");
        }
      });
    }
  });
});

const hamburger = document.querySelector(".hamburger");
const social_media_menu = document.getElementById("social-media-menu");
const social_media_links = document.getElementById("social-media-links");
const change_language = document.querySelector("change-language");

hamburger.addEventListener("click", () => {
  if (social_media_menu.classList.contains("activate")) {
    social_media_menu.classList.remove("activate");
    hamburger.classList.remove("activate");
    social_media_links.classList.remove("activate");
    change_language.classList.remove("activate");
  } else {
    social_media_menu.classList.add("activate");
    hamburger.classList.add("activate");
    setTimeout(() => {
      social_media_links.classList.add("activate");
      change_language.classList.add("activate");
    }, 300);
  }
});
