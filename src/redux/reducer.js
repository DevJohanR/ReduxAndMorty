const initialState = {
    myFavorites: [
        {id: 1, name : "Johan 1"},
        {id: 2, name : "Mile 1"},
        {id: 3, name: "Manu wiwoj"}
    ],
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return{...state};
    }
}

export default rootReducer;