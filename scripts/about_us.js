// Corousal

// var options = {
//   accessibility: true,
//   prevNextButtons: true,
//   pageDots: true,
//   wrapAround: true,
//   setGallerySize: false,
//   autoPlay: 3000,
//   arrowShape: {
//     x0: 10,
//     x1: 60,
//     y1: 50,
//     x2: 60,
//     y2: 45,
//     x3: 15,
//   },
// };

// var carousel = document.querySelector("[data-carousel]");
// var slides = document.getElementsByClassName("carousel-cell");
// var flkty = new Flickity(carousel, options);

var headerContainerWidthForDropDown =
  document.querySelector(".header-container").offsetWidth;
const dropDownWrappers = document.querySelectorAll(".drop-down-wrapper");
dropDownWrappers.forEach((dropDownWrapper) => {
  dropDownWrapper.style.width = `${headerContainerWidthForDropDown}px`;
});

// RESIZE LISTENER
function resizeEvents() {
  headerContainerWidthForDropDown =
    document.querySelector(".header-container").offsetWidth;
  dropDownWrappers.forEach((dropDownWrapper) => {
    dropDownWrapper.style.width = `${headerContainerWidthForDropDown}px`;
  });
}

document.querySelector(".main-logo").addEventListener("click", () => {
  window.location.href = "/";
});

// HEADER TRANSITION

const headerDiv = document.querySelector(".header");
gsap.to(headerDiv, {
  backgroundColor: "white",
  duration: 1,
  scrollTrigger: {
    trigger: ".main",
    start: "bottom 50%",
    scrub: true,
  },
});

gsap.to(".navigations > li > a", {
  color: "rgba(56, 56, 56, 1)",
  duration: 1,
  scrollTrigger: {
    trigger: ".main",
    start: "bottom 50%",
    scrub: true,
  },
});

gsap.to(".header-container > svg path", {
  fill: "rgba(11, 22, 33, 1)",
  duration: 1,
  scrollTrigger: {
    trigger: ".main",
    start: "bottom 50%",
    scrub: true,
  },
});

gsap.to(".line", {
  stroke: "rgba(11, 22, 33, 1)",
  duration: 1,
  scrollTrigger: {
    trigger: ".main",
    start: "bottom 50%",
    scrub: true,
  },
});

gsap.from(".main-body h1", {
  duration: 0.5,
  opacity: 0,
  y: 100,
});

gsap.from(".main-body span", {
  delay: 0.4,
  duration: 0.5,
  opacity: 0,
  y: 100,
});

gsap.from(".main-body .main-button", {
  delay: 0.8,
  duration: 0.5,
  opacity: 0,
  y: 100,
});

// HUMBERGER

const humburgerPlate = document.querySelector(".plates");
const humburgerSinglePlate = document.querySelector(".plates");
const menuScreen = document.querySelector(".menu-screen");
const body = document.querySelector("html");
const lineContainer = document.querySelector(".line");
var isMobileMenuOpened = false;
var strokeColor = `rgba(11, 22, 33, 1)`;

humburgerPlate.addEventListener("click", () => {
  // document.body.scrollTop = document.documentElement.scrollTop = 0;
  if (!isMobileMenuOpened) {
    gsap.to(menuScreen, {
      x: 0,
      duration: 1,
    });
    gsap.to(".line", {
      stroke: "white",
    });
    isMobileMenuOpened = true;
    strokeColor = lineContainer.style.stroke;
    body.style.overflow = "hidden";
  } else {
    gsap.to(menuScreen, {
      x: "100%",
      duration: 1,
    });
    gsap.to(".line", {
      stroke: `${strokeColor}`,
    });
    isMobileMenuOpened = false;
    body.style.overflow = "scroll";
  }
});

// Description And Contact

gsap.from(".description > h1", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".description",
    start: "top 70%",
  },
});

gsap.from(".description > p", {
  delay: 0.4,
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".description",
    start: "top 70%",
  },
});

if (screen.width > 767) {
  gsap.from(".contact-data-container", {
    x: "150%",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 40%",
    },
  });
}

gsap.from(".contact-data-container > h1", {
  delay: 0.5,
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 40%",
  },
});

gsap.from(".contact-data-container > a >.main-button", {
  delay: 0.9,
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 40%",
  },
});

