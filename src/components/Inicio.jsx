import React from 'react'



const Inicio = () => {

  

  return (
    <div class="p-3 m-0 border-0 bd-example">
      <h1>esto es el inicio</h1>
      <hr />
      <section>
      {/*<!-- Example Code -->*/}
    
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="bd-placeholder-img bd-placeholder-img-lg" alt="..." width="800" height="400"/>
            </div>
            <div class="carousel-item">
              <img src="..." class="bd-placeholder-img bd-placeholder-img-lg" alt="..." width="800" height="400"/>
            </div>
            <div class="carousel-item">
              <img src="..." class="bd-placeholder-img bd-placeholder-img-lg" alt="..." width="800" height="400"/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    
    {/*<!-- End Example Code -->*/}


      </section>
    </div>
    
  )
}

export default Inicio