const firstFeatureImg = document.querySelector("#first-feature-img");
const secondFeatureImg = document.querySelector("#second-feature-img");
const thirdFeatureImg = document.querySelector("#third-feature-img");
const backToBtn = document.querySelector(".backtotop-btn");


window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
    if (scrollHeight > 2775 && screen.width > 480) {
        firstFeatureImg.classList.add("show-img");
    } if (scrollHeight > 1250 && screen.width < 480) {
      firstFeatureImg.classList.add("show-img");
  }
});


window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
      if (scrollHeight > 3460 && this.screen.width > 480) {
          secondFeatureImg.classList.add("show-img");
      } if (scrollHeight > 1430 && screen.width < 480) {
        secondFeatureImg.classList.add("show-img");
      }
  });
  

window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
    if (scrollHeight > 4040 && this.screen.width > 480) {
        thirdFeatureImg.classList.add("show-img");
    } if(scrollHeight > 1560 && screen.width < 480) {
      thirdFeatureImg.classList.add("show-img");
    }
});

backToBtn.addEventListener("click", function() {
  scrollTo(0, 0);
})

1405
1570
1715