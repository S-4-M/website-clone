// gallery

let carousel = document.querySelector(".carousel-flex-list");
const tabList = document.querySelector(".tablist-flex-list");

const centerCarousel = () => {
  if (carousel.children.length % 2 === 0) {
    carousel.style.transform = `translateX(${655}px)`;
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

// gallery buttons

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

prevBtn.addEventListener("click", (event) => {
  updateGallery(event);
});
nextBtn.addEventListener("click", (event) => {
  updateGallery(event);
});

// updates
// fix bugs when change the number of carousel item

let isSliding = false;

const resetTransform = () => {
  // reset
  carousel.classList.remove("slide");
  carousel.style.transform = `translateX(${655}px)`;
};

const updateGallery = (event) => {
  // update carousel
  carousel = document.querySelector(".carousel-flex-list");
  const firstChild = carousel.firstElementChild;
  const lastChild = carousel.lastElementChild;

  const sign = event.target.innerText;

  if (isSliding === false) {
    isSliding = true;

    if (sign === "‹") {
      carousel.insertBefore(lastChild, firstChild);
      carousel.style.transform = `translateX(${-655}px)`;
      setTimeout(() => {
        carousel.classList.add("slide");
        carousel.style.transform = `translateX(${655}px)`;
      }, 1);
      setTimeout(() => {
        resetTransform();
      }, 1000);
    } else if (sign === "›") {
      carousel.classList.add("slide");
      carousel.style.transform = `translateX(${-655}px)`;
      setTimeout(() => {
        carousel.insertBefore(firstChild, lastChild.nextSibling);
        resetTransform();
      }, 1000);
    }

    setTimeout(() => {
      isSliding = false;
      updateTabs(carousel);
    }, 1100);
  }
};

const updateTabs = (carousel) => {
  const lastTab = document.querySelector(".current-tab");
  lastTab.classList.remove("current-tab");

  const currentImgNum = carousel.children[1].children[0].children[0].innerText;

  const currentTab = tabList.children[currentImgNum - 1];
  currentTab.classList.add("current-tab");
};

// tab buttons

const tabSort = (carousel, idx) => {
  const items = carousel.getElementsByTagName("li");
  const itemsArr = Array.from(items);

  itemsArr.sort((a, b) => {
    const classA = a.children[0].getAttribute("class");
    const classB = b.children[0].getAttribute("class");
    const numA = parseInt(classA.match(/\d+/)[0]);
    const numB = parseInt(classB.match(/\d+/)[0]);

    var positionA = (numA - idx + 4) % 4;
    var positionB = (numB - idx + 4) % 4;

    return positionA - positionB;
  });

  carousel.innerHTML = "";

  itemsArr.forEach((item) => {
    carousel.appendChild(item);
  });
  updateTabs(carousel);
};

const tabsButtons = document.querySelectorAll(".tablist-item");
tabsButtons.forEach((button, idx) => {
  button.addEventListener("click", (event) => {
    carousel.classList.add("hidden");
    setTimeout(() => {
      tabSort(carousel, idx);
      carousel.classList.remove("hidden");
    }, 100);
  });
});

const playGallery = () => {
  // while play=play/stop=stop
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
