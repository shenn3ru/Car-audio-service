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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".galerie .image");
  const logo = document.querySelector(".logo");
  
  if (logo) {
      logo.addEventListener("click", function () {
          location.reload();
      });
  }
  
  images.forEach(img => {
      img.addEventListener("click", function () {
          openImage(this);
      });
  });

  function openImage(img) {
      let existingOverlay = document.querySelector(".image-overlay");
      if (existingOverlay) {
          existingOverlay.remove();
      }

      let overlay = document.createElement("div");
      overlay.classList.add("image-overlay");
      
      let enlargedImg = document.createElement("img");
      enlargedImg.src = img.src;
      enlargedImg.alt = img.alt;
      enlargedImg.classList.add("enlarged-image");

      let comment = document.createElement("p");
      comment.textContent = "Am lucrat cu urmatoarele modele ";
      comment.classList.add("image-comment");

      overlay.appendChild(enlargedImg);
      overlay.appendChild(comment);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", function () {
          overlay.remove();
      });
  }
});

const style = document.createElement('style');
style.innerHTML = `
.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.enlarged-image {
  max-width: 80%;
  max-height: 70%;
  border: 5px solid white;
  border-radius: 10px;
}

.image-comment {
  color: white;
  font-size: 18px;
  margin-top: 10px;
}`;
document.head.appendChild(style);



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



