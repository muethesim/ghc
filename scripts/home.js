// SET INSIGHT HEIGHT

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

const number_control = document.getElementById("number_control");
const counters = document.querySelectorAll(".numbers .datas .value");

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 30;
    counters.forEach((counter, index) => {
      var val;
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.dataset.initial;
        const incPerCount = targetNumber / speed;
        var originalNumber;
        if (initialNumber < targetNumber) {
          originalNumber = initialNumber + incPerCount;
          counter.dataset.initial = originalNumber;
          val = Math.ceil(originalNumber);
          if (val <= targetNumber) {
            if (val < 10) {
              val = "0" + val;
            }
            val = val + "+";
            counter.innerText = val;
          }
          setTimeout(UpdateCounter, 40);
        } else {
          val = targetNumber;
          if (val < 10) {
            val = "0" + val;
          }
          counter.innerText = val + "+";
        }
      }
      UpdateCounter();
    });
    console.log("HERE");
    observer.unobserve(number_control);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(number_control);

// Insights Corousal

const insight_containers = document.querySelector(".insight-datas-container");

const contents = document.querySelectorAll(".insights-data");
const nextBtn = document.getElementById("next_btn");
const prevBtn = document.getElementById("prev_btn");
const positionData = document.querySelectorAll(".insight-position-data");
const insightDiv = document.querySelector(".insights");
const wrapper = document.querySelector(".insight-wrapper");
const controller = document.querySelector(".insight-controllers");

let currentIndex = 0;
var translateLength = 0;

positionData[currentIndex].classList.add("active");
prevBtn.classList.add("disabled");
wrapper.style.height = `${insightDiv.offsetHeight}px`;

if (screen.width < 790) {
  wrapper.style.height = `${
    insightDiv.offsetHeight + controller.offsetHeight
  }px`;
  wrapper.style.width = `${insightDiv.offsetWidth}px`;
}

function updateContent(index, containerHeight) {
  positionData.forEach((content) => content.classList.remove("active"));
  positionData[index].classList.add("active");
  translateLength = index * containerHeight;
  if (screen.width < 790) {
    insight_containers.style.transform = `translateX(-${translateLength}px)`;
  } else {
    insight_containers.style.transform = `translateY(-${translateLength}px)`;
  }
}

nextBtn.addEventListener("click", () => {
  if (screen.width < 790) {
    var containerHeight = insightDiv.offsetWidth;
  } else {
    var containerHeight = insightDiv.offsetHeight;
  }
  prevBtn.classList.remove("disabled");
  if (currentIndex == contents.length - 2) {
    nextBtn.classList.add("disabled");
  }
  if (currentIndex < contents.length - 1) {
    currentIndex = currentIndex + 1;
    updateContent(currentIndex, containerHeight);
  }
});

prevBtn.addEventListener("click", () => {
  var containerHeight = insightDiv.offsetHeight;
  nextBtn.classList.remove("disabled");
  if (currentIndex == 1) {
    prevBtn.classList.add("disabled");
  }
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
    updateContent(currentIndex, containerHeight);
  }
});

// PROJECT COROUSAL

const project_corousal = document.querySelector(".project-corousal");
const projectNextBtn = document.getElementById("project_control_next");
const projectPrevBtn = document.getElementById("project_control_prev");
const scrollNumSpan = document.querySelector(
  ".corousal-control-data .corousal-initial"
);
const totalScrollNumSpan = document.querySelector(
  ".corousal-control-data .corousal-final"
);
const scrollLen = 420;
var scrollTime = 1;

const scrollWidth = project_corousal.scrollWidth;
const clientWidth = project_corousal.clientWidth;
const scrollLeft = project_corousal.scrollLeft;
const totalScrolls = Math.ceil((scrollWidth - clientWidth - scrollLeft) / 300);
totalScrollNumSpan.innerHTML = totalScrolls;

projectPrevBtn.classList.add("disabled");

projectNextBtn.addEventListener("click", () => {
  projectPrevBtn.classList.remove("disabled");
  if (scrollTime < totalScrolls) {
    project_corousal.scrollBy({ left: scrollLen, behavior: "smooth" });
    scrollTime += 1;
    scrollNumSpan.innerHTML = scrollTime;
    if (scrollTime == totalScrolls) {
      projectNextBtn.classList.add("disabled");
    }
  }
});

projectPrevBtn.addEventListener("click", () => {
  projectNextBtn.classList.remove("disabled");
  if (scrollTime > 1) {
    project_corousal.scrollBy({ left: -scrollLen, behavior: "smooth" });
    scrollTime -= 1;
    scrollNumSpan.innerHTML = scrollTime;
    if (scrollTime == 1) {
      projectPrevBtn.classList.add("disabled");
    }
  }
});
