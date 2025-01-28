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

// HUMBERGER

const humburgerPlate = document.querySelector(".plates");
const humburgerSinglePlate = document.querySelector(".plates");
const menuScreen = document.querySelector(".mobile-drop-down-items.initial");
const mobileDropDown = document.querySelector(".drop-down-mobile");
const body = document.querySelector("html");
var isMobileMenuOpened = false;

humburgerPlate.addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  if (!isMobileMenuOpened) {
        // gsap.to(menuScreen, {
    //   x: 0,
    //   duration: 1,
    // });
    menuScreen.classList.add("active");
    mobileDropDown.classList.add("active");
    isMobileMenuOpened = true;
    body.style.overflow = "hidden";
  } else {
    // gsap.to(menuScreen, {
    //   x: "-100%",
    //   duration: 1,
    // });
    menuScreen.classList.remove("active");
    mobileDropDown.classList.remove("active");
    mobileListItems.forEach((item) => {
      closeMobileNavBarItem(item.id);
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
  "pick_team_event",
  "new_year_event",
  "arcade_games_event",
  "carnival_game_event",
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
  "michelin",
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

document.querySelector(".main-logo").addEventListener("click", () => {
  window.location.href = "/";
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


const markingModel = {
  "our_story-description": ["our_story"],
  "messages-description": ["messages"],
  "board_of_directors-description": ["board_of_directors"],
  "board_of_members-description": ["board_of_members"],
  "our_vision-description": ["our_vision"],
  "our_mission-description": ["our_mission"],
  "our_values-description": ["our_values"],
  "ghc_in_numbers-description": ["ghc_in_numbers"],
  "our_history-description": ["our_history"],
  "company_esg-description": ["company_esg"],
  "hotels-description": ["hotels"],
  "doha_hotelspa-description": ["doha_hotelspa"],
  "doha_residence-description": ["doha_residence"],
  "apartments-description": ["apartments"],
  "food_beverage-description": ["food_beverage"],
  "fahed_foods-description": ["fahed_foods"],
  "eatery_dining-description": ["eatery_dining"],
  "gulf_hotels-description": ["gulf_hotels"],
  "nac-description": ["nac"],
  "feryah_pastry-description": ["feryah_pastry"],
  "tawlt_beirut-description": ["tawlt_beirut"],
  "fino_pizza-description": ["fino_pizza"],
  "hungry_human-description": ["hungry_human"],
  "leisure_amusement-description": ["leisure_amusement"],
  "park_900-description": ["park_900"],
  "events-description": ["events"],
  "awards-description": ["awards"],
  "pick_team_event-description": ["pick_team_event"],
  "new_year_event-description": ["new_year_event"],
  "arcade_games_event-description": ["arcade_games_event"],
  "carnival_game_event-description": ["carnival_game_event"],
  "qatar_tourism-description": ["qatar_tourism"],
  "hotels_com-description": ["hotels_com"],
  "fact-description": ["fact"],
  "michelin-description": ["michelin"],
  "booking-description": ["booking"],
  "ohlala-description": ["ohlala"],
  "world_luxury-description": ["world_luxury"],
  "world_travel-description": ["world_travel"],
  "qatar_choice-description": ["qatar_choice"],
  "hotilier-description": ["hotilier"],
  "timeout_doha-description": ["timeout_doha"],
};

const markingModelKeys = Object.keys(markingModel);
markingModelKeys.forEach((markingKeys) => {
  document
    .querySelector(`.${markingKeys}`)
    .addEventListener("mouseover", () => {
      markingModel[markingKeys].forEach((toLineDiv) => {
        var liItemToActive = document.querySelector(`#${toLineDiv}`);
        if (!liItemToActive.classList.contains("active")) {
          liItemToActive.classList.add("active");
        }
      });
    });
  document
    .querySelector(`.${markingKeys}`)
    .addEventListener("mouseleave", () => {
      markingModel[markingKeys].forEach((toLineDiv) => {
        var liItemToActive = document.querySelector(`#${toLineDiv}`);
        if (liItemToActive.classList.contains("active")) {
          liItemToActive.classList.remove("active");
        }
      });
    });
});

// MOBILE NAV BAR

function openMobileNavBarItem(navId) {
  gsap.to(`#${navId}`, {
    x: 0,
    duration: 0.8,
  });
}

function closeMobileNavBarItem(navId) {
  gsap.to(`#${navId}`, {
    x: "-100%",
    duration: 0.8,
  });
}

