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
