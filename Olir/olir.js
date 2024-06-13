function bigImg(x) {
    x.style.height = "530px";
    x.style.width = "420px";
  }
  
  function normalImg(x) {
    x.style.height = "500px";
    x.style.width = "390px";
  }
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-rotator img');
    let index = 0;

    function rotateImages() {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }

    rotateImages(); // Show the first image immediately

    setInterval(rotateImages, 3000); // Rotate images every 3 seconds
});
