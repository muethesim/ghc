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
        console.log(targetNumber);
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

// COLLAPSABLE WIDGET

const collapsibleHeaders = document.querySelectorAll(".collapsible-header");

collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const circularPlus = header.querySelector(".circular-plus");
    console.log(header);

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
ventureDataContainer.forEach((ventureData, index) => {
  var ventureImageContainer = ventureData.querySelector(
    ".venture-image-opaque"
  );
  var ventureLearnButton = ventureData.querySelector(".main-button")
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
