import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import {typesItems} from '../types/types'


// Synchronous action
export const registerItemSync = (item) =>{
    return{
        type: typesItems.register,
        payload: item
    }
}

// Asynchronous action
export const registerItemAsync = (name, price, rebate, description, image) =>{
    return(dispatch)=>{
    const item = {
        name,
        price,
        rebate,
        description,
        image
    }
    addDoc(collection(db,'items'), item)
    .then(resp =>{
        dispatch(registerItemSync(item))
    })
    .catch(error => {
        console.log(error)
    })
    }
}

export const listSync = (item) =>{
    return{
        type: typesItems.list,
        payload: item
    }
}

export const listAsync = () => {
    return async (dispatch)  =>{
        const querySnapshot = await getDocs(collection(db,'items'))
        const items = []
        querySnapshot.forEach((doc)=>{
            items.push({
                ...doc.data()
            })
        })
        dispatch(listSync(items))
    }
}

export const deleteSync = (name) =>{
    return{
        type: typesItems.delete,
        payload: name
    }
}
export const deleteAsync = (name) =>{
    return async(dispatch) =>{
        const artCollection = collection(db, 'items')
        const q = query(artCollection, where('name','==',name))
        const data = await getDocs(q)
        data.forEach((docu)=>{
            deleteDoc(doc(db,'items',docu.id))
        })
        dispatch(deleteSync(name))
        dispatch(listAsync())
    }
}

export const activeItem = (id, item) =>{
    return{
        type: typesItems.active,
        payload:{
            id,
            ...item
        }
    }
}

export const updateAsync = (item) =>{
    console.log(item)
    return async (dispatch) => {
        const artCollection = collection(db, 'items')
        const q = query(artCollection,where('name','==',item.name))
        const data = await getDocs(q)
        data.forEach((docu) =>{
            updateDoc(doc(db,'items',docu.id),{
                name: item.name,
                price: item.price,
                rebate: item.rebate,
                description: item.description,
                image: item.image
            })
        })
        dispatch(listAsync())
    }
}

export const searchAsync = (item) =>{
    return async(dispatch) =>{
        const itemCollections = collection(db,'items')
        const q = query(itemCollections, where('name','==',item))
        const data = await getDocs(q)
        const art = []
        data.forEach((docu) =>{
            art.push(docu.data())
        })
        dispatch(searchSync(art))
    }
}

export const searchSync = (item) =>{
    return{
        type: typesItems.search,
        payload: item
    }
}