import React  from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync} from '../actions/ItemsAction'


export const List = ({handleUpdate}) => {
    const {items} = useSelector(store => store.item)
    console.log(items)
    const dispatch = useDispatch()

 

    return (
        <>
            <div>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                        (items) ?
                            (
 
                                items.map((art, idx) => (
 
                                    <tr key={idx}>
                                        <td>{art.name}</td>
                                        <td><img src={art.image} alt="" width="50px" /></td>
                                        <td>{art.description}</td>
                                        <td>{art.price}</td>
                                        
                                        
 
                                        <td>
                                        <button className ="btn btn-primary" onClick = {()=>handleUpdate(art)} 
                                       ><i className="fas fa-pen-alt"></i></button>
                                            <button className ="btn btn-danger" onClick = {()=>dispatch(deleteAsync(art.name))}
                                       ><i className="fas fa-trash-alt"></i> </button>
                                       
                                        </td>
 
                                    </tr>
                                )
                                )
 
                            ) :
                            <p>Unavailable data</p>
                    }


                </tbody>
                
            </Table>
            
        </div>
        </>
    )
}