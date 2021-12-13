import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerItemAsync, updateAsync, listAsync, activeItem } from '../actions/ItemsAction'
import { useForm } from '../hooks/useForm'
import { fileUpload } from '../helpers/fileUpload'
import { List } from './List'
import styled from 'styled-components'
import { Form, Button, FloatingLabel } from 'react-bootstrap';

const SellContainer = styled.div`
    
   height: 100%;
    padding: 5% 10%;
    
    align-content: center;
    margin: 10%;
    margin-bottom:0;
    border: 1px solid lightgray;
  

`
const ListContainer = styled.div`
    
   height: 100%;
    padding: 5%;
    align-content: center;
    margin: 5%;
  

`

export const Sell = () => {
    const dispatch = useDispatch()

    const [ values, handleInputChange, reset, setValues ] = useForm({
        name: '',
        price: '',
        rebate: '',
        description: '',
        image: ''
    })

    const { name, price, rebate, description, image } = values

    

    const handlePictureClick = () => {
        document.getElementById('fileSelector').click()
    }
    const handleFileChanged = (e) => {
        console.log(e.target.files[0])
        console.log(image)
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                values.image = response
                console.log(values.image)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        dispatch(listAsync())
    }, [dispatch])

    const [updateForm, setUpdateForm] = useState(false)

    const handleUpdate = (item) => {
        dispatch(activeItem(item.id, item))
        setUpdateForm(true)
        setValues({
            ...item
        })
    }
    const handlePut = (e) => {
        e.preventDefault()
        dispatch(updateAsync(values))
        console.log(values)
        reset()
        setUpdateForm(false)
    }
    const handlePost = (e) => {
        e.preventDefault()
        console.log(values)
        console.log(image)
        dispatch(registerItemAsync(name, price, rebate, description, image))
        reset()
    }
    return (
        <>
            <SellContainer>

                <Form>
                    <h1> Manage products</h1>
                    <Form.Group>
                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="name">name</Form.Label>
                            <Form.Control

                                type="text"
                                name="name"
                                
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control

                                type="text"
                                name="price"
                                
                                value={price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="rebate">Rebate</Form.Label>
                            <Form.Control

                                type="text"
                                name="rebate"
                                
                                value={rebate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group col-md-0">
                            <Form.Label htmlFor="description"> Description </Form.Label>
                            {/* <Form.Control

                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                onChange={handleInputChange}
                                required
                            /> */}
                            <FloatingLabel controlId="floatingTextarea2" label="">
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    
                                    value={description}
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange={handleInputChange}
                                />
                            </FloatingLabel>
                        </div>

                        <br />
                        <div className="form-group col-md-0">
                            <Form.Control
                                id="fileSelector"
                                type="file"
                                name="image"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                            />


                        </div>



                        <div>


                            <div className="d-flex gap-2 my-3">
                                <Button className="btn1 btn-secondary"
                                    onClick={handlePictureClick} >Image <i className="fas fa-paperclip"></i></Button>

                                {
                                    !updateForm
                                        ?
                                        <Button
                                            className="btn2 btn-dark"
                                            type="submit" onClick={handlePost}>Upload <i className="fas fa-upload"></i></Button>
                                        :
                                        <Button
                                            className="btn2 btn-dark"
                                            type="submit" onClick={handlePut}>Update <i className="fas fa-edit"></i></Button>

                                }
                            </div>
                        </div>


                    </Form.Group>
                </Form>
            </SellContainer>


            <ListContainer>
                <h1>Stock-taking</h1>
                <hr /><br /><br />
                <List handleUpdate={handleUpdate} />
            </ListContainer>

        </>
    )
}