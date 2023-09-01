// gallery

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

prevBtn.addEventListener("click", (event) => {
  updateGallery(event);
});
nextBtn.addEventListener("click", (event) => {
  updateGallery(event);
});

// const tabList = document.querySelector(".tablist-flex-list");
// const tabItems = Array.from(tabList.children);
// console.log(tabItem);

const updateGallery = (event) => {
  // update carousel
  const carousel = document.querySelector(".carousel-flex-list");
  const firstChild = carousel.firstElementChild;
  const lastChild = carousel.lastElementChild;

  const sign = event.target.innerText;
  // console.log(sign);

  carousel.classList.add("hidden");
  setTimeout(() => {
    if (sign === "‹") {
      // bug if press too fast
      carousel.insertBefore(lastChild, carousel.firstChild);
    } else {
      carousel.insertBefore(firstChild, carousel.lastChild);
    }
    carousel.classList.remove("hidden");
  }, 500);

  // update tablist (index to tablist child)
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

const viewportWidthInPixels = window.innerWidth;
const valueIn100Vw = viewportWidthInPixels + "px";
console.log(viewportWidthInPixels);
console.log(valueIn100Vw);
