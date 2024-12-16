// Corousal

var options = {
  accessibility: true,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  autoPlay: 3000,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15,
  },
};

var carousel = document.querySelector("[data-carousel]");
var slides = document.getElementsByClassName("carousel-cell");
var flkty = new Flickity(carousel, options);

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    image.style.backgroundPosition = x + "px";
  });
});

// Number

const number_control = document.querySelector(".numbers");
const counters = document.querySelectorAll(".numbers .data");

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    let speed = 30;
    counters.forEach((counter, index) => {
      var value;
      var value_to_change = counter.querySelector(".number-data");
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
            value = value + "+";
            value_to_change.innerText = value;
          }
          setTimeout(UpdateCounter, 40);
        } else {
          value = targetNumber;
          if (value < 10) {
            value = "0" + value;
          }
          value_to_change.innerText = value + "+";
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

// HEADER TARNSITION

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

// COLLAPSABLE WIDGET

const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const circularPlus = header.querySelector(".circular-plus");

    if (content.classList.contains("expanded")) {
      content.style.maxHeight = null;
      content.classList.remove("expanded");
      circularPlus.classList.remove("expanded");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("expanded");
      circularPlus.classList.add("expanded");
      collapsibleHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherCircularPlus = otherHeader.querySelector(".circular-plus");
          const otherContent = otherHeader.nextElementSibling;
          otherContent.style.maxHeight = null;
          otherContent.classList.remove("expanded");
          otherCircularPlus.classList.remove("expanded");
        }
      });
    }
  });
});

// COLLAPSIBLE IMAGE CHANGE

var collapsibleCurrentIndex = 0;

const collapsibleContainers = document.querySelectorAll(".collapsible");
collapsibleContainers.forEach((container, index) => {
  var image_url = "";
  if (index == 0) {
    image_url = '"/res/image/home_expand.png"';
  } else if (index == 1) {
    image_url = '"/res/image/home_contact.jpeg"';
  } else if (index == 2) {
    image_url = '"/res/image/home_expand.png"';
  } else if (index == 3) {
    image_url = '"/res/image/home_contact.jpeg"';
  } else if (index == 4) {
    image_url = '"/res/image/home_expand.png"';
  } else if (index == 5) {
    image_url = '"/res/image/home_contact.jpeg"';
  }
  container.addEventListener("mouseover", () => {
    if (index != collapsibleCurrentIndex) {
      gsap.to(".horizon-image-container", {
        opacity: 0,
        duration: 0.2,
      });
      gsap.to(".horizon-image-container", {
        backgroundImage: `url(${image_url})`,
        delay: 0.2,
      });
      gsap.to(".horizon-image-container", {
        opacity: 1,
        delay: 0.2,
        duration: 0.2,
      });
      collapsibleCurrentIndex = index;
    }
  });
});

// VENTURES

const ventureDataContainer = document.querySelectorAll(".venture-data");
if (screen.width > 1024) {
  ventureDataContainer.forEach((ventureData, index) => {
    var ventureImageContainer = ventureData.querySelector(
      ".venture-image-opaque"
    );
    var ventureLearnButton = ventureData.querySelector(".main-button");
    ventureData.addEventListener("mouseover", () => {
      gsap.to(ventureImageContainer, {
        x: "100%",
        duration: 1,
      });
      gsap.to(ventureLearnButton, {
        backgroundColor: "rgba(226, 180, 26, 1)",
        duration: 0.3,
      });
    });
    ventureData.addEventListener("mouseleave", () => {
      gsap.to(ventureImageContainer, {
        x: "0%",
        duration: 1,
      });
      gsap.to(ventureLearnButton, {
        backgroundColor: "rgba(56, 56, 56, 1)",
        duration: 0.3,
      });
    });
  });
}

// VENTURES SMALL SCREEN
else {
  ventureDataContainer.forEach((ventureData, index) => {
    var ventureImageContainer = ventureData.querySelector(
      ".venture-image-opaque"
    );
    gsap.to(ventureImageContainer, {
      x: "100%",
    });
  });
}

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

// MAP

var mapAreas = [
  ".asia-1",
  ".asia-2",
  ".australia-1",
  ".africa-1",
  ".europe-1",
  ".europe-2",
  ".south-america-1",
  ".america-1",
  ".america-2",
  ".america-3",
];

mapAreas.forEach((loc) => {
  var placePin = document.querySelector(`${loc}-pin`);
  var placeCircle = document.querySelector(`${loc}-circle`);
  var placeText = document.querySelector(`${loc}-text`);
  placePin.addEventListener("mouseover", () => {
    placeText.style.display = "block";
    gsap.to(placeText, {
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(placeCircle, {
      fill: "rgba(226, 180, 26, 1)",
      duration: 0.3,
    });
  });
  placeCircle.addEventListener("mouseover", () => {
    placeText.style.display = "block";
    gsap.to(placeText, {
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(placeCircle, {
      fill: "rgba(226, 180, 26, 1)",
      duration: 0.3,
    });
  });
  placePin.addEventListener("mouseleave", () => {
    placeText.style.display = "none";
    gsap.to(placeText, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(placeCircle, {
      fill: "rgba(65, 199, 223, 1)",
      duration: 0.3,
    });
  });
  placeCircle.addEventListener("mouseleave", () => {
    placeText.style.display = "none";
    gsap.to(placeText, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(placeCircle, {
      fill: "rgba(65, 199, 223, 1)",
      duration: 0.3,
    });
  });
});

// Description

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

// TEXT ANIMATIONS
gsap.from(".ex-horizon > h1", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".ex-horizon",
    start: "top 70%",
  },
});

gsap.from(".ongoing-ventures > h1", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".ongoing-ventures",
    start: "top 60%",
  },
});

gsap.from(".ongoing-ventures > p", {
  delay: 0.4,
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".ongoing-ventures",
    start: "top 60%",
  },
});

gsap.from(".locations > h1", {
  duration: 0.5,
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".locations",
    start: "top 60%",
  },
});

document.querySelector("#close-removable").addEventListener("click", () => {
  document.querySelector(".removable").style.display = `none`;
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
];

dropDownItems.forEach((item) => {
  document.querySelector(`#${item}`).addEventListener("mouseover", () => {
    document.querySelector(`.${item}-description`).style.display = "flex";
    document.querySelector(".empty-div").style.display = "none";
  });
  document.querySelector(`#${item}`).addEventListener("mouseleave", () => {
    document.querySelector(`.${item}-description`).style.display = "none";
    document.querySelector(".empty-div").style.display = "flex";
  });
  document
    .querySelector(`.${item}-description`)
    .addEventListener("mouseover", () => {
      document.querySelector(`.${item}-description`).style.display = "flex";
      document.querySelector(".empty-div").style.display = "none";
    });
  document
    .querySelector(`.${item}-description`)
    .addEventListener("mouseleave", () => {
      document.querySelector(`.${item}-description`).style.display = "none";
      document.querySelector(".empty-div").style.display = "flex";
    });
});

// HOVER

const navigationList = document.querySelectorAll(".navigations > li")

console.log(navigationList)

navigationList.forEach((nav) => {
  console.log(nav)
  nav.addEventListener("mouseover", () => {
    nav.querySelector("span").style.color = "#41c7df"
  })
  nav.addEventListener("mouseleave", () => {
    nav.querySelector("span").style.color = "white"
  })
})