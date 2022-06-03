import React from "react";
import { Link } from "react-router-dom";
import iphones from './iphones';


function Openbox() {
    return(

    <div className="container-products">
        <div className="image_price">
            <img className="img-fluid" src={process.env.PUBLIC_URL + `/images/Openbox.jpeg`} alt=""  />
        </div>
        <h1 className="title3">Celulares</h1>
        <div className="text_intro">
            <h2><span>+593 CELL PHONE</span> te ofrece al comprar un producto :</h2>
                <p className="paragraphe">
                Un regalo diferente adicional cada mes por tu compra
                Entrega inmediata
                Garantia open box
                Envios seguros a domicilio
                </p>
        </div>
        <div className="text_intro2">
            <h2 >Por la compra en effectivo o transferencia</h2>
           
                <p className="paragraphe">recibe grandes promociones</p>
            
        </div>

        
        {iphones.map((item) => (
            <Link className="text_info"
                to={{
                    pathname: `/produits/${item.title.replace(/\s+/g, "").
                        trim()}`,

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
);
};

export default Openbox;