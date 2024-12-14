// actions.js

// Action creator para agregar un personaje a favoritos
export const addFav = (character)=>{
    return{
        type: 'ADD_FAV',// Este nombre debe coincidir con el caso en el reducer
        payload: character // El personaje a agregar
    }
}

export const removeFav = (id) =>{
return{
    type: 'REMOVE_FAV', // Este nombre debe coincidir con el caso en el reducer
    payload: id // El id del personaje a eliminar
}
}