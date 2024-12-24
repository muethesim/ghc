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
  window.location.href = "/"
})

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

 

// EVENT ITEMS HOVER
const events = document.querySelectorAll(".event");

events.forEach((eventItem) => {
  var eventItemOverlay = eventItem.querySelector(".event-overlay");
  if (screen.width > 1050) {
    eventItem.addEventListener("mouseover", () => {
      gsap.to(eventItemOverlay, {
        y: 0,
        duration: 0.5,
      });
    });

    eventItem.addEventListener("mouseleave", () => {
      gsap.to(eventItemOverlay, {
        y: `100%`,
        duration: 0.5,
      });
    });
  } else {
    gsap.to(eventItemOverlay, {
      y: 0,
      duration: 0,
    });
  }
});

const allEvents = document.querySelectorAll(".event");

allEvents.forEach((eventItem) => {
  if (eventItem.classList.contains("second-event")) {
    gsap.from(eventItem, {
      x: "150%",
      duration: 0.8,
      scrollTrigger: {
        trigger: eventItem,
        start: "top 70%",
      },
    });
  } else {
    gsap.from(eventItem, {
      x: "-150%",
      duration: 0.8,
      scrollTrigger: {
        trigger: eventItem,
        start: "top 70%",
      },
    });
  }
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

document.querySelector("#awards").addEventListener("mouseover", () => {
  document.querySelector(
    ".media-room-drop-down .drop-down-description > a"
  ).href = "/awards.html";
});

document.querySelector("#events").addEventListener("mouseover", () => {
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

 
document.querySelector("#awards").addEventListener("mouseover", () => {
  document.querySelector(".media-room-drop-down .drop-down-description > a").href = "/awards.html"
})

document.querySelector("#events").addEventListener("mouseover", () => {
  document.querySelector(".media-room-drop-down .drop-down-description > a").href = "/event_list.html"
})