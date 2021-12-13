import React, { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { useSelector } from 'react-redux'


export const Details = () => {
   

    const {items} = useSelector(store => store.item)

    let artName = localStorage.getItem('itemName')
    

    const artSelected = (name) => {
        return items.find(ele=> ele.name === name)
    }

    let art = artSelected(artName)

    console.log(art)

    const [urlImg, setUrlImg] = useState(art.image);

    const clickme = ({target}) => {

        console.log(target.src)

        setUrlImg(target.src)

    }

    return (
        <>
                <div className="hero">
        <div className="d-flex m-4">
            <div className="col">

                <div className="slider">
                    <div className="product ms-5">

                        <img src={art.image} alt="" onClick={clickme}/>
                        <img src="https://sc04.alicdn.com/kf/U957a559ab3854fa5ba79398f6450ec74H.jpg" alt="" onClick={clickme}/>
                        <img src="https://sc04.alicdn.com/kf/U40314b7e330b4baba83385db580e8523o.jpg" alt="" onClick={clickme}/>
                        <img src="https://sc04.alicdn.com/kf/U43f4ff07f81a418f97f574b1c7fbedf6J.jpg" alt="" onClick={clickme}/>

                    </div>
                    <div className="preview">
                        {/* <img src="https://sc04.alicdn.com/kf/Hbe1c752072794ce68969265904825418f.jpg" id="imagebox" alt=""/> */}
                        <ReactImageMagnify {...{
                            
                      smallImage: {
                        
                        // isFluidWidth: true,
                        src: urlImg,
                        width: 500,
                        height: 500,
                        
                        
                      },
                      largeImage: {
                        src: urlImg,
                        width: 800,
                        height: 1050,
                        
                      }
                    }} />
                    </div>
                </div>

            </div>
            <div className="col">

                <div className="content">
                    
                    <h4>{art.name}</h4>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                    </div>
                    <hr/>
                    
                    <strong><p>price: <span className="color-red"> USD $ {art.price} </span></p></strong>
                    <strong><p>You save: <span className="color-red"> USD $ {art.rebate} ({Math.round(art.rebate/art.price*100)}% </span></p></strong>
                    
                    <hr/>
                    <h6>About this item</h6>
                    <p className="aboutItem"><ul>
                            <li>{art.description}</li>
                            <li>Support ATX / Micro ATX / ITX Motherboard, USB3.0/USB2.0/HD Audio Ports, and Improved Cable Managemen</li>
                            <li>Support VGA up to 350mm in Length, CPU cooler up to 165mm in Height</li>
                        </ul></p>
                </div>

            </div>

        <div className="section-price col" >
          <p className="color-red">USD $100,669.00</p>
          <p>Free shipping. <strong>Details </strong></p>
          <p>Arrives: <b>dic 15-28</b></p>
          <p className="color-guinda">You may receive it after Christmas.</p>
          <button className="btnPrice">
          <i className="fas fa-shopping-cart"></i>
            <span>Add To Cart</span>
          </button>
          <button className="btnPrice color ">
          <i className="fas fa-play"></i>
            <span>Buy Now</span>
          </button>
          <div className="seguridad">
          <i className="fas fa-lock"></i>
            <strong>Secure transaction</strong>
          </div>
        </div>

        </div>


        <div className="related">
            <h2>related items</h2>
            <div className="row">
                <div className="columns">
                    <div className="items">
                        <img src="https://sc04.alicdn.com/kf/Haf8cc42952a14342a690953847b5c0704.jpeg" alt=""/>
                        <div className="details">
                            <p>Ultra Thin Gaming Laptops 2in1</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>

                            <p>USD $120.00</p>

                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="items">
                        <img src="https://sc04.alicdn.com/kf/H2a6b285e564848469524a3775c0f46e9C.jpg" alt=""/>
                        <div className="details">
                            <p>Wholesale Good Price Oem</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>

                            <p>USD $80.00</p>

                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="items">
                        <img src="https://sc04.alicdn.com/kf/HTB1a2zEaBGE3KVjSZFhq6AkaFXaw.jpg" alt=""/>
                        <div className="details">
                            <p>Notebook Air 13.3" Ultrabook</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>

                            <p>USD $110.00</p>

                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="items">
                        <img src="https://sc04.alicdn.com/kf/U5110defaad4247b3b542b75d7c11fae9V.jpg" alt=""/>
                        <div className="details">
                            <p>Netbook windows Apollo N3350</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>

                            <p>USD $100.00</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>

        </>
    )
}
