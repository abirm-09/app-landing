let header = document.getElementById("main-header");
let navContent = document.createElement("div");
navContent.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid pt-3">
    <a class="navbar-brand" href="#"><img src="public/app-lab.png" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Key Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing  </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Testiminial   </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ  </a>
        </li>
      </ul>
       <a href="#"><button data-type="primary-button">Try for free</button></a>
    </div>
  </div>
</nav>`;
header.appendChild(navContent);
