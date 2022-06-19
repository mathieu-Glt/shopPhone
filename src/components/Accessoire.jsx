import React from "react";
import { Link } from "react-router-dom";
import accessoires from './accessoires';


function Accessoires() {
    return(

        <div className="container-products">
            <h1 className="title3">Accesorios</h1>
            <div className="text_intro">
            <p className="text_intro4"><span>+593 CELL PHONE</span> te ofrece en todos sus equipos :                 
                cable, 
                cargador,
                mica.
                </p>
            </div>
            <div className="text_intro">
                <h2>Por la compra en efectivo o transferencia recibe grandes promociones</h2>
            </div>
    
            
            {accessoires.map((item) => (
                <Link className="text_info"
                    to={{
                        pathname: "#"
    
                    }}
                    key={item.id}
                >
                    <div className="bloc-card">
                        <div className="product-card1">
                            <div className="visual-aspect">
                                <img
                                    className="img-accessoires"
                                    src={process.env.PUBLIC_URL + `/images/${item.img}.jpg`}
                                    alt="accessoires" />
                            </div>
                            <div className="info">
                                <p className="text_info1">{item.title}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
    
        </div>
    );
    };

export default Accessoires;