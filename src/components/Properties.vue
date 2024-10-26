<template>
  <div class="mt-5 pt-5">
    <div class="bg-image d-flex justify-content-center align-items-center">
      <h1 class="text-white my-5 py-5 fw-semibold text-uppercase display-1">Places To Stay</h1>
    </div>

    <div class="container my-5">
      <h1 class="text-center text-uppercase text-dark fw-semibold mb-4">Aesthetic Favorites</h1>

      <div class="row-g-0">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 px-5 d-flex justify-content-center">
          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/AF-1.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Meadowview Manor</h5>
                <p class="item-location text-secondary">Bern, Switzerland</p>
                <p class="card-text">Php 30,000</p>
              </div>
            </div>
          </div>

          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/AF-2.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Comfort Cove Retreat</h5>
                <p class="item-location text-secondary">Paris, France</p>
                <p class="card-text">Php 25,000</p>
              </div>
            </div>
          </div>

          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/AF-3.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">White Haven Villa</h5>
                <p class="item-location text-secondary">Barcelona, Spain</p>
                <p class="card-text">Php 25,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h1 class="text-center text-uppercase text-dark fw-semibold mb-4">Affordable Picks</h1>

      <div class="row-g-0">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 px-5 d-flex justify-content-center">
          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/AP-1.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Tranquil Blue Heaven</h5>
                <p class="item-location text-secondary">Miami, Florida</p>
                <p class="card-text">Php 15,000</p>
              </div>
            </div>
          </div>

          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/AP-2.jpeg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Vista Villa</h5>
                <p class="item-location text-secondary">Toronto, Canada</p>
                <p class="card-text">Php 18,000</p>
              </div>
            </div>
          </div>

          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/AP-3.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Ivory Retreat</h5>
                <p class="item-location text-secondary">Cebu, Philippines</p>
                <p class="card-text">Php 15,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <h1 class="text-center text-uppercase text-dark fw-semibold mb-4">Family Friendly</h1>

      <div class="row-g-0">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 px-5 d-flex justify-content-center">
          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/FF-1.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Cozy Corner Residence</h5>
                <p class="item-location text-secondary">Notting Hill, London</p>
                <p class="card-text">Php 25,000</p>
              </div>
            </div>
          </div>

          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/FF-2.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Serenity Sanctuary</h5>
                <p class="item-location text-secondary">Los Angeles, California</p>
                <p class="card-text">Php 30,000</p>
              </div>
            </div>
          </div>

          <div class="col pt-2">
            <div class="card rounded-5 h-100">
              <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5" src="../assets/places-to-stay/FF-4.jpg" />
              <div class="card-body text-center">
                <h5 class="card-title item-name">Celestial Solitude</h5>
                <p class="item-location text-secondary">Manila, Philippines</p>
                <p class="card-text">Php 20,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'GAREA',
    props: {
      msg: String
    }
    }
    </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #000000;
  }

  .bg-image {
    background-image: url("../assets/try-bg.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    padding: 42px 0 50px;
    z-index: 1;
  }

  .bg-image:after {
    background-color: rgba(0, 0, 0, 0.2);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  /* .bg-image h1 {
    font-size: 5rem;
  } */

  .card {
    background: linear-gradient(#f2f2f0 50%, #ffffff 50%);
    background-size: 100% 200%;
    background-position: 0 0%;
    border-radius: 5px;   
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
}

</style>
  
