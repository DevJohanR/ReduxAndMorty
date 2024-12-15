// actions.js

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

// Action creator para agregar un personaje a favoritos
export const addFav = (character)=>{
    console.log("Acción ADD_FAV creada con payload:", character); // Verifica la acción
    return{
        type: ADD_FAV,// Este nombre debe coincidir con el caso en el reducer
        payload: character // El personaje a agregar
    }
}

export const removeFav = (id) =>{
return{
    type: REMOVE_FAV, // Este nombre debe coincidir con el caso en el reducer
    payload: id // El id del personaje a eliminar
}
}