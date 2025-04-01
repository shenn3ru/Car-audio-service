document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header");
  let isMouseOverNavbar = false;

  navbar.addEventListener("mouseenter", function () {
      isMouseOverNavbar = true;
      navbar.classList.remove("hidden-navbar");
  });

  navbar.addEventListener("mouseleave", function () {
      isMouseOverNavbar = false;
      hideNavbarAfterDelay();
  });

  window.addEventListener("scroll", function () {
      if (!isMouseOverNavbar) {
          navbar.classList.add("hidden-navbar");
      }
  });

  document.addEventListener("mousemove", function (event) {
      if (event.clientY < 50) {
          navbar.classList.remove("hidden-navbar");
      }
  });

  function hideNavbarAfterDelay() {
      setTimeout(() => {
          if (!isMouseOverNavbar) {
              navbar.classList.add("hidden-navbar");
          }
      }, 500);
  }
});


document.getElementById("repairText").addEventListener("click", function() {
    let contentBox = document.getElementById("contentBox");

  
    if (contentBox.style.backgroundColor === "white") {
        contentBox.style.backgroundColor = "#c2dcf3"; 
    } else {
        contentBox.style.backgroundColor = "white"; 
    }
});

const images = document.querySelectorAll('.image');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.5  
});

images.forEach(image => {
  observer.observe(image);
});
