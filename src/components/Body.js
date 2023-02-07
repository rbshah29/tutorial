import React from "react";
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"

const Body = () => {

    const myFunction = (carName) => {
        alert(carName)
    }

    return(
        <div>
            <body>
                <div className="container my-5">

                    <div className="card details-card p-0">
                        <div className="row">

                            <div className="col-md-6 col-sm-12">
                                <img className="img-fluid details-img" style={{"width": "100%"}} src={image1} alt=""/>
                            </div>
                            <div className="col-md-6 col-sm-12 description-container p-5">
                                <div className="main-description">
                                    <h3>Main Car</h3>
                                    <hr/>
                                    <p className="product-price"><p>Current Bid Amount :- </p>$1199.00</p>
                                    <form className="add-inputs" method="post">

                                    <input type="text" id="amount" name="amount"/><button className="btn btn-primary" type="button">Place Bid</button>
                                    </form>
                                    <div style={{"clear":"both"}}></div>

                                    <hr/>


                                    <p className="product-title mt-4 mb-1">About this product</p>
                                    <p className="product-description mb-4">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis assumenda voluptatem tempore dolor quod. Expedita, id, minus similique dolor sed adipisci aliquam natus amet doloremque delectus cupiditate? Sint, quasi, ad necessitatibus omnis quaerat tenetur corporis porro aut, natus ex ab id vel odit veniam fugiat temporibus aperiam quia rem minima!
                                    </p>

                                    <hr/>

                                    <p className="product-title mt-4 mb-1">Recommended Cars</p>
                    
                                    <div id="productView" className="product-grid">
                                        <div className="product span3">
                                            <div className="product-image">
                                                <img src={image2} />
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Car 1</a>
                                            </h3>
                                            <p className="product-info">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            </p>        
                                            <p className="product-price">
                                                1000$
                                            </p>
                                            <button className="btn btn-primary" type="button" onClick={()=>myFunction("Intrested in Car 1")}>Intrested</button>
                                        </div>
                                        <br />
                                        <div className="product span3">
                                            <div className="product-image">
                                                <img src={image3} />
                                            </div>
                                            <h3 className="product-name">
                                                <a href="#">Car 2</a>
                                            </h3>
                                            <p className="product-info">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            </p>        
                                            <p className="product-price">
                                                1000$
                                            </p>
                                            <button className="btn btn-primary" type="button" onClick={()=>myFunction("Intrested in Car 2")}>Intrested</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"/>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"/>
                </div>
            </body>
        </div>
    )
}

export default Body;