// const headerContainer = document.querySelector(".header");
// const headerContainerWidth = headerContainer.offsetHeight;
// const dropDown = document.querySelector(".drop-down");

// dropDown.style.top = `${headerContainerWidth}px`;

// const aboutUsNav = document.querySelector(".about-us-nav");
// var isAboutUsActive = false;
// const dropDownTop = dropDown.style.transform;
// console.log(dropDownTop);
// aboutUsNav.addEventListener("click", () => {
//   if (isAboutUsActive) {
//     gsap.to(".drop-down", {
//       y: "-150%",
//       duration: 0.5,
//     });
//     isAboutUsActive = false;
//   } else {
//     gsap.to(".drop-down", {
//       y: 0,
//       duration: 0.5,
//     });
//     isAboutUsActive = true;
//   }
// });

const managersMembersTeam = document.querySelector("#managers_members_team");
const boardMembersTeam = document.querySelector("#board_members_team");

gsap.from("#managers_members_team > .team > .team-items", {
  x: "150%",
  duration: 0.8,
  scrollTrigger: {
    trigger: managersMembersTeam,
    start: "top 30%",
  },
});

gsap.from("#managers_members_team > .team > .team-items > div > h4", {
  y: 20,
  delay: 0.7,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: managersMembersTeam,
    start: "top 30%",
  },
});
gsap.from("#managers_members_team > .team > .team-items > div > p", {
  y: 20,
  delay: 0.7,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: managersMembersTeam,
    start: "top 30%",
  },
});
gsap.from("#board_members_team > .team > .team-items", {
  x: "150%",
  duration: 0.8,
  scrollTrigger: {
    trigger: boardMembersTeam,
    start: "top 30%",
  },
});

gsap.from("#board_members_team > .team > .team-items > div > h4", {
  y: 20,
  delay: 0.7,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: boardMembersTeam,
    start: "top 30%",
  },
});
gsap.from("#board_members_team > .team > .team-items > div > p", {
  y: 20,
  delay: 0.7,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: boardMembersTeam,
    start: "top 30%",
  },
});

// MORALS

gsap.from("#vision_moral > .moral-images", {
  x: `-150%`,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#vision_moral",
    start: "top 50%",
  },
});

gsap.from(
  "#vision_moral > .moral-description > h1, #vision_moral > .moral-description > p",
  {
    y: 20,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: "#vision_moral",
      start: "top 50%",
    },
  }
);
gsap.from("#values_moral > .moral-images", {
  x: `150%`,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#values_moral",
    start: "top 50%",
  },
});

gsap.from(
  "#values_moral > .moral-description > h1, #values_moral > .moral-description > p",
  {
    y: 20,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: "#values_moral",
      start: "top 50%",
    },
  }
);
gsap.from("#mission_moral > .moral-images", {
  x: `-150%`,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#mission_moral",
    start: "top 50%",
  },
});

gsap.from(
  "#mission_moral > .moral-description > h1, #mission_moral > .moral-description > p",
  {
    y: 20,
    duration: 1,
    delay: 0.7,
    opacity: 0,
    scrollTrigger: {
      trigger: "#mission_moral",
      start: "top 50%",
    },
  }
);

// NUMBERS

const number_control = document.querySelector(".number-details");
const counters = document.querySelectorAll(".number-data");

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let speed = 30;
    counters.forEach((counter, index) => {
      var value;
      var value_to_change = counter.querySelector(".number");
      function UpdateCounter() {
        const targetNumber = +value_to_change.dataset.target;
        const initialNumber = +value_to_change.dataset.initial;
        const incPerCount = targetNumber / speed;
        var originalNumber;
        if (initialNumber < targetNumber) {
          originalNumber = initialNumber + incPerCount;
          value_to_change.dataset.initial = originalNumber;
          value = Math.ceil(originalNumber);
          if (value <= targetNumber) {
            if (value < 10) {
              value = "0" + value;
            }
            value_to_change.innerText = value;
          }
          setTimeout(UpdateCounter, 40);
        } else {
          value = targetNumber;
          if (value < 10) {
            value = "0" + value;
          }
          value_to_change.innerText = value;
        }
      }
      UpdateCounter();
    });
    observer.unobserve(number_control);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(number_control);

