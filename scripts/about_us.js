const hamburger = document.querySelector(".hamburger");
const social_media_menu = document.getElementById("social-media-menu");
const social_media_links = document.getElementById("social-media-links");
const change_language = document.querySelector("change-language");
const navbar = document.querySelector(".navbar")


hamburger.addEventListener("click", () => {
  if (screen.width > 1025) {
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
  } else {
    if (navbar.classList.contains("activate")) {
      navbar.classList.remove("activate");
      hamburger.classList.remove("activate");
      document.body.style.overflow = "";
    } else {
      navbar.classList.add("activate");
      hamburger.classList.add("activate");
      document.body.style.overflow = "hidden";
    }
  }
});

const expertise_list_item = document.querySelector(".expertise-list-item");
const drop_down = document.querySelector(".drop-down");
const expertise_drop_down = document.querySelector(".expertise-drop-down");
const main = document.querySelector(".main");
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

// VIDEO

const videoPlayButton = document.querySelector(".play-pause-button");
const videoPlayButtonImage = videoPlayButton.querySelector("img");
const video = document.querySelector(".video-div video");
const videoPauseLayout = document.querySelector(".video-pause-layout");
const playerController = document.querySelector(".player-control");
const playTextBtn = document.querySelector(".play-text-btn");
const videoProgress = document.querySelector(".video-progress");
videoPlayButtonImage.src = "../res/svg/assets/pause_button_blue.svg";

videoPlayButton.addEventListener("click", () => {
  if (video.paused == true) {
    videoPauseLayout.classList.remove("activate");
    playerController.classList.remove("paused");
    video.play();
    videoPlayButtonImage.src = "../res/svg/assets/pause_button_blue.svg";
  } else {
    videoPauseLayout.classList.add("activate");
    playerController.classList.add("paused");
    video.pause();
    videoPlayButtonImage.src = "../res/svg/assets/play_button_blue.svg";
  }
});

playTextBtn.addEventListener("click", () => {
  videoPauseLayout.classList.remove("activate");
  playerController.classList.remove("paused");
  video.play();
  videoPlayButtonImage.src = "../res/svg/assets/pause_button_blue.svg";
});

video.addEventListener("timeupdate", () => {
  var percentage = (video.currentTime / video.duration) * 100;
  videoProgress.style.width = `${percentage}%`;
});

// Leadership

const leadership_containers = document.querySelector(
  ".leadership-datas-container"
);

const contents = document.querySelectorAll(".leaderships-data");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");
const positionData = document.querySelectorAll(".leadership-position-data");
const imageDiv = document.querySelector(".leaderships-image");
let currentIndex = 0;
const containerHeight = imageDiv.offsetHeight;
console.log(containerHeight);
var translateLength = 0;

positionData[currentIndex].classList.add("active");
prevBtn.classList.add("disabled");

function updateContent(index) {
  positionData.forEach((content) => content.classList.remove("active"));
  positionData[index].classList.add("active");
  translateLength = index * containerHeight;
  console.log(translateLength);
  leadership_containers.style.transform = `translateY(-${translateLength}px)`;
}

nextBtn.addEventListener("click", () => {
  prevBtn.classList.remove("disabled");
  if (currentIndex == contents.length - 2) {
    nextBtn.classList.add("disabled");
  }
  if (currentIndex < contents.length - 1) {
    currentIndex = currentIndex + 1;
    updateContent(currentIndex);
  }
});

prevBtn.addEventListener("click", () => {
  nextBtn.classList.remove("disabled");
  if (currentIndex == 1) {
    prevBtn.classList.add("disabled");
  }
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    updateContent(currentIndex);
  }
});

// HISTORY
const historyCorousal = document.querySelector(".history-corousal");
const progressBar = document.querySelector(".history-status-bar div")
historyCorousal.addEventListener("scroll", () => {
  var scrollPercent =
    (historyCorousal.scrollLeft /
      (historyCorousal.scrollWidth - historyCorousal.clientWidth)) *
    100;
    progressBar.style.width = `${scrollPercent}%`
});
