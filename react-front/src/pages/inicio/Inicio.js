import "./Inicio.css"

const Inicio = () => {
    return <main>
        <div className="container mt-5  ">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://exitocol.vtexassets.com/arquivos/ids/23151195/Lavadora-SAMSUNG-Carga-Superior-19-kg-42-lb-WA19CG6745BVCO-3499368_d.jpg?v=638538072191330000" className="d-block w-100 carr-img" alt="..." height="685px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://exitocol.vtexassets.com/arquivos/ids/23151186/Lavadora-SAMSUNG-Carga-Superior-18-kg-40-lb-WA18CG6745BVCO-3499367_c.jpg?v=638538072095430000" className="d-block w-100" alt="..." height="685px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://exitocol.vtexassets.com/arquivos/ids/23150929/Lavaseca-SAMSUNG-Carga-Frontal-20-kg-44lb-WD20T6300GPCO-3271087_b.jpg?v=638538071454330000" className="d-block w-100" alt="..." height="685px" />
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
            <h2 className="products-title">Otros Productos</h2>
            <div className="items-container">
                <div className="item">
                    <img className="item-image" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/547756/w=1036,h=832,f=webp,fit=contain,q=85" alt="" height="200px" />
                    <h5 className="product-name">Detergente Liquido Ropa Ariel</h5>
                    <ul className="product-description">
                        <li>Garantía : 12 meses </li>
                        <li>Formato : Líquido</li>
                        <li>Origen Producto : Producto Nacional</li>
                        <li>Tipo : Jabon líquido para ropa</li>
                    </ul>
                </div>
                <div className="item">
                    <img className="item-image" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/608567/w=1036,h=832,f=webp,fit=contain,q=85" alt="" height="200px" />
                    <h5 className="product-name">Detergente Líquido Ropa Tide </h5>
                    <ul className="product-description">
                        <li>Alto : 28 cm</li>
                        <li>Ancho : 15 cm</li>
                        <li>Largo : 23 cm</li>
                        <li>Tipo : Jabón líquido para ropa</li>
                    </ul>
                </div>
                <div className="item">
                    <img className="item-image" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/606401/w=1036,h=832,f=webp,fit=contain,q=85" alt="" height="200px" />
                    <h5 className="product-name">Desmanchador Vanish Liquido Rosa</h5>
                    <ul className="product-description">
                        <li>Alto : 29 cm</li>
                        <li>Ancho : 9 cm</li>
                        <li>Largo : 29.5 cm</li>
                        <li>Tipo : Quitamanchas</li>
                    </ul>
                </div>
                <div className="item">
                    <img className="item-image" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/351386/w=1036,h=832,f=webp,fit=contain,q=85" alt="" height="200px" />
                    <h5 className="product-name">Detergente Polvo PQP Profesional Floral</h5>
                    <ul className="product-description">
                        <li>Garantía : 1 año</li>
                        <li>Contenido : 10 kilogramos</li>
                        <li>Uso : Hogar e institucional</li>
                        <li>Aroma: Floral</li>
                    </ul>
                </div>
                <div className="item">
                    <img className="item-image" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/490924/w=1036,h=832,f=webp,fit=contain,q=85" alt="" height="200px" />
                    <h5 className="product-name">Detergente Liquido Ropa Tide Simply89</h5>
                    <ul className="product-description">
                        <li>Tipo : Detergentes líquidos</li>
                        <li>Aroma : Original</li>
                        <li>Presentación : Tarro</li>
                        <li>Contenido : 4080ml</li>
                    </ul>
                </div>
                <div className="item">
                    <img className="item-image" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/454744/w=1036,h=832,f=webp,fit=contain,q=85" alt="" height="200px" />
                    <h5 className="product-name">Detergente Liquido Ropa Oscura Woolite</h5>
                    <ul className="product-description">
                        <li>Garantía : 12 meses</li>
                        <li>Rendimiento : 50 Lavadas</li>
                        <li>Contenido : Galon</li>
                        <li>Tipo : Jabones para Lavadoras</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
}

export default Inicio;