// NUMBER SCROLL

const numberScoller = document.querySelector(".number-status-bar > div");
const numberCorousal = document.querySelector(".number-corousal");

numberCorousal.addEventListener("scroll", () => {
  var scrollPercent =
    (numberCorousal.scrollLeft /
      (numberCorousal.scrollWidth - numberCorousal.clientWidth)) *
    100;
  numberScoller.style.width = `${scrollPercent}%`;
});

// HISTORY SCROLL

const historyScoller = document.querySelector(".history-status-bar > div");
const historyCorousal = document.querySelector(".history-corousal");

historyCorousal.addEventListener("scroll", () => {
  var scrollPercent =
    (historyCorousal.scrollLeft /
      (historyCorousal.scrollWidth - historyCorousal.clientWidth)) *
    100;
  historyScoller.style.width = `${scrollPercent}%`;
});

function showEventMore(itemName) {
  const allEvent = ["first-event", "second-event", "third-event"];

  const paraContainer = document.querySelector(`#${itemName}`);
  const ParaToExtend = paraContainer.querySelector(`p`);
  if (ParaToExtend.classList.contains("extended")) {
    ParaToExtend.style.height = `100px`;
    ParaToExtend.classList.remove("extended");
    paraContainer.querySelector("a").innerText = "View More";
  } else {
    allEvent.forEach((event) => {
      const paraContainerForAll = document.querySelector(`#${event}`);
      const ParaToExtendForAll = paraContainerForAll.querySelector(`p`);
      ParaToExtendForAll.style.height = `100px`;
      ParaToExtendForAll.classList.remove("extended");
      paraContainerForAll.querySelector("a").innerText = "View More";
    });
    ParaToExtend.style.height = `${ParaToExtend.scrollHeight}px`;
    ParaToExtend.classList.add("extended");
    paraContainer.querySelector("a").innerText = "View Less";
  }
}

// SUPPORTING COMMUNITY EVENT CHANGE IMAGE

const communityImage = document.querySelector(".how-it-work-image");
console.log(communityImage);
const communityItems = document.querySelectorAll(".how-content");

communityItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    gsap.to(communityImage, {
      opacity: 0,
      duration: 0.3,
    });
    setTimeout(() => {
      if (index == 0) {
        communityImage.style.backgroundImage =
          "url('/res/image/about_us/about_us_leadership_1.png')";
      } else if (index == 1) {
        communityImage.style.backgroundImage =
          "url('/res/image/about_us/about_us_leadership_2.png')";
      } else if (index == 2) {
        communityImage.style.backgroundImage =
          "url('/res/image/about_us/about_us_leadership_3.png')";
      } else if (index == 3) {
        communityImage.style.backgroundImage =
          "url('/res/image/about_us/about_us_leadership_4.png')";
      }
    }, 300);
    gsap.to(communityImage, {
      opacity: 1,
      delay: 0.3,
      duration: 0.3,
    });
  });
});

const dropDownDivAboutUs = document.querySelector(".about-us-drop-down");
const dropDownDivBussinessStreams = document.querySelector(
  ".bussiness-stream-drop-down"
);
const dropDownDivMediaRoom = document.querySelector(".media-room-drop-down");
var isDropDownActive = false;

document.querySelector(".about-us-nav").addEventListener("click", () => {
  if (dropDownDivAboutUs.classList.contains("active")) {
    dropDownDivAboutUs.classList.remove("active");
    isAboutUsActive = false;
  } else {
    dropDownDivBussinessStreams.classList.remove("active");
    dropDownDivMediaRoom.classList.remove("active");
    setTimeout(
      () => {
        dropDownDivAboutUs.classList.add("active");
      },
      isDropDownActive ? 1000 : 0
    );
    isDropDownActive = true;
  }
});

document
  .querySelector(".bussiness-stream-nav")
  .addEventListener("click", () => {
    if (dropDownDivBussinessStreams.classList.contains("active")) {
      dropDownDivBussinessStreams.classList.remove("active");
      isDropDownActive = false;
    } else {
      dropDownDivAboutUs.classList.remove("active");
      dropDownDivMediaRoom.classList.remove("active");
      setTimeout(
        () => {
          dropDownDivBussinessStreams.classList.add("active");
        },
        isDropDownActive ? 1000 : 0
      );
      isDropDownActive = true;
    }
  });

