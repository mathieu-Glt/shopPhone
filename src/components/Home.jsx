import React from "react";
import { Link } from "react-router-dom";
import inventory from './inventory';

function Home() {
    return (
        <div className="body_home">
            <div className="banner">
                <h2>Los productos de +593 CELL PHONE </h2>
                <p className="normal">
                    Sabes que es un producto open box?
                    Es un producto de marca 100% original, cuya caja o empaque fue abierto,
                    entre las causas principales: porque el embalaje pudo sufrir cierto daño
                    estético o para colocarles como muestras en tiendas de
                    Apple y pueden observarse mínimos signos de uso.
                </p>
                <div className="iphone__images">
                    <img src={process.env.PUBLIC_URL + `/images/iphones.jpg`} alt="iphones" />
                    <p className="para__iphone">Mejor precio del Ecuador<br></br>Garantizado !!</p>
                </div>
            </div>
            <div >
                <h1 className="title">Celulares</h1>
            </div>

            <div className="container-products">
                {inventory.map((item) => (
                    <Link className="text_info"
                        to={{
                            pathname: "#",

                        }}
                        key={item.id}
                    >
                        <div className="bloc-card">
                            <div className="product-card">
                                <div className="visual-aspect">
                                    <img
                                        className="img-product"
                                        src={process.env.PUBLIC_URL + `/images/${item.img}.jpg`}
                                        alt="product" />
                                </div>
                                <div className="info">
                                    <p className="text_info">{item.title}</p>
                                    <p className="text_info">Memoria: {item.memory}</p>
                                    <p className="text_info">Certificado: {item.certificado}</p>
                            </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            <div >
                <h1 className="title1">Accessorios</h1>
            </div>

                <div className="iphone__images">
                    <img src={process.env.PUBLIC_URL + `/images/coquesiphone.jpg`} alt="coques_de_iphones" />
                    <p className="para__iphone1">Ven y descubre todos nuestros accesorios <br></br>en el menú de navegación link accesorios !!</p>
                </div>



        </div>
    );
};

export default Home;