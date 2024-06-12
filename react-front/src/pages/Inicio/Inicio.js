import Img3slider from '../../assets/img/Img3slider.jpg';
import img1Slider from '../../assets/img/img1Slider.jpg';
import img2Slider from '../../assets/img/img2Slider.jpg';
import './Inicio.css'

const Inicio = ()=>{
    return<main>
        <div className='mai'></div>
    <div className="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active custom-carousel-item">
      <img src={Img3slider} class="d-block w-100 carr-img" alt="..." height="500px" />
    </div>
    <div class="carousel-item custom-carousel-item">
      <img src={img2Slider} class="d-block" alt="..." height="500px" />
    </div>
    <div class="carousel-item custom-carousel-item">
      <img src={img1Slider} class="d-block" alt="..." height="500px" />
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