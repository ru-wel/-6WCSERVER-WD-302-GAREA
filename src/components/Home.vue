<template>
    <div class="mt-5 pt-5">
        <div class="row mb-5">
            <div class="col-sm-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/carousel/home-slide-1.jpg" class="d-block w-100 c-img" alt="...">
                            <div class="carousel-caption top-0 mt-4 d-md-block">
                                <p class="mt-5 pt-5 fs-2 text-light">Explore, Discover, Travel</p>
                                <h1 class="fw-semibold text-uppercase display-1">Travel Around <br> the World</h1>
                                <!-- <button type="button" class="btn btn-dark mt-3 fs-6 px-4 py-2 text-uppercase">Discover
                                    More</button> -->
                                    <router-link class="btn btn-dark mt-3 fs-6 px-4 py-2 text-light text-uppercase" to="/properties">Discover More</router-link>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src="../assets/carousel/home-slide-2.jpg" class="d-block w-100 c-img" alt="...">
                            <div class="carousel-caption top-0 mt-4 d-md-block">
                                <p class="mt-5 pt-5 fs-2 text-light">Explore, Discover, Travel</p>
                                <h1 class="fw-semibold text-uppercase display-1">Discover The<br> New Places</h1>
                                <!-- <button type="button" class="btn btn-dark mt-3 fs-6 px-4 py-2 text-uppercase">Discover More</button> -->
                                <router-link class="btn btn-dark mt-3 fs-6 px-4 py-2 text-light text-uppercase" to="/properties">Discover More</router-link>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src="../assets/carousel/home-slide-3.jpg" class="d-block w-100 c-img" alt="...">
                            <div class="carousel-caption top-0 mt-4 d-md-block">
                                <p class="mt-5 pt-5 fs-2 text-light">Explore, Discover, Travel</p>
                                <h1 class="fw-semibold text-uppercase display-1">Make Your Tour Worthwhile</h1>
                                <!-- <button type="button" class="btn btn-dark mt-3 fs-6 px-4 py-2 text-uppercase">Discover More</button> -->
                                <router-link class="btn btn-dark mt-3 fs-6 px-4 py-2 text-light text-uppercase" to="/properties">Discover More</router-link>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <h1 class="text-center text-uppercase text-dark fw-semibold mb-4">Top Properties</h1>

            <div class="row-g-0">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 px-5 d-flex justify-content-center">
                    <div class="col pt-2">
                        <div class="card rounded-5 h-100">
                            <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5"
                                src="../assets/top-properties/TP-1.jpg" />
                            <div class="card-body text-center">
                                <h5 class="card-title item-name">Tranquil Blue Heaven</h5>
                                <p class="item-location text-secondary">Miami, Florida</p>
                                <p class="card-text">Php 15,000</p>
                            </div>
                        </div>
                    </div>

                    <div class="col pt-2">
                        <div class="card rounded-5 h-100">
                            <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5"
                                src="../assets/top-properties/TP-2.jpg" />
                            <div class="card-body text-center">
                                <h5 class="card-title item-name">Cozy Corner Residence</h5>
                                <p class="item-location text-secondary">Notting Hill, London</p>
                                <p class="card-text">Php 25,000</p>
                            </div>
                        </div>
                    </div>

                    <div class="col pt-2">
                        <div class="card rounded-5 h-100">
                            <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5"
                                src="../assets/top-properties/TP-3.jpg" />
                            <div class="card-body text-center">
                                <h5 class="card-title item-name">Meadowview Manor</h5>
                                <p class="item-location text-secondary">Bern, Switzerland</p>
                                <p class="card-text">Php 30,000</p>
                            </div>
                        </div>
                    </div>

                    <div class="col pt-2">
                        <div class="card rounded-5 h-100">
                            <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5"
                                src="../assets/top-properties/TP-4.jpg" />
                            <div class="card-body text-center">
                                <h5 class="card-title item-name">Serenity Sanctuary</h5>
                                <p class="item-location text-secondary">Los Angeles, California</p>
                                <p class="card-text">Php 30,000</p>
                            </div>
                        </div>
                    </div>

                    <div class="col pt-2">
                        <div class="card rounded-5 h-100">
                            <img class="card-img-top w-100 pt-3 pb-2 px-3 rounded-5"
                                src="../assets/top-properties/TP-5.jpeg">
                            <div class="card-body text-center">
                                <h5 class="card-title item-name">Vista Villa</h5>
                                <p class="item-location text-secondary">Toronto, Canada</p>
                                <p class="card-text">Php 18,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="offer mb-5 pb-5">
            <h1 class="pt-5 pb-4 text-uppercase fw-semibold text-dark">What We Offer</h1>
            <div class="container">
                <div class="row row-gap-3 d-flex justify-content-center">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card card-wwo text-center border-0 shadow rounded-0 p-3 my-2 px-3 mx-auto h-100">
                            <div class="text-center pt-3 rounded-circle crd">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                    class="bi bi-house-add-fill icon p-2 rounded-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0" />
                                    <path
                                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                    <path
                                        d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title offer-title text-uppercase fw-semibold pb-2">Flexible Booking</h5>
                                <p class="card-text offer-text text-secondary">We pride ourselves on offering flexible
                                    booking options designed to suit your convenience. Whether you're planning a weekend
                                    getaway or an extended stay, GAREA can help you book a stay that fits your needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card card-wwo text-center border-0 shadow rounded-0 p-3 my-2 px-3 mx-auto h-100">
                            <div class="text-center pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                    class="bi bi-buildings-fill icon rounded-circle p-2" viewBox="0 0 16 16">
                                    <path
                                        d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title offer-title text-uppercase fw-semibold pb-2">Diverse Accomodations
                                </h5>
                                <p class="card-text offer-text text-secondary">We provide a wide range of properties
                                    anywhere in the world. Our curated selections ensures unforgettable stays, whether
                                    you're seeking a rustic retreat or a new unique experience with your loved ones.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card card-wwo text-center border-0 shadow rounded-0 p-3 my-2 px-3 mx-auto h-100">
                            <div class="text-center pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                    class="bi bi-people-fill icon rounded-circle p-2" viewBox="0 0 16 16">
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title offer-title text-uppercase fw-semibold pb-2">Curated Experience
                                </h5>
                                <p class="card-text offer-text text-secondary">Experience luxury and comfort like never
                                    before with our curated properties. Our meticulously selected properties offer a
                                    blend of style, elegance, and convenience that ensures a truly unforgettable stay.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card card-wwo text-center border-0 shadow rounded-0 p-3 my-2 px-3 mx-auto h-100">
                            <div class="text-center pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                    class="bi bi-phone-vibrate-fill icon p-2 rounded-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title offer-title text-uppercase fw-semibold pb-2">24/7 Support
                                </h5>
                                <p class="card-text offer-text text-secondary">Our 24/7 support service for GAREA
                                    ensures that you have round-the-clock assistance for any issues or queries related
                                    to your properties. Our dedicated team is always available to provide reliable
                                    support.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="card card-wwo text-center border-0 shadow rounded-0 p-3 my-2 px-3 mx-auto h-100">
                            <div class="text-center pt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                                    class="bi bi-currency-exchange icon rounded-circle p-2" viewBox="0 0 16 16">
                                    <path
                                        d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title offer-title text-uppercase fw-semibold pb-2">Secure Payments
                                </h5>
                                <p class="card-text offer-text text-secondary">We provide a comprehensive solution for
                                    secure payments, ensuring peace of mind for both property owners and tenants in the
                                    realm of GAREA. We protect transactions to foster trust and reliability with our
                                    customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-3">
            <div class="row ms-auto">
                <div class="col-lg-6 col-md-12 col-12">
                    <img src="../assets/why-choose-garea.jpg" class="img-fluid w-100 rounded my-sm-4" id="wiggle" alt="">
                </div>

                <div class="col-lg-6 col-md-12 col-12 px-lg-5 pe-sm-5">
                    <div class="py-2 px-2 wcg mt-sm-4">
                        <h1 class="fw-semibold text-uppercase text-start text-dark mt-3">Why Choose GAREA?</h1>
                        <p class="py-3 text-secondary">At GAREA, we believe that finding the perfect place to stay is about more than just booking a property—it's about creating unforgettable experiences.  Our commitment to quality assurance means you can trust that each accommodation meets the highest standards. Our service can allow you to immerse yourself fully in the experience. We strive to create a seamless experience from booking to check-out, ensuring your journey is hassle-free and enjoyable. 
                        </p>

                        <p class="fw-medium fs-5">Choose GAREA for a memorable getaway that truly connects you to the heart of the place you’re visiting!</p>
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
    },
    name: 'App'
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

