import React from "react";
import { Link } from "react-router-dom";
import accessoires from './accessoires';


function Accessoires() {
    return(

        <div className="container-products">
            <h1 className="title3">Accessorios</h1>
            <div className="text_intro">
            <h2><span>+593 CELL PHONE</span> te ofrece en todos sus equipo :</h2>                
            <ul className="intro">
                    <li>Cable</li>
                    <li>Cargador</li>
                    <li>Mica</li>
            </ul>
            </div>
            <div className="text_intro3">
                <h2>Por la compra en effectivo o transferencia </h2>
                
                    <p>recibe grandes promociones</p>
                
            </div>
    
            
            {accessoires.map((item) => (
                <Link className="text_info"
                    to={{
                        pathname: `/accessoires/${item.title.replace(/\s+/g, "").
                            trim()}`,
    
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