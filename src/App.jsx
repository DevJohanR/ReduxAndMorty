import Cards from "./components/Cards/Cards.jsx"
import Nav from "./components/Nav/Nav.jsx"
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import PageCharacterFavorite from "./pages/PageCharacterFavorite.jsx";
import PageDetail from "./pages/PageDetail.jsx";

function App() {
const[characters, setCharacters] = useState([]);

const onSearch = (id) =>{
 /*DEBUG */ console.log("ID recibido en onSearch:", id);

const alreadyExists = characters.some(character => character.id ===parseInt(id));


 if (alreadyExists) {
   // Si ya existe, mostramos una alerta o mensaje
   window.alert("¡El personaje ya ha sido agregado!");
   return; // Salimos de la función sin hacer nada más
}

  axios(`https://rym2.up.railway.app/api/character/${id}?key=riascosjohan333`).then(
    ({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    }
 );

}

/*
Filtra los Personajes
Dentro de la función, se utiliza el método filter para quedarte con los personajes cuyo id sea diferente al que recibes por parámetro.

setCharacters para actualizar el estado con los personajes filtrados.

*/

const onClose = (id) => {
   const filteredCharacters = characters.filter(character => character.id !== parseInt(id));
   setCharacters(filteredCharacters);
 }
 

  return (
    <div className='App'>
   {/* */} 
   <Nav onSearch={onSearch} />
 
    <Routes>
    <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />

        <Route path="/favorites" element={<PageCharacterFavorite />} />
       <Route path="/detail/:id" element={<PageDetail/>}></Route>
      </Routes>
 </div>
  )
}

export default App
