document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader and show the content when the page is fully loaded
    window.onload = function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    };
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const intervalTime = 2000; 
    const initialDelay = 200;
    const loadingTime = 2000; 
    const loadingIcon = document.getElementById('loading-icon');
  
    function showImage(index) {
      images.forEach((img, idx) => {
        img.classList.toggle('active', idx === index);
      });
    }
  
    function nextImage() {
      loadingIcon.classList.add('show');
      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
        loadingIcon.classList.remove('show');
      }, loadingTime);
    }

    showImage(currentImageIndex);
  
    setTimeout(() => {
  
      setInterval(nextImage, intervalTime);
    }, initialDelay);
  });
  