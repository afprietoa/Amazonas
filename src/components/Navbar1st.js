
import React from 'react'
import { Button, DropdownButton,  FormControl, InputGroup, Dropdown, Navbar} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchAsync } from '../actions/ItemsAction'
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {logoutAsync} from '../actions/loginAction'

export const Navbar1st = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }

    

    const [ values, handleInputChange] = useForm('')

   

    const handleSearch = (e) =>{
        e.preventDefault()
        console.log(values)
        dispatch(searchAsync(values))
       
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-white  ">
                <div className="container-fluid d-flex  justify-content-between">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Brand className="text-white"><Link to="/home"><img alt="logo Amazonas" src="https://i.imgur.com/LJg8tg0.png" /></Link></Navbar.Brand>
                    <div className="collapse navbar-collapse d-flex  justify-content-between" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-1 ms-1 mb-2 mb-lg-0 ">



                            <li className="nav-item">
                                <Link className="flex-sm-fill text-sm-center nav-link text-white " aria-current="page" to="/map"> Deliver to  <br/><strong><i className="fas fa-map-marker-alt" style={{ color: 'coral' }}></i> Colombia </strong></Link>
                            </li>

                        </ul>

                        <InputGroup className="search" id="search">
                            <DropdownButton
                                
                                title="All"
                                id="input-group-dropdown-1"
                                
                            >
                                <Dropdown.Item href="#">All Departments</Dropdown.Item>
                                <Dropdown.Item href="#">Arts & Crafts</Dropdown.Item>
                                <Dropdown.Item href="#">Automotive</Dropdown.Item>
                                {/* <Dropdown.Divider /> */}
                                <Dropdown.Item href="#">Baby</Dropdown.Item>
                                <Dropdown.Item href="#">Beauty & Personal Care</Dropdown.Item>
                                <Dropdown.Item href="#">Books</Dropdown.Item>
                                <Dropdown.Item href="#">Computers</Dropdown.Item>
                            </DropdownButton>
                            
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="search"
                                name="search"
                                onChange={handleInputChange}
                            />
                            <Button  id="button-addon2" onClick={handleSearch}>
                            <i className="fas fa-search"></i>
                            </Button>
                        </InputGroup>
                        <form className="d-flex m-3">

                            
                            <span className="text-white me-2 ms-2"> Hello: Henan,<br/><strong>Account & List <i className="fas fa-caret-down" style={{ color: 'coral' }}></i></strong></span>
                            <span className="text-white me-2 ms-2"> Returns <br/><strong>& Orders</strong></span>
                            <span><Link className="flex-sm-fill text-sm-center nav-link text-white " aria-current="page" to="/Cart"> <i className="fa fa-shopping-cart" style={{ color: 'white' }}></i> Cart </Link></span>
                        </form>



                        <button className="btn btn-danger me-2" onClick = {() => handleLogout()}> Logout </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
