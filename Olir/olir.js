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


class SpecialHeader extends HTMLElement {
  connectedCallback() {
   this.innerHTML = `
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid text-center">
      <a class="navbar-brand" href="#"><img src="https://olirdesigns.com/wp-content/uploads/2022/03/Logo.svg" width="40" height="40"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style="padding:30px;">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html" style="color:black; padding-left:250px;"><b>Home</b></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about-us.html" style="color:black; padding-left:50px;"><b>About Us</b></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:black; padding-left:50px; ">
              <b>Services</b>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="graphics.html" style="color:black;">Graphic Design</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/website-design-thanjavur/" style="color:black;">Website Design</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/ui-ux-design-thanjavur/" style="color:black;">UI UX Design</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/domain-and-hosting-thanjavur/" style="color:black;">Domain & Hosting</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="https://olirdesigns.com/our-services/digital-marketing-thanjavur/" style="color:black;">Digital Marketing</a></li>
            </ul>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="" style="color:black;"><b>Works</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="blog.html" style="color:black;"><b>Blog</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="career.html" style="color:black;"><b>Career</b></a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="contact-us.html" style="color:black;"><b>Contact Us</b></a>
          </li> 
        </ul>
      </div>
    </div>
  </nav>
    `
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
   this.innerHTML = `
   <div class="container-fluid bg-black">
            <footer class="py-3 my-4">
              <div class="list-inline">
                <div class="icon-container">
                  <ul class="list-inline-justify-content-center pb-3 mb-3">
                    <img src="https://olirdesigns.com/wp-content/uploads/2021/05/footer.png" width="200px" ><br><br>
                    <li class="list-inline-item" class="text-center"><i class="bi bi-linkedin" style = "color : white;" ></i><a href="#" class="nav-link px-2"></a></li>
                    <li class="list-inline-item" class="text-center"><i class="bi bi-instagram" style = "color : white;"></i><a href="#" class="nav-link px-2"></a></li>
                    <li class="list-inline-item" class="text-center"><i class="bi bi-facebook" style = "color : white;" ></i><a href="#" class="nav-link px-2"></a></li>
                    <li class="list-inline-item" class="text-center"><i class="bi bi-file-earmark-pdf-fill" style = "color : white;"></i><a href="#" class="nav-link px-2"></a></li>
                  </ul> 
                  <p class="text-center text-body-secondary" style="color:white;">&copy; Copyrights 2023. Olir Designs Private Limited.All Rights Reserved.Terms and Conditions | Privacy Policy</p>
                </div>
              </div> 
              <div class="whatsapp-float">
                <div class="whatsapp-icon" id="whatsapp-icon">
                    <i class="bi bi-whatsapp ico"></i>
                    <div class="tooltip" id="tooltip">Chat us on WhatsApp</div>
                </div>
            </div>
            </footer> 
          </div> 
   `
  }
}

customElements.define('special-header',SpecialHeader)
customElements.define('special-footer',SpecialFooter)