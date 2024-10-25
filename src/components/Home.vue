<template>
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
                        <img src="../assets/home-slide-1.jpg" class="d-block w-100 c-img" alt="...">
                        <div class="carousel-caption top-0 mt-4 d-none d-md-block">
                            <div class="animated bounceInRight" style="animation-delay: 1s;">
                                <p class="mt-5 pt-5 fs-4 text-light opacity-75">Explore, Discover, Travel</p>
                                <h1 class="display-1 fw-semibold text-uppercase">Travel Around <br> the World</h1>
                                <button type="button" class="btn btn-dark mt-3 fs-6 px-4 py-2">Discover More</button>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src="../assets/home-slide-2.jpg" class="d-block w-100 c-img" alt="...">
                        <div class="carousel-caption top-0 mt-4 d-none d-md-block">
                            <p class="mt-5 pt-5 fs-4 text-light opacity-75">Explore, Discover, Travel</p>
                            <h1 class="display-1 fw-semibold text-uppercase">Discover The<br> New Places</h1>
                            <button type="button" class="btn btn-dark mt-3 fs-6 px-4 py-2">Discover More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/home-slide-3.jpg" class="d-block w-100 c-img" alt="...">
                        <div class="carousel-caption top-0 mt-4 d-none d-md-block" data-mdb-animation-init data-mdb-animation-reset="false" data-mdb-animation="zoom">
                            <p class="mt-5 pt-5 fs-4 text-light opacity-75">Explore, Discover, Travel</p>
                            <h1 class="display-1 fw-semibold text-uppercase">Make Your Tour Worthwhile</h1>
                            <button type="button" class="btn btn-dark mt-3 fs-6 px-4 py-2">Discover More</button>
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
    color: #42b983;
}

/* CAROUSEL START */
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

.c-img {
    height: 100%;
    object-fit: cover;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>