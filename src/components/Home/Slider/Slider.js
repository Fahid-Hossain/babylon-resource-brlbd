import React from "react";

const Slider = () => {
  return (
    <>
     {/* <!-- Carousel wrapper --> */}
<div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
  {/* <!-- Indicators --> */}
  <div class="carousel-indicators">
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div class="carousel-inner">
    {/* <!-- Single item --> */}
    <div class="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp" class="d-block w-100" alt="Motorbike Smoke" style={{height:"100vh"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-vector/la-paz-bolivia-city-skyline-sky-background_596401-662.jpg?size=626&ext=jpg" class="d-block w-100" alt="Mountaintop" style={{height:"100vh",opacity:"0.7"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Second slide label</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" class="d-block w-100" alt="Woman Reading a Book" style={{height:"100vh"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Third slide label</h1>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* <!-- Carousel wrapper --> */}
    </>
  );
};

export default Slider;