.carousel .carousel-indicators button {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fff;
    margin: 0 5px;
}

.carousel-item {
    height: 600px;
}

/* .carousel-item h1 {
    font-size: 5rem;
} */

.c-img {
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.offer {
    background-color: #f8f8f8;
}

.card .icon {
    color: #f2f2f0;
    background-color: #737f5b;
}

.offer-text {
    font-size: 15px;
}

.card {
    background: linear-gradient(#f2f2f0 50%, #ffffff 50%);
    background-size: 100% 200%;
    background-position: 0 0%;
    border-radius: 5px;   
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
}

.card-wwo {
    background: linear-gradient(#f2f2f0 50%, #737f5b 50%);
    background-size: 100% 200%;
    background-position: 0 2.5%;
    border-radius: 5px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.12);
}

.card-wwo:hover .icon{
    background-color: #3B3E37;
    color: #fff;
}

/* KUNG GUSTO NYONG BIGYAN NG HOVER TULAD NG DATI GUYZ */

/* .card-wwo:hover {
    background:  #979F6E;
} */

/* .card-wwo:hover .icon{
    color:  #979F6E;
    background-color: #fff;
} */

/* .card-wwo:hover .offer-title, .card-wwo:hover .offer-title {
    color: #fff;
} */

.wcg {
    text-align: justify
}

.wcg-text {
    font-size: 18px;
}

/* #wiggle {
    position: relative;
    background: white;
    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
    color: white;
    box-shadow: 15px 15px #979F6E;
    transition: all .4s ease;
  }

#wiggle:hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 10px 10px #3B3E37;
    transition: all .4s ease;
  } */

</style>