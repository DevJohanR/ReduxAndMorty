import SearchBar from "./SearchBar"

const Nav = ({onSearch})=>{

const handleRandomCharacter = () =>{
    const randomId =Math.floor(Math.random() * 826) + 1;
    onSearch(randomId); // Llamar a onSearch con el ID generado
}


    return(
        <>
        <SearchBar onSearch={onSearch} /> 
        <button onClick={handleRandomCharacter}>Agregar Aleatorio</button>
        </>



    )
}

export default Nav;