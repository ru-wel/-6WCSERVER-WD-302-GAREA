<template>
  <div id="app">
    <!-- NAV BAR -->
    <nav class="navbar navbar-expand-lg navbar-light-lg bg-light p-2">
      <div class="container">
        <router-link class="navbar-brand float-left fs-2 text-dark p-3 order-lg-1 fw-semibold"
          to="/">GAREA</router-link>
        <ul class="nav navbar-nav flex-row float-right order-lg-2 text-dark">
          <li class="nav-item">
            <router-link class="nav-link pr-3 fs-5 fw-medium" to="/properties">Places to Stay</router-link>
          </li>
        </ul>

        <ul class="nav navbar-nav flex-row float-right order-lg-3 text-dark">
          <li class="nav-item">
            <router-link class="nav-link fs-5 fw-medium" to="/createProperties">Create Properties</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-5 fw-medium" to="/viewProperties">View Properties</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white py-4">
      <div class="container">
        <div class="order-lg-3">
          <router-link class="navbar-brand float-left fs-2 text-dark p-3 fw-semibold"
          to="/">GAREA</router-link>
        </div>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navMenu">

          <div class="order-lg-2">
            <ul class="nav navbar-nav flex-row float-right text-dark">
              <li class="nav-item">
                <router-link class="nav-link fs-5 fw-medium" to="/createProperties">Create Properties</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link fs-5 fw-medium" to="/viewProperties">View Properties</router-link>
              </li>
            </ul>
          </div>

          <div class="order-lg-1">
            <ul class="nav navbar-nav flex-row float-right order-lg-2 text-dark">
              <li class="nav-item">
                <router-link class="nav-link pr-3 fs-5 fw-medium" to="/properties">Places to Stay</router-link>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </nav> -->

    <!-- Router View -->
    <!-- <div class="container mt-5"> -->
    <router-view></router-view>
    <!-- </div> -->
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
