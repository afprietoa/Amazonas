import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listAsync } from '../actions/ItemsAction'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const DetailsLink = styled(NavLink)`
text-decoration: none;
color: black;
`

export const Home = () => {
    const { items } = useSelector(store => store.item)
    const dispatch = useDispatch()
    console.log(items)
    dispatch(listAsync())
    return (
        <>


            <div className="d-flex ">
                <div className="col-4 mt-4 border-end border-2">


                    <center>
                        <h4 className="text-center">Free Shipping by Amazonas</h4>
                        <h5>
                            <span>
                                <input type="checkbox" />
                            </span>
                            Elegible for Free Shipping
                        </h5>
                        <h3>Department</h3>
                        <h5>Computer</h5>
                        <h5>Laptop</h5>
                        <h5>Screen</h5>
                        <h5>Gadget</h5>
                        <h3>Customer Review</h3>

                        <div className="rating2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>or more</span>

                        </div>

                        <div className="rating2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>or more</span>
                        </div>

                        <div className="rating2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <span>or more</span>
                        </div>

                        <div className="rating2">
                            <i className="fa fa-star"></i>
                            <span>or more</span>
                        </div>

                    </center>
                </div>


                <div className='col-8'>
                    {
                        (items) ?
                            (
                            
                                items.map((art, idx) => (
                                    
                                    <div className="mb-0">
                                        <div className="d-flex g-0 m-4 border-bottom border-2">
                                            <div className="col-md-4">

                                                <img src={art.image} alt={art.name} width="300" height="300" />


                                            </div>
                                            <div className="col-md-8 ms-4">
                                                <div className="card-body">
                                                    <h5 className="card-text" onClick={() =>{localStorage.setItem('itemName',art.name)}} ><DetailsLink to="/details" >{art.name}</DetailsLink></h5>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>

                                                    <p className="card-text"><small className="text-muted"></small></p>
                                                    <p className="card-text"><small className="text-muted">US ${art.price} <br/>US ${art.rebate} ({Math.round(art.rebate/art.price*100)}%)</small></p>
                                                    

                                                    {/* <p className="card-text">{art.description}</p>                        */}
                                                    <p className="card-text">Free Shipping to Colombia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                )
                                )) :
                            <p>Unavailable data</p>
                    }
                </div>
            </div>
        </>
    )
}
