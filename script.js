// gallery

let carousel = document.querySelector(".carousel-flex-list");
const tabList = document.querySelector(".tablist-flex-list");

const centerCarousel = () => {
  if (carousel.children.length % 2 === 0) {
    carousel.classList.add("carousel-center-fix");
  }
};
centerCarousel();

const createGalleryTab = () => {
  const newTab = document.createElement("li");
  newTab.classList.add("tablist-item");
  const newTabBtn = document.createElement("button");
  newTabBtn.classList.add("tablist-button");
  newTab.appendChild(newTabBtn);
  tabList.appendChild(newTab);
};

const createTabs = () => {
  for (let i = 0; i < carousel.children.length; i++) {
    createGalleryTab();
  }
  const firstTab = document.querySelector(".tablist-item");
  firstTab.classList.add("current-tab");
};
createTabs();

// click on tab change img

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

prevBtn.addEventListener("click", (event) => {
  updateGallery(event);
});
nextBtn.addEventListener("click", (event) => {
  updateGallery(event);
});

const updateGallery = (event) => {
  // update carousel
  carousel = document.querySelector(".carousel-flex-list");
  const firstChild = carousel.firstElementChild;
  const lastChild = carousel.lastElementChild;

  const sign = event.target.innerText;

  carousel.classList.add("hidden");
  setTimeout(() => {
    if (sign === "‹") {
      carousel.insertBefore(lastChild, carousel.firstChild);
    } else {
      carousel.insertBefore(firstChild, carousel.lastChild);
    }
    carousel.classList.remove("hidden");

    updateTabs(carousel);
  }, 100);
};

const updateTabs = (carousel) => {
  const lastTab = document.querySelector(".current-tab");
  lastTab.classList.remove("current-tab");

  const currentImgNum = carousel.children[1].children[0].children[0].innerText;

  const currentTab = tabList.children[currentImgNum - 1];
  currentTab.classList.add("current-tab");
};

const playGallery = () => {
  // let index = 0;
  // const carousel = document.querySelector(".carousel-flex-list");
  // const totalSlides = Array.from(carousel.children);
  // let firstChild = carousel.firstElementChild;
  // const firstItem = document.querySelector(".carousel-item");
  // const copy = firstChild.cloneNode();
  // firstChild.appendChild(firstItem);
  // console.log(firstChild);
  // console.log(lastChild);
  // if (i == 4 || i == -4) {
  //   index = 0;
  //   carousel.style.transform = `translateX(${0}px)`;
  //   return;
  // }
  // const translateX = -i * 1300;
  // carousel.style.transform = `translateX(${translateX}px)`;
};

// const viewportWidthInPixels = window.innerWidth;
// const valueIn100Vw = viewportWidthInPixels + "px";
// console.log(viewportWidthInPixels);
// console.log(valueIn100Vw);
