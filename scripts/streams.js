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

// HUMBERGER

const humburgerPlate = document.querySelector(".plates");
const humburgerSinglePlate = document.querySelector(".plates");
const menuScreen = document.querySelector(".menu-screen");
const body = document.querySelector("html");
var isMobileMenuOpened = false;

humburgerPlate.addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  if (!isMobileMenuOpened) {
    gsap.to(menuScreen, {
      x: 0,
      duration: 1,
    });
    isMobileMenuOpened = true;
    body.style.overflow = "hidden";
  } else {
    gsap.to(menuScreen, {
      x: "100%",
      duration: 1,
    });
    isMobileMenuOpened = false;
    body.style.overflow = "scroll";
  }
});

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

// SHIVERING
const headerNavItems = document.querySelectorAll(".navigations > li > a > div");
headerNavItems.forEach((element) => {
  var elementWidth = element.offsetWidth;
  elementWidth += 0.2;
  element.style.width = `${elementWidth}px`;
});

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

// ANIMATE HOTEL DESCRIPTION
const leftHotelDescriptions = document.querySelectorAll(
  ".left-hotel-details > .hotel-detail-description"
);
const rightHotelDescriptions = document.querySelectorAll(
  ".right-hotel-details > .hotel-detail-description"
);

leftHotelDescriptions.forEach((leftDescriptionDiv) => {
  gsap.from(leftDescriptionDiv, {
    x: "200%",
    duration: 0.5,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });

  var hotelDescriptionHeading = leftDescriptionDiv.querySelector(
    ".hotel-detail-content > h1"
  );
  var hotelDescriptionParagraph = leftDescriptionDiv.querySelector(
    ".hotel-detail-content > p"
  );
  var hotelDescriptionButton = leftDescriptionDiv.querySelector(".main-button");

  gsap.from(hotelDescriptionHeading, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 0.4,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });

  gsap.from(hotelDescriptionParagraph, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 0.75,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });

  gsap.from(hotelDescriptionButton, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });
});

rightHotelDescriptions.forEach((leftDescriptionDiv) => {
  gsap.from(leftDescriptionDiv, {
    x: "-200%",
    duration: 0.5,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });

  var hotelDescriptionHeading = leftDescriptionDiv.querySelector(
    ".hotel-detail-content > h1"
  );
  var hotelDescriptionParagraph = leftDescriptionDiv.querySelector(
    ".hotel-detail-content > p"
  );
  var hotelDescriptionButton = leftDescriptionDiv.querySelector(".main-button");

  gsap.from(hotelDescriptionHeading, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 0.4,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });

  gsap.from(hotelDescriptionParagraph, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 0.75,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });

  gsap.from(hotelDescriptionButton, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    delay: 1,
    scrollTrigger: {
      trigger: leftDescriptionDiv,
      start: "top 80%",
    },
  });
});
