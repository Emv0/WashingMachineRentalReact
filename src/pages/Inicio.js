const Inicio = ()=>{
    return<main>
    <div className="container mt-5  ">
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://w.forfun.com/fetch/1e/1ec4d0939be1c224fd8ff8c7731fc484.jpeg" class="d-block w-100 carr-img" alt="..."height="500px"/>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" class="d-block w-100" alt="..."height="500px"/>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.wallpapersafari.com/13/84/wlZ31L.jpg" class="d-block w-100" alt="..."height="500px"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <section className="products-section">
        <h2 className="products-title">Productos</h2>
        <div className="items-container">
            <div class="item">
                <img className="item-image" src="https://cdn1.totalcommerce.cloud/casalimpia/product-zoom/es/jabon-liquido-multiusos-casalimpia-3785ml-1.webp" alt="" height="200px"/>
                <h5 className="product-name">Nombre producto</h5>
                <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam tempore a inventore laboriosam mollitia eius alias?</p>
            </div>
            <div class="item">
                <img className="item-image" src="https://cdn1.totalcommerce.cloud/casalimpia/product-zoom/es/jabon-liquido-multiusos-casalimpia-3785ml-1.webp" alt="" height="200px"/>
                <h5 className="product-name">Nombre producto</h5>
                <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam tempore a inventore laboriosam mollitia eius alias?</p>
            </div>                
            <div class="item">
                <img className="item-image" src="https://cdn1.totalcommerce.cloud/casalimpia/product-zoom/es/jabon-liquido-multiusos-casalimpia-3785ml-1.webp" alt="" height="200px"/>
                <h5 className="product-name">Nombre producto</h5>
                <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam tempore a inventore laboriosam mollitia eius alias?</p>
            </div>
            <div class="item">
                <img className="item-image" src="https://cdn1.totalcommerce.cloud/casalimpia/product-zoom/es/jabon-liquido-multiusos-casalimpia-3785ml-1.webp" alt="" height="200px"/>
                <h5 className="product-name">Nombre producto</h5>
                <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam tempore a inventore laboriosam mollitia eius alias?</p>
            </div>
            <div class="item">
                <img className="item-image" src="https://cdn1.totalcommerce.cloud/casalimpia/product-zoom/es/jabon-liquido-multiusos-casalimpia-3785ml-1.webp" alt="" height="200px"/>
                <h5 className="product-name">Nombre producto</h5>
                <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam tempore a inventore laboriosam mollitia eius alias?</p>
            </div>                
            <div class="item">
                <img className="item-image" src="https://cdn1.totalcommerce.cloud/casalimpia/product-zoom/es/jabon-liquido-multiusos-casalimpia-3785ml-1.webp" alt="" height="200px"/>
                <h5 className="product-name">Nombre producto</h5>
                <p className="product-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veniam tempore a inventore laboriosam mollitia eius alias?</p>
            </div>
        </div>
    </section>
</main>
}

export default Inicio;