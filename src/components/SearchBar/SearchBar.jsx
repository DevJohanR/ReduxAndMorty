import { useState } from "react";
import styles from "./SearchBar.module.css"; // Importa los estilos
import { Link } from "react-router-dom";

export default function SearchBar({onSearch}) {

      const [id, setId] = useState("");

      const handleChange = (event) =>{
         const value = event.target.value;

         setId(value);
         console.log("Valor actual del estado id:", value);
      }


      const handleRandomCharacter = () =>{
         const randomId =Math.floor(Math.random() * 826) + 1;
         onSearch(randomId); // Llamar a onSearch con el ID generado
     }
     

   return (
      <div className={styles.divContainer}>
 <div className={styles.ulContainer}>
    <ul>
 
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/favorites">Favoritos</Link></li>
      <li><Link>¿Qué Es Esto, Rick?</Link></li>
    </ul>

    <ul>
      <li>Elemento li</li>
      <li>Elemento li</li>
      <li>Elemento li</li>
    </ul>
  </div>

         <div className={styles.searchBar}>
         <input 
         type='search'
         value={id}
         onChange={handleChange}
         />
        <button className={styles.btnAddCharacter} onClick={() => onSearch(id)}>+</button>
       <button className={styles.btnRandom} onClick={handleRandomCharacter}>Personaje Aletorio</button> 
        </div>
     
      </div>
   );
}
