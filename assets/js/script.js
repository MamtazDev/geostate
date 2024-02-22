/**
 * @Script js for (Template/Project Name)
 * @project     - Project Name
 * @author      - Ashiqur Rahman
 * @created_by  -
 * @created_at  -
 * @modified_by -
 **/

$(window).on("load", function () {
  // code should be execute here
});

/**
 * ========================================================
 * this function execute when DOM element ready
 * ===========================================================
 */

$(document).ready(function () {
  /* code execute from here */
});

// faq_accordion_wrapper
function toggleAccordion(element) {
  element.classList.toggle("active");
}
const accordionTitles = document.querySelectorAll(".accordionTitle");
accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    const isActive = accordionTitle.classList.contains("is-open");
    // Remove is-open class from all accordion items
    accordionTitles.forEach((title) => {
      title.classList.remove("is-open");
    });
    // Add is-open class to the clicked accordion item
    if (!isActive) {
      accordionTitle.classList.add("is-open");
    }
  });
});
// accordion end

// Fancy slider
const container = document.getElementById("myCarousel");
const options = {
  infinite: true,
  Navigation: false,
  center: false,
  slidesPerPage: "auto",
  transition: false,
  // Dots: false,
};

new Carousel(container, options);
// fancy slider end

// splide slider
document.addEventListener("DOMContentLoaded", function () {
  var elms = document.getElementsByClassName("splide");
  for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount();
  }
});
// splide slider end
