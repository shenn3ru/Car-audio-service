document.getElementById("repairText").addEventListener("click", function() {
    let contentBox = document.getElementById("contentBox");

  
    if (contentBox.style.backgroundColor === "white") {
        contentBox.style.backgroundColor = "#c2dcf3"; 
    } else {
        contentBox.style.backgroundColor = "white"; 
    }
});
