/* =========================================================
MIN ALICE | WEBSITE JAVASCRIPT
========================================================= */

/* =========================================================
BUSINESS CONFIGURATION
========================================================= */

const SITE_CONFIG = {

businessName: "MIN ALICE",

phoneDisplay: "+254 792 888 171",

emailDisplay: "minalicekenya@gmail.com",

whatsappNumber: "254792888171"

};

/* =========================================================
PAGE INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

/* =======================================================
MOBILE NAVIGATION
======================================================= */

const menuToggle =
document.querySelector(".menu-toggle");

const mainNav =
document.querySelector("#mainNav");

if (menuToggle && mainNav) {

menuToggle.addEventListener("click", () => {

  const isOpen =
    mainNav.classList.toggle("open");


  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );


  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? "Close menu"
      : "Open menu"
  );


  menuToggle.textContent =
    isOpen ? "×" : "☰";

});


/*
  Close menu after selecting a page.
*/

mainNav
  .querySelectorAll("a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );

      menuToggle.textContent = "☰";

    });

  });


}

/* =======================================================
HERO IMAGE SLIDESHOW
======================================================= */

const heroSlides =
document.querySelectorAll(".hero-slide");

if (heroSlides.length > 1) {

let currentSlide = 0;

/*
  Time each image stays visible.

  6000 = 6 seconds
  5000 = 5 seconds
  8000 = 8 seconds
*/

const slideInterval = 6000;


/*
  Start slideshow.
*/

setInterval(() => {

  /*
    Hide current image.
  */

  heroSlides[currentSlide]
    .classList.remove("active");


  /*
    Move to next image.
  */

  currentSlide =
    (currentSlide + 1) % heroSlides.length;


  /*
    Show next image.
  */

  heroSlides[currentSlide]
    .classList.add("active");

}, slideInterval);


}

/* =======================================================
BUSINESS INFORMATION
======================================================= */

document
.querySelectorAll("[data-business-phone]")
.forEach(element => {

  element.textContent =
    SITE_CONFIG.phoneDisplay;

});


document
.querySelectorAll("[data-business-email]")
.forEach(element => {

  element.textContent =
    SITE_CONFIG.emailDisplay;

});


/*
Current year.
*/

document
.querySelectorAll("[data-year]")
.forEach(element => {

  element.textContent =
    new Date().getFullYear();

});


/*
WhatsApp links.
*/

document
.querySelectorAll("[data-whatsapp-link]")
.forEach(element => {

  element.href =
    `https://wa.me/${SITE_CONFIG.whatsappNumber}`;

  element.target = "_blank";

  element.rel = "noopener noreferrer";

});


/* =======================================================
PRODUCT SEARCH & FILTER
======================================================= */

const search =
document.querySelector("#productSearch");

const filterButtons =
document.querySelectorAll(".filter-btn");

const productCards =
[
...document.querySelectorAll(".product-card")
];

const emptyState =
document.querySelector("#noProducts");

let activeFilter = "all";

function filterProducts() {

const searchTerm =
  (search?.value || "")
    .trim()
    .toLowerCase();


let visibleProducts = 0;


productCards.forEach(card => {

  const category =
    card.dataset.category;


  const categoryMatches =
    activeFilter === "all" ||
    category === activeFilter;


  const textMatches =
    card.textContent
      .toLowerCase()
      .includes(searchTerm);


  const shouldShow =
    categoryMatches &&
    textMatches;


  card.style.display =
    shouldShow ? "" : "none";


  if (shouldShow) {

    visibleProducts++;

  }

});


if (emptyState) {

  emptyState.hidden =
    visibleProducts !== 0;

}


}

filterButtons.forEach(button => {

button.addEventListener("click", () => {

  filterButtons.forEach(btn => {

    btn.classList.remove("active");

  });


  button.classList.add("active");


  activeFilter =
    button.dataset.filter;


  filterProducts();

});


});

if (search) {

search.addEventListener(
  "input",
  filterProducts
);


}

/* =======================================================
PRODUCT FROM URL
======================================================= */

const orderForm =
document.querySelector("#orderForm");

if (orderForm) {

const params =
  new URLSearchParams(
    window.location.search
  );


const productParam =
  params.get("product");


const productSelect =
  document.querySelector("#orderProduct");


if (
  productParam &&
  productSelect
) {

  [
    ...productSelect.options
  ].forEach(option => {

    if (
      option.value.toLowerCase() ===
      productParam.toLowerCase()
    ) {

      option.selected = true;

    }

  });

}


/* =====================================================
   ORDER FORM -> WHATSAPP
   ===================================================== */

orderForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const getValue = selector => {

      return (
        document
          .querySelector(selector)
          ?.value
          .trim() || ""
      );

    };


    const customerName =
      getValue("#customerName");

    const customerPhone =
      getValue("#customerPhone");

    const product =
      getValue("#orderProduct");

    const quantity =
      getValue("#orderQuantity");

    const packaging =
      getValue("#packaging");

    const buyerType =
      getValue("#buyerType");

    const deliveryLocation =
      getValue("#deliveryLocation");

    const notes =
      getValue("#orderNotes");


    const message = [

      `Hello ${SITE_CONFIG.businessName},`,

      "",

      "I would like to place an order / request a quotation.",

      "",

      `Name: ${customerName}`,

      `Phone: ${customerPhone}`,

      `Product: ${product}`,

      `Quantity: ${quantity}`,

      `Packaging: ${packaging}`,

      `Buyer type: ${buyerType}`,

      `Delivery location: ${deliveryLocation || "Not specified"}`,

      `Additional requirements: ${notes || "None"}`,

      "",

      "Please confirm availability and pricing."

    ].join("\n");


    /*
      Open WhatsApp using the real
      MIN ALICE business number.
    */

    const whatsappURL =
      `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });


}

/* =======================================================
CONTACT FORM
======================================================= */

const contactForm =
document.querySelector("#contactForm");

if (contactForm) {

/*
  The contact form is submitted normally
  to the configured FormSubmit email address.

  No blocking alert is needed because
  minalicekenya@gmail.com is the real
  MIN ALICE business email.
*/


}

});