document.querySelector(".media-room-nav").addEventListener("click", () => {
  if (dropDownDivMediaRoom.classList.contains("active")) {
    dropDownDivMediaRoom.classList.remove("active");
    isDropDownActive = false;
  } else {
    dropDownDivAboutUs.classList.remove("active");
    dropDownDivBussinessStreams.classList.remove("active");
    setTimeout(
      () => {
        dropDownDivMediaRoom.classList.add("active");
      },
      isDropDownActive ? 1000 : 0
    );
    isDropDownActive = true;
  }
});

const headerDivMain = document.querySelector(".header");
const allDropDown = document.querySelectorAll(".drop-down");

document.addEventListener("click", function (event) {
  if (!headerDivMain.contains(event.target)) {
    allDropDown.forEach((item) => {
      item.classList.remove("active");
      isDropDownActive = false;
    });
  }
});

// DROPDOWNVIEW ABOUT US

// DROPDOWNVIEW ABOUT US

var dropDownItems = [
  "our_story",
  "messages",
  "board_of_directors",
  "board_of_members",
  "our_vision",
  "our_mission",
  "our_values",
  "ghc_in_numbers",
  "our_history",
  "company_esg",
  "events",
  "awards",
  "hotels",
  "apartments",
  "food_beverage",
  "eatery_dining",
  "leisure_amusement",
];

document.querySelector("#awards").addEventListener("click", () => {
  document.querySelector(
    ".media-room-drop-down .drop-down-description > a"
  ).href = "/awards.html";
});

document.querySelector("#events").addEventListener("click", () => {
  document.querySelector(
    ".media-room-drop-down .drop-down-description > a"
  ).href = "/event_list.html";
});

var emptyDivs = document.querySelectorAll(".empty-div");
dropDownItems.forEach((item) => {
  console.log(item);
  document.querySelector(`#${item}`).addEventListener("mouseover", () => {
    console.log(
      document
        .querySelector(`.${item}-description`)
        .classList.contains("multiple")
    );
    if (
      document
        .querySelector(`.${item}-description`)
        .classList.contains("multiple")
    ) {
      console.log("HEREE");
      document.querySelector(`.${item}-description`).style.display = "grid";
    } else {
      document.querySelector(`.${item}-description`).style.display = "flex";
    }
    emptyDivs.forEach((empty) => {
      empty.style.display = "none";
    });
  });
  document.querySelector(`#${item}`).addEventListener("mouseleave", () => {
    document.querySelector(`.${item}-description`).style.display = "none";
    emptyDivs.forEach((empty) => {
      empty.style.display = "grid";
    });
  });
  document
    .querySelector(`.${item}-description`)
    .addEventListener("mouseover", () => {
      console.log("HERE 2");
      document.querySelector(`.${item}-description`).style.display = "flex";
      if (
        document
          .querySelector(`.${item}-description`)
          .classList.contains("multiple")
      ) {
        console.log("HERE 3");

        document.querySelector(`.${item}-description`).style.display = "grid";
      }
      emptyDivs.forEach((empty) => {
        empty.style.display = "none";
      });
    });
  document
    .querySelector(`.${item}-description`)
    .addEventListener("mouseleave", () => {
      document.querySelector(`.${item}-description`).style.display = "none";
      emptyDivs.forEach((empty) => {
        empty.style.display = "grid";
      });
    });
});

const dropDownSmallItems = [
  "doha_hotelspa",
  "doha_residence",
  "qatar_tourism_event",
  "hotels_event",
  "fact_event",
  "booking_event",
  "ohlala_event",
  "world_luxury_event",
  "world_travel_event",
  "qatar_tourism",
  "hotels_com",
  "fact",
  "booking",
  "ohlala",
  "world_luxury",
  "world_travel",
  "qatar_choice",
  "hotilier",
  "timeout_doha",
  // "fact_dining",
  "gulf_hotels",
  "fahed_foods",
  "nac",
  "feryah_pastry",
  "tawlt_beirut",
  "fino_pizza",
  "hungry_human",
  "park_900",
];

