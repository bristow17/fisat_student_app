import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>

            <Navbar />


            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://campushunt.in/photogallery/FISAT%20.jpg" class="d-block w-100" alt="..." height="673px"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="https://fisat.ac.in/wp-content/uploads/2022/05/cover-foto-scaled-e1658141054290.jpg" class="d-block w-100" alt="..." height="673px"></img>                 
                    </div>
                    <div class="carousel-item">
                        <img src="https://d1h684srpghjti.cloudfront.net/assets/images/gallary_photos/t1671519894_vKXAPtH41x.jpg?w=800&format=webp" class="d-block w-100" alt="..." height="673px"></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </div>


    )
}

export default HomePage