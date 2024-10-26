<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <div class="container-fluid container">
        <router-link class="navbar-brand fs-2 text-dark p-3 fw-semibold" to="/">GAREA</router-link>

        <button class="navbar-toggler no-shadow border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mx-auto mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link pr-3 fs-5 fw-medium" to="/properties">Places to Stay</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav text-dark">
            <li class="nav-item">
              <router-link class="nav-link fs-5 fw-medium" to="/addProperties">Add Properties</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-5 fw-medium" to="/viewProperties">View Properties</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view></router-view>

    <div class="mt-5">

      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon
                icon="fa-brands fa-facebook" /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon
                icon="fa-brands fa-x-twitter" /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon
                icon="fa-brands fa-google" /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon
                icon="fa-brands fa-instagram" /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon
                icon="fa-brands fa-linkedin-in" /></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><font-awesome-icon
                icon="fa-brands fa-github" /></a>
          </section>
        </div>

        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2024 Copyright:
          <a class="text-white" href="" style="text-decoration: none;">GAREA</a>
        </div>
      </footer>
    </div>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #576c51;
}
</style>