dropDownSmallItems.forEach((item) => {
  console.log(item);
  document.querySelector(`#${item}`).addEventListener("mouseover", () => {
    document.querySelector(`.${item}-description`).style.display = "flex";
  });
});
dropDownSmallItems.forEach((item) => {
  document.querySelector(`#${item}`).addEventListener("mouseleave", () => {
    document.querySelector(`.${item}-description`).style.display = "none";
  });
});
dropDownSmallItems.forEach((item) => {
  document
    .querySelector(`.${item}-description`)
    .addEventListener("mouseover", () => {
      document.querySelector(`.${item}-description`).style.display = "flex";
    });
});
dropDownSmallItems.forEach((item) => {
  document
    .querySelector(`.${item}-description`)
    .addEventListener("mouseleave", () => {
      document.querySelector(`.${item}-description`).style.display = "none";
    });
});

document.querySelector("#awards").addEventListener("click", () => {
  console.log("HERE")
  document.querySelector(
    ".media-room-drop-down .drop-down-description > a"
  ).href = "/awards.html";
});

document.querySelector("#events").addEventListener("click", () => {
  document.querySelector(
    ".media-room-drop-down .drop-down-description > a"
  ).href = "/event_list.html";
});

function clickAndDrag(
  selector,
  scroll_speed = 3,
  classOnEvent = "grabbed_elem"
) {
  const slider = document.querySelector(selector);
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDown = true;
    slider.classList.add(classOnEvent);
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    // prevent default child behavior
    document.body.addEventListener("click", function (event) {
      if (slider.contains(event.target)) {
        event.preventDefault();
      }
    });
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove(classOnEvent);
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove(classOnEvent);
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * scroll_speed; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}

clickAndDrag(".history-corousal");
clickAndDrag(".number-corousal");

const playButton = document.querySelector(".play-button");
const playButtonDiv = document.querySelector(".play-button-div");
const videoOverlay = document.querySelector(".video-overlay");
const playableVideo = document.querySelector(".video > video");

playButton.addEventListener("click", () => {
  playButtonDiv.style.display = "none";
  videoOverlay.style.display = "none";
  playableVideo.play();
});

// GOTO
window.addEventListener("load", () => {
  const hash = window.location.hash; // Get the fragment identifier (e.g., #story_div)
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling to the element
    }
  }
});

// ADJUST HEIGHT

var heightForCorousal =
  document.querySelector(".insight-corousal").offsetHeight;

if (screen.width <= 1200) {
  heightForCorousal += document.querySelector(
    ".insight-corousal-controller"
  ).offsetHeight;
  document.querySelector(
    ".insight-corousal-wrapper"
  ).style.height = `${heightForCorousal}px`;
}

// MESSAGE COROUSAL

const downButton = document.querySelector(".bottom-control-button");
const upButton = document.querySelector(".top-control-button");
const corousalPositions = document.querySelectorAll(".controller-position");

const maxCorousalCount = corousalPositions.length;

var corousalCount = 0;
corousalPositions[corousalCount].style.opacity = 1;

downButton.addEventListener("click", () => {
  if (corousalCount < maxCorousalCount - 1) {
    corousalCount++;
    corousalPositions.forEach((positionItem) => {
      positionItem.style.opacity = 0.4;
    });
    corousalPositions[corousalCount].style.opacity = 1;
    gsap.to(".insights", {
      y: `-${corousalCount * heightForCorousal}px`,
      duration: 1,
    });
  }
  if (corousalCount == maxCorousalCount - 1) {
    downButton.style.opacity = 0.4;
  }

  if (corousalCount > 0) {
    upButton.style.opacity = 1;
  }
});

upButton.addEventListener("click", () => {
  if (corousalCount > 0) {
    corousalCount--;
    corousalPositions.forEach((positionItem) => {
      positionItem.style.opacity = 0.4;
    });
    corousalPositions[corousalCount].style.opacity = 1;
    gsap.to(".insights", {
      y: `-${corousalCount * heightForCorousal}px`,
      duration: 1,
    });
  }
  if (corousalCount == 0) {
    upButton.style.opacity = 0.4;
  }

  if (corousalCount == maxCorousalCount - 2) {
    downButton.style.opacity = 1;
  }
});
