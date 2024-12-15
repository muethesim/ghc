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

const headerContainer = document.querySelector(".header");
const headerContainerWidth = headerContainer.offsetHeight;
const dropDown = document.querySelector(".drop-down");

dropDown.style.top = `${headerContainerWidth}px`;

const aboutUsNav = document.querySelector(".about-us-nav");
var isAboutUsActive = false;
const dropDownTop = dropDown.style.transform;
console.log(dropDownTop);
aboutUsNav.addEventListener("click", () => {
  if (isAboutUsActive) {
    gsap.to(".drop-down", {
      y: "-150%",
      duration: 0.5,
    });
    isAboutUsActive = false;
  } else {
    gsap.to(".drop-down", {
      y: 0,
      duration: 0.5,
    });
    isAboutUsActive = true;
  }
});

// SHIVERING
const headerNavItems = document.querySelectorAll(".navigations > li > a > div");
headerNavItems.forEach((element) => {
  var elementWidth = element.offsetWidth;
  elementWidth += 3;
  element.style.width = `${elementWidth}px`;